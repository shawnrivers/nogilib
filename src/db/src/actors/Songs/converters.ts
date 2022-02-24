import * as path from 'path';
import {
  DiscographyRawArray,
  DiscographyRawObject,
} from 'db/src/actors/Discography/models';
import { SongRaw, SongResult } from 'db/src/actors/Songs/models';
import { NO_ARTWORK_IMAGE_FILENAME } from 'db/src/constants/paths';
import {
  convertPathnameToClientStaticFileUrl,
  findFilePathname,
  getResponsiveImageUrl,
} from 'db/src/utils/path';
import { sortByDate } from 'utils/sorting';

type ConvertSongSingle = (params: {
  songTitle: SongRaw['title'];
  singlesRawArray: DiscographyRawArray;
}) => SongResult['single'];

export const convertSongSingle: ConvertSongSingle = ({
  songTitle,
  singlesRawArray,
}) => {
  for (const single of singlesRawArray) {
    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        return {
          title: single.title,
          number: single.number,
        };
      }
    }
  }

  return { title: '', number: '' };
};

type ConvertSongAlbums = (params: {
  songTitle: SongRaw['title'];
  albumsRawArray: DiscographyRawArray;
}) => SongResult['albums'];

export const convertSongAlbums: ConvertSongAlbums = ({
  songTitle,
  albumsRawArray,
}) => {
  const songAlbumsWithRelease: (SongResult['albums'][0] & {
    release: string;
  })[] = [];

  for (const album of albumsRawArray) {
    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        songAlbumsWithRelease.push({
          title: album.title,
          number: album.number,
          release: album.release,
        });
      }
    }
  }

  return sortByDate(songAlbumsWithRelease, 'release').map(
    ({ title, number }) => ({ title, number })
  );
};

export const convertSongOtherCds = (params: {
  songTitle: SongRaw['title'];
  otherCdsRawArray: DiscographyRawArray;
}): SongResult['otherCds'] => {
  const songOtherCdsWithRelease: (SongResult['albums'][0] & {
    release: string;
  })[] = [];

  for (const otherCd of params.otherCdsRawArray) {
    for (const otherCdSong of otherCd.songs) {
      if (otherCdSong.title === params.songTitle) {
        songOtherCdsWithRelease.push({
          title: otherCd.title,
          number: otherCd.number,
          release: otherCd.release,
        });
      }
    }
  }

  return sortByDate(songOtherCdsWithRelease, 'release').map(
    ({ title, number }) => ({
      title,
      number,
    })
  );
};

type ConvertSongArtwork = (params: {
  songTitle: SongRaw['title'];
  songSingleResult: SongResult['single'];
  songAlbumsResult: SongResult['albums'];
  songOtherCdsResult: SongResult['otherCds'];
  singlesRawObject: DiscographyRawObject;
  albumsRawObject: DiscographyRawObject;
  otherCdsRawObject: DiscographyRawObject;
}) => SongResult['artwork'];

export const convertSongArtwork: ConvertSongArtwork = ({
  songTitle,
  songSingleResult,
  songAlbumsResult,
  songOtherCdsResult,
  singlesRawObject,
  albumsRawObject,
  otherCdsRawObject,
}) => {
  const noArtworkUrl = getResponsiveImageUrl(
    convertPathnameToClientStaticFileUrl(
      findFilePathname(
        path.join('public', 'images', 'artworks'),
        NO_ARTWORK_IMAGE_FILENAME
      ) ?? ''
    )
  );

  if (songSingleResult.title !== '') {
    const single = singlesRawObject[songSingleResult.title];

    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        return (
          single.artworks.find(
            artwork => artwork.type === singleSong.inCdType[0]
          )?.url ?? noArtworkUrl
        );
      }
    }
  }

  if (songOtherCdsResult.length > 0) {
    const oldestSongOtherCdTitle = songOtherCdsResult
      .slice()
      .reverse()[0].title;
    const otherCd = otherCdsRawObject[oldestSongOtherCdTitle];

    for (const otherCdSong of otherCd.songs) {
      if (otherCdSong.title === songTitle) {
        return (
          otherCd.artworks.find(
            artwork => artwork.type === otherCdSong.inCdType[0]
          )?.url ?? noArtworkUrl
        );
      }
    }
  }

  if (songAlbumsResult.length > 0) {
    const oldestSongAlbumTitle = songAlbumsResult.slice().reverse()[0].title;
    const album = albumsRawObject[oldestSongAlbumTitle];

    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        return (
          album.artworks.find(artwork => artwork.type === albumSong.inCdType[0])
            ?.url ?? noArtworkUrl
        );
      }
    }
  }

  return noArtworkUrl;
};

export const convertSongType = (type: SongRaw['type']): SongResult['type'] =>
  type.includes('selected') ? 'coupling' : type;

export const convertSongPerformersTag = (params: {
  songType: SongRaw['type'];
  songSingleResult: SongResult['single'];
  songAlbumsResult: SongResult['albums'];
  songOtherCdsResult: SongResult['otherCds'];
  songPerformers: SongRaw['performers'];
  albumsRawObject: DiscographyRawObject;
  otherCdsRawObject: DiscographyRawObject;
}): SongResult['performersTag'] => {
  const {
    songType,
    songSingleResult,
    songAlbumsResult,
    songOtherCdsResult,
    songPerformers,
    albumsRawObject,
    otherCdsRawObject,
  } = params;

  let album: SongResult['performersTag']['album'] = {
    type: null,
    number: null,
  };

  if (
    songPerformers.type?.name === 'selected' &&
    songPerformers.type?.single !== ''
  ) {
    return {
      name: 'selected',
      album: {
        type: 'single',
        number: songPerformers.type.single,
      },
    };
  }

  if (songSingleResult.number !== '') {
    album = {
      type: 'single',
      number: songSingleResult.number,
    };
  } else if (songOtherCdsResult.length > 0) {
    const oldestSongOtherCdTitle = songOtherCdsResult
      .slice()
      .reverse()[0].title;

    album = {
      type: 'digital',
      number: otherCdsRawObject[oldestSongOtherCdTitle].number,
    };
  } else if (songAlbumsResult.length > 0) {
    const oldestSongAlbumTitle = songAlbumsResult.slice().reverse()[0].title;

    album = {
      type: 'album',
      number: albumsRawObject[oldestSongAlbumTitle].number,
    };
  }

  if (songType === 'unit') {
    return { name: songPerformers.unit, album };
  }
  if (songType.includes('generation')) {
    return { name: songType, album };
  }
  if (songType === 'title' || songType === 'selected' || songType === 'lead') {
    return { name: 'selected', album };
  }
  if (songType === 'under') {
    return { name: 'under', album };
  }

  return {
    name: '',
    album,
  };
};
