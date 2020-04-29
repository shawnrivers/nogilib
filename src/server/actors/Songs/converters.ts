import {
  SinglesRawArray,
  SinglesRawObject,
} from "server/actors/Singles/models";
import { SongResult, SongRaw } from "server/actors/Songs/models";
import { AlbumsRawArray, AlbumsRawObject } from "server/actors/Albums/models";
import * as CdConverter from "server/actors/Cds/converters";
import { NO_ARTWORK_IMAGE_SRC } from "server/editor/constants/paths";
import { SongType } from "server/utils/constants";

type ConvertSongSingle = (params: {
  songTitle: SongRaw["title"];
  singlesRawArray: SinglesRawArray;
}) => SongResult["single"];

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

  return { title: "", number: "" };
};

type ConvertSongAlbums = (params: {
  songTitle: SongRaw["title"];
  albumsRawArray: AlbumsRawArray;
}) => SongResult["albums"];

export const convertSongAlbums: ConvertSongAlbums = ({
  songTitle,
  albumsRawArray,
}) => {
  const songAlbumsWithRelease: (SongResult["albums"][0] & {
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

type ConvertSongArtwork = (params: {
  songTitle: SongRaw["title"];
  songSingleResult: SongResult["single"];
  songAlbumsResult: SongResult["albums"];
  singlesRawObject: SinglesRawObject;
  albumsRawObject: AlbumsRawObject;
}) => SongResult["artwork"];

export const convertSongArtwork: ConvertSongArtwork = ({
  songTitle,
  songSingleResult,
  songAlbumsResult,
  singlesRawObject,
  albumsRawObject,
}) => {
  if (songSingleResult.title !== "") {
    const single = singlesRawObject[songSingleResult.title];

    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        return CdConverter.convertCdArtwork({
          cdArtworkType: singleSong.inCdType[0],
          cdHasArtworks: single.hasArtworks,
          cdNumber: single.number,
          cdKind: "single",
        });
      }
    }
  }

  if (songAlbumsResult.length > 0) {
    const album = albumsRawObject[songAlbumsResult[0].title];

    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        return CdConverter.convertCdArtwork({
          cdArtworkType: albumSong.inCdType[0],
          cdHasArtworks: album.hasArtworks,
          cdNumber: album.number,
          cdKind: "album",
        });
      }
    }
  }

  return NO_ARTWORK_IMAGE_SRC;
};

export const convertSongType = (type: SongRaw["type"]): SongResult["type"] =>
  type.includes(SongType.Selected) ? SongType.Coupling : type;

type ConvertSongPerformersTag = (params: {
  songType: SongRaw["type"];
  songSingleResult: SongResult["single"];
  songAlbumsResult: SongResult["albums"];
  songPerformers: SongRaw["performers"];
  albumsRawObject: AlbumsRawObject;
}) => SongResult["performersTag"];

export const convertSongPerformersTag: ConvertSongPerformersTag = ({
  songType,
  songSingleResult,
  songAlbumsResult,
  songPerformers,
  albumsRawObject,
}) => {
  let singleNumber = "";

  if (songSingleResult.number !== "") {
    singleNumber = songSingleResult.number;
  } else if (songAlbumsResult.length > 0) {
    singleNumber =
      albumsRawObject[songAlbumsResult[0].title].previousSingleNumber;
  }

  if (songType === SongType.Unit) {
    return { name: songPerformers.unit, singleNumber };
  }
  if (songType === SongType.FirstGeneration) {
    return { name: "first generation", singleNumber };
  }
  if (songType === SongType.SecondGeneration) {
    return { name: "second generation", singleNumber };
  }
  if (songType === SongType.ThirdGeneration) {
    return { name: "third generation", singleNumber };
  }
  if (songType === SongType.FourthGeneration) {
    return { name: "fourth generation", singleNumber };
  }
  if (
    songType === SongType.Title ||
    songType === SongType.Selected ||
    songType === SongType.Lead
  ) {
    return { name: "selected", singleNumber };
  }
  if (songType === SongType.Selected12) {
    return { name: "selected", singleNumber: "12" };
  }
  if (songType === SongType.Under) {
    return { name: "under", singleNumber };
  }

  return { name: "", singleNumber };
};
