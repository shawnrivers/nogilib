import * as fs from "fs";
import { SONGS } from "../editor/constants/titles";
import { CdArtwork, RawCdSong, ResultCdSong } from "../models/commons";
import { RawAlbum, ResultAlbum, ResultAlbums } from "../models/IAlbum";
import { ResultMembers } from "../models/IMember";
import { RawSingle, ResultSingle, ResultSingles } from "../models/ISingle";
import { ResultSongs } from "../models/ISong";
import { arrayToObject } from "../utils/arrays";
import { FocusPerformersType, OVERTURE, SongType } from "../utils/constants";
import { convertPerformerNames } from "../utils/strings";

const convertArtworks = (
  rawCd: RawAlbum | RawSingle,
  artworkImagesPath: string
): {
  [type: string]: CdArtwork;
} => {
  const initialArtworks = Object.assign(
    {},
    ...rawCd.artworkTypes.map(artworkType => ({
      [artworkType]: {
        large: "",
        medium: "",
        small: "",
      },
    }))
  );

  const noImageSrc = "artworks/artwork_no_image.png";

  for (const key of Object.keys(initialArtworks)) {
    if (rawCd.hasArtworks) {
      const imageSrc =
        artworkImagesPath + rawCd.number.toString() + "/" + key + ".jpg";

      const localFilePath = "./src/assets/images/" + imageSrc;

      if (fs.existsSync(localFilePath)) {
        initialArtworks[key] = imageSrc;
      } else {
        initialArtworks[key] = noImageSrc;
      }
    } else {
      initialArtworks[key] = noImageSrc;
    }
  }

  return initialArtworks;
};

const SINGLE_ARTWORK_BASE_PATH = "artworks/singles/";
const ALBUM_ARTWORK_BASE_PATH = "artworks/albums/";

const convertCdSongs = (rawCdSongs: RawCdSong[]): ResultCdSong[] => {
  const initializeCdSong = (rawCdSong: RawCdSong): ResultCdSong => ({
    number: rawCdSong.number,
    title: rawCdSong.title,
    key: SONGS[rawCdSong.title].key,
    inCdType: rawCdSong.inCdType,
    type: SongType.None,
    artwork: "",
    focusPerformers: {
      type: FocusPerformersType.None,
      name: [],
    },
  });

  return rawCdSongs.map(initializeCdSong);
};

export const initializeAlbums = (rawAlbums: RawAlbum[]): ResultAlbums => {
  const initializeAlbum = (rawAlbum: RawAlbum): ResultAlbum => ({
    title: rawAlbum.title,
    number: rawAlbum.number,
    release: rawAlbum.release,
    previousSingleNumber: rawAlbum.previousSingleNumber,
    artworks: convertArtworks(rawAlbum, ALBUM_ARTWORK_BASE_PATH),
    shopping: rawAlbum.shopping,
    songs: convertCdSongs(rawAlbum.songs),
  });

  const initializedArray = rawAlbums.map(initializeAlbum);

  return arrayToObject(initializedArray, "title");
};

export const initializeSingles = (rawSingles: RawSingle[]): ResultSingles => {
  const initializeSingle = (rawSingle: RawSingle): ResultSingle => ({
    title: rawSingle.title,
    number: rawSingle.number,
    release: rawSingle.release,
    artworks: convertArtworks(rawSingle, SINGLE_ARTWORK_BASE_PATH),
    shopping: rawSingle.shopping,
    songs: convertCdSongs(rawSingle.songs),
    underMembers: rawSingle.underMembers,
    behindPerformers: rawSingle.behindPerformers,
  });

  const initializedArray: ResultSingle[] = rawSingles.map(initializeSingle);

  return arrayToObject(initializedArray, "title");
};

export const recordCdSongArtworks = (
  cds: ResultSingles | ResultAlbums,
  songs: ResultSongs
) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      cdSong.artwork =
        cdSong.title !== OVERTURE
          ? songs[cdSong.title].artwork
          : cd.artworks[cdSong.inCdType[0]];
    }
  }
};

export const recordCdSongTypeFromSongs = (
  cds: ResultSingles | ResultAlbums,
  songs: ResultSongs
) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      if (cdSong.title !== OVERTURE) {
        if (songs[cdSong.title].type.includes(SongType.Selected)) {
          cdSong.type = SongType.Coupling;
        } else {
          cdSong.type = songs[cdSong.title].type;
        }
      } else {
        cdSong.type = SongType.Coupling;
      }
    }
  }
};

export const recordCdFocusPerformersFromSongs = (
  cds: ResultSingles | ResultAlbums,
  songs: ResultSongs,
  members: ResultMembers
) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      const song = songs[cdSong.title];

      if (cdSong.title !== OVERTURE) {
        if (
          song.type === SongType.Title ||
          song.type === SongType.Under ||
          song.type === SongType.Coupling ||
          song.type === SongType.Selected ||
          song.type === SongType.Selected12 ||
          song.type === SongType.Lead ||
          song.type === SongType.FirstGeneration ||
          song.type === SongType.SecondGeneration ||
          song.type === SongType.ThirdGeneration ||
          song.type === SongType.FourthGeneration
        ) {
          if (song.performers.center !== null) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: convertPerformerNames(song.performers.center, members),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: [],
            };
          }
        } else if (song.type === SongType.Solo) {
          cdSong.focusPerformers = {
            type: FocusPerformersType.Solo,
            name: convertPerformerNames(song.formations.firstRow, members),
          };
        } else if (song.type === SongType.Unit) {
          if (song.performers.unit !== "") {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [song.performers.unit],
            };
          } else if (song.performers.center.length > 0) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: convertPerformerNames(song.performers.center, members),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: convertPerformerNames(
                [
                  ...song.formations.firstRow,
                  ...song.formations.secondRow,
                  ...song.formations.thirdRow,
                  ...song.formations.fourthRow,
                ],
                members
              ),
            };
          }
        } else if (song.type === SongType.None) {
          if (song.performers.center.length > 0) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: convertPerformerNames(song.performers.center, members),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: [],
            };
          }
        }
      }
    }
  }
};

export const flatArtworksToArray = (cds: ResultSingles | ResultAlbums) => {
  for (const cd of Object.values(cds)) {
    cd.artworks = Object.values(cd.artworks);
  }
};
