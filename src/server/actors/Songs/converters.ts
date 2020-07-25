import { SongResult, SongRaw } from 'server/actors/Songs/models';
import { NO_ARTWORK_IMAGE_SRC } from 'server/constants/paths';
import { SongType } from 'server/actors/Songs/constants/songType';
import {
  DiscographyRawArray,
  DiscographyRawObject,
} from 'server/actors/Discography/models';

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

  songAlbumsWithRelease.sort(
    (albumA, albumB) =>
      new Date(albumA.release).getTime() - new Date(albumB.release).getTime()
  );

  return songAlbumsWithRelease.map(({ title, number }) => ({ title, number }));
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

  songOtherCdsWithRelease.sort(
    (albumA, albumB) =>
      new Date(albumA.release).getTime() - new Date(albumB.release).getTime()
  );

  return songOtherCdsWithRelease.map(({ title, number }) => ({
    title,
    number,
  }));
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
  if (songSingleResult.title !== '') {
    const single = singlesRawObject[songSingleResult.title];

    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        return (
          single.artworks.find(
            artwork => artwork.type === singleSong.inCdType[0]
          )?.url ?? NO_ARTWORK_IMAGE_SRC
        );
      }
    }
  }

  if (songAlbumsResult.length > 0) {
    const album = albumsRawObject[songAlbumsResult[0].title];

    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        return (
          album.artworks.find(artwork => artwork.type === albumSong.inCdType[0])
            ?.url ?? NO_ARTWORK_IMAGE_SRC
        );
      }
    }
  }

  if (songOtherCdsResult.length > 0) {
    const otherCd = otherCdsRawObject[songOtherCdsResult[0].title];

    for (const otherCdSong of otherCd.songs) {
      if (otherCdSong.title === songTitle) {
        return (
          otherCd.artworks.find(
            artwork => artwork.type === otherCdSong.inCdType[0]
          )?.url ?? NO_ARTWORK_IMAGE_SRC
        );
      }
    }
  }

  return NO_ARTWORK_IMAGE_SRC;
};

export const convertSongType = (type: SongRaw['type']): SongResult['type'] =>
  type.includes(SongType.Selected) ? SongType.Coupling : type;

type ConvertSongPerformersTag = (params: {
  songType: SongRaw['type'];
  songSingleResult: SongResult['single'];
  songAlbumsResult: SongResult['albums'];
  songPerformers: SongRaw['performers'];
  albumsRawObject: DiscographyRawObject;
}) => SongResult['performersTag'];

export const convertSongPerformersTag: ConvertSongPerformersTag = ({
  songType,
  songSingleResult,
  songAlbumsResult,
  songPerformers,
  albumsRawObject,
}) => {
  let singleNumber = '';

  if (songSingleResult.number !== '') {
    singleNumber = songSingleResult.number;
  } else if (songAlbumsResult.length > 0) {
    singleNumber =
      albumsRawObject[songAlbumsResult[0].title].previousSingleNumber;
  }

  if (songType === SongType.Unit) {
    return { name: songPerformers.unit, singleNumber };
  }
  if (songType === SongType.FirstGeneration) {
    return { name: 'first generation', singleNumber };
  }
  if (songType === SongType.SecondGeneration) {
    return { name: 'second generation', singleNumber };
  }
  if (songType === SongType.ThirdGeneration) {
    return { name: 'third generation', singleNumber };
  }
  if (songType === SongType.FourthGeneration) {
    return { name: 'fourth generation', singleNumber };
  }
  if (
    songType === SongType.Title ||
    songType === SongType.Selected ||
    songType === SongType.Lead
  ) {
    return { name: 'selected', singleNumber };
  }
  if (songType === SongType.Selected12) {
    return { name: 'selected', singleNumber: '12' };
  }
  if (songType === SongType.Under) {
    return { name: 'under', singleNumber };
  }

  return { name: '', singleNumber };
};
