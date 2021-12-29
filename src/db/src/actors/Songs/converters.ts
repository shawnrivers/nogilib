import { NO_ARTWORK_IMAGE_FILENAME } from 'db/src/constants/paths';
import {
  complementImageFilePathname,
  convertImageFilePath,
  findPathname,
  getResponsiveImageUrls,
} from 'db/src/utils/path';
import { SongResult, SongRaw } from 'db/src/actors/Songs/models';
import {
  DiscographyRawArray,
  DiscographyRawObject,
} from 'db/src/actors/Discography/models';
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
  const noArtworkUrl = getResponsiveImageUrls(
    findPathname(
      complementImageFilePathname('/images/artworks/'),
      NO_ARTWORK_IMAGE_FILENAME
    ) ?? ''
  );

  if (songSingleResult.title !== '') {
    const single = singlesRawObject[songSingleResult.title];

    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        const artworkUrlInSingle = single.artworks.find(
          artwork => artwork.type === singleSong.inCdType[0]
        )?.url;

        return {
          sm: convertImageFilePath(artworkUrlInSingle?.sm ?? noArtworkUrl.sm),
          md: convertImageFilePath(artworkUrlInSingle?.md ?? noArtworkUrl.md),
          lg: convertImageFilePath(artworkUrlInSingle?.lg ?? noArtworkUrl.lg),
        };
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
        const artworkUrlInOtherCd = otherCd.artworks.find(
          artwork => artwork.type === otherCdSong.inCdType[0]
        )?.url;

        return {
          sm: convertImageFilePath(artworkUrlInOtherCd?.sm ?? noArtworkUrl.sm),
          md: convertImageFilePath(artworkUrlInOtherCd?.md ?? noArtworkUrl.md),
          lg: convertImageFilePath(artworkUrlInOtherCd?.lg ?? noArtworkUrl.lg),
        };
      }
    }
  }

  if (songAlbumsResult.length > 0) {
    const oldestSongAlbumTitle = songAlbumsResult.slice().reverse()[0].title;
    const album = albumsRawObject[oldestSongAlbumTitle];

    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        const artworkUrlInAlbum = album.artworks.find(
          artwork => artwork.type === albumSong.inCdType[0]
        )?.url;

        return {
          sm: convertImageFilePath(artworkUrlInAlbum?.sm ?? noArtworkUrl.sm),
          md: convertImageFilePath(artworkUrlInAlbum?.md ?? noArtworkUrl.md),
          lg: convertImageFilePath(artworkUrlInAlbum?.lg ?? noArtworkUrl.lg),
        };
      }
    }
  }

  return {
    sm: convertImageFilePath(noArtworkUrl.sm),
    md: convertImageFilePath(noArtworkUrl.md),
    lg: convertImageFilePath(noArtworkUrl.lg),
  };
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
  if (songType === 'first generation') {
    return { name: 'first generation', album };
  }
  if (songType === 'second generation') {
    return { name: 'second generation', album };
  }
  if (songType === 'third generation') {
    return { name: 'third generation', album };
  }
  if (songType === 'fourth generation') {
    return { name: 'fourth generation', album };
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
