import cliProgress from 'cli-progress';
import { CdTitle } from 'server/actors/Discography/constants/cdTitle';
import { DiscographyRawArray } from 'server/actors/Discography/models';
import {
  filterAlbums,
  filterOtherCds,
  filterSingles,
} from 'server/actors/Discography/utils';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import {
  convertSongAlbums,
  convertSongOtherCds,
  convertSongSingle,
} from 'server/actors/Songs/converters';
import { SongsRawArray } from 'server/actors/Songs/models';
import {
  SpotifyAlbumId,
  SpotifyIds,
  SpotifySongId,
} from 'server/actors/Spotify/models';
import * as SpotifyApi from 'server/libs/spotify';
import { writeJSONFile } from 'server/utils/file';
import { arrayToObject, batchArray } from 'utils/array';

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.legacy);

type FetchOptions = {
  batchSize?: number;
  timeout?: number;
};

const DEFAULT_BATCH_SIZE = 10;
const DEFAULT_TIMEOUT = 2000;

function batchFetchPromises<T>(
  fetchPromises: (() => Promise<T>)[],
  batchSize: number,
  timeout: number
) {
  const fetchPromiseBatches = batchArray(fetchPromises, batchSize);

  return fetchPromiseBatches.map(batch => async () => {
    const albums = await Promise.all(batch.map(batch => batch()));
    return new Promise<T[]>(resolve => {
      setTimeout(resolve, timeout, albums);
    });
  });
}

async function getSpotifyAlbumArray(
  albumsRawArray: DiscographyRawArray,
  options?: FetchOptions
): Promise<SpotifyAlbumId[]> {
  console.log('Fetching albums');
  progressBar.start(albumsRawArray.length, 0);

  const batchSize = options?.batchSize ?? DEFAULT_BATCH_SIZE;
  const timeout = options?.timeout ?? DEFAULT_TIMEOUT;

  const allFetchPromises = albumsRawArray.map(album => async () => {
    const spotifyAlbum = await SpotifyApi.getSpotifyAlbum(album.title);
    return {
      key: album.key,
      title: album.title,
      id: spotifyAlbum?.id ?? null,
    };
  });

  const fetchPromisesWaitingChain = batchFetchPromises(
    allFetchPromises,
    batchSize,
    timeout
  );

  const albumIds: SpotifyAlbumId[] = [];

  for (let i = 0; i < fetchPromisesWaitingChain.length; i++) {
    const fetchBatch = fetchPromisesWaitingChain[i];
    const albumIdsBatch = await fetchBatch();
    albumIds.push(...albumIdsBatch);
    progressBar.update(Math.min((i + 1) * batchSize, albumsRawArray.length));
  }

  progressBar.stop();

  return albumIds;
}

async function getSpotifySongArray(params: {
  songsRawArray: SongsRawArray;
  singlesRawArray: DiscographyRawArray;
  otherCdsRawArray: DiscographyRawArray;
  albumsRawArray: DiscographyRawArray;
  spotifyAlbumArray: SpotifyAlbumId[];
  options?: FetchOptions;
}): Promise<SpotifySongId[]> {
  const {
    songsRawArray,
    singlesRawArray,
    otherCdsRawArray,
    albumsRawArray,
    spotifyAlbumArray,
    options,
  } = params;

  console.log('Fetching songs');
  progressBar.start(songsRawArray.length, 0);

  const batchSize = options?.batchSize ?? DEFAULT_BATCH_SIZE;
  const timeout = options?.timeout ?? DEFAULT_TIMEOUT;

  const songWithAlbumArray: {
    key: string;
    title: SongTitle;
    album: CdTitle | '';
  }[] = songsRawArray.map(song => {
    const songSingle = convertSongSingle({
      songTitle: song.title,
      singlesRawArray,
    });
    const songAlbum = convertSongAlbums({
      songTitle: song.title,
      albumsRawArray,
    })[0];
    const songOtherCd = convertSongOtherCds({
      songTitle: song.title,
      otherCdsRawArray,
    })[0];

    return {
      key: song.key,
      title: song.title,
      album:
        [songSingle, songOtherCd, songAlbum].filter(
          album => album !== undefined
        )[0]?.title ?? '',
    };
  });

  const spotifyAlbumMap = arrayToObject(spotifyAlbumArray, 'title');

  const allFetchPromises = songWithAlbumArray.map(song => async () => {
    const spotifySong = await SpotifyApi.getSpotifySong(
      song.title,
      song.album !== ''
        ? spotifyAlbumMap[song.album]?.id ?? undefined
        : undefined
    );

    return {
      key: song.key,
      title: song.title,
      id: spotifySong?.id ?? null,
    };
  });

  const fetchPromisesWaitingChain = batchFetchPromises(
    allFetchPromises,
    batchSize,
    timeout
  );

  const songIds: SpotifySongId[] = [];

  for (let i = 0; i < fetchPromisesWaitingChain.length; i++) {
    const fetchBatch = fetchPromisesWaitingChain[i];
    const songIdsBatch = await fetchBatch();
    songIds.push(...songIdsBatch);
    progressBar.update(Math.min((i + 1) * batchSize, albumsRawArray.length));
  }

  progressBar.stop();

  return songIds;
}

async function getSpotifyIds(
  albumsRawArray: DiscographyRawArray,
  songsRawArray: SongsRawArray,
  options?: FetchOptions
): Promise<SpotifyIds> {
  const spotifyAlbumArray = await getSpotifyAlbumArray(albumsRawArray, options);
  const spotifySongArray = await getSpotifySongArray({
    songsRawArray,
    singlesRawArray: filterSingles(albumsRawArray),
    albumsRawArray: filterAlbums(albumsRawArray),
    otherCdsRawArray: filterOtherCds(albumsRawArray),
    spotifyAlbumArray,
    options,
  });

  return { albums: spotifyAlbumArray, songs: spotifySongArray };
}

export async function generateSpotifyIds(
  albumsRawArray: DiscographyRawArray,
  songsRawArray: SongsRawArray,
  options?: FetchOptions
) {
  const spotifyIds = await getSpotifyIds(
    albumsRawArray,
    songsRawArray,
    options
  );

  writeJSONFile('./src/data/spotify.json', spotifyIds);
}
