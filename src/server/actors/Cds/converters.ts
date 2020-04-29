import * as fs from "fs";
import {
  CdRaw,
  CdSongRaw,
  CdSongResult,
  CdResult,
} from "server/actors/Cds/models";
import {
  CdType,
  OVERTURE,
  SongType,
  FocusPerformersType,
} from "server/utils/constants";
import { convertPerformerNames } from "server/utils/strings";
import { SONGS } from "server/editor/constants/titles";
import { NO_IMAGE_SRC } from "server/editor/constants/paths";

type ConvertCdArtwork = (params: {
  cdHasArtworks: CdRaw["hasArtworks"];
  cdNumber: CdRaw["number"];
  cdArtworkType: CdType;
  cdKind: "album" | "single";
}) => string;

export const convertCdArtwork: ConvertCdArtwork = ({
  cdHasArtworks,
  cdNumber,
  cdArtworkType,
  cdKind,
}) => {
  const imageSrcBasePath =
    cdKind === "album" ? "artworks/albums" : "artworks/singles";

  if (!cdHasArtworks) {
    return NO_IMAGE_SRC;
  }

  const imageSrc = `${imageSrcBasePath}/${cdNumber}/${cdArtworkType}.jpg`;

  if (fs.existsSync("./src/assets/images/" + imageSrc)) {
    return imageSrc;
  }

  return NO_IMAGE_SRC;
};

type ConvertCdArtworks = (params: {
  cdArtworkTypes: CdRaw["artworkTypes"];
  cdHasArtworks: CdRaw["hasArtworks"];
  cdNumber: CdRaw["number"];
  cdKind: "album" | "single";
}) => CdResult["artworks"];

export const convertCdArtworks: ConvertCdArtworks = ({
  cdArtworkTypes,
  cdHasArtworks,
  cdNumber,
  cdKind,
}) => {
  const artworksResult: CdResult["artworks"] = [];

  for (const cdArtworkType of cdArtworkTypes) {
    artworksResult.push(
      convertCdArtwork({
        cdHasArtworks,
        cdNumber,
        cdArtworkType,
        cdKind,
      })
    );
  }

  return artworksResult;
};

type ConvertCdSongType = (params: {
  cdSongTitle: CdSongRaw["title"];
  songsRawObj: { [key: string]: any };
}) => CdSongResult["type"];

export const convertCdSongType: ConvertCdSongType = ({
  cdSongTitle,
  songsRawObj,
}) => {
  if (cdSongTitle === OVERTURE) {
    return SongType.Coupling;
  }

  if (songsRawObj[cdSongTitle].type.includes(SongType.Selected)) {
    return SongType.Coupling;
  }

  return songsRawObj[cdSongTitle].type;
};

type ConvertCdSongFocusPerformers = (params: {
  cdSongTitle: CdSongRaw["title"];
  songsRawObj: { [key: string]: any };
  membersRawObj: { [key: string]: any };
}) => CdSongResult["focusPerformers"];

export const convertCdSongFocusPerformers: ConvertCdSongFocusPerformers = ({
  cdSongTitle,
  songsRawObj,
  membersRawObj,
}) => {
  let focusPerformersResult: CdSongResult["focusPerformers"] = {
    type: FocusPerformersType.None,
    name: [],
  };

  const song = songsRawObj[cdSongTitle];

  if (cdSongTitle !== OVERTURE) {
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
        focusPerformersResult = {
          type: FocusPerformersType.Center,
          name: convertPerformerNames(song.performers.center, membersRawObj),
        };
      } else {
        focusPerformersResult = {
          type: FocusPerformersType.None,
          name: [],
        };
      }
    } else if (song.type === SongType.Solo) {
      focusPerformersResult = {
        type: FocusPerformersType.Solo,
        name: convertPerformerNames(song.formations.firstRow, membersRawObj),
      };
    } else if (song.type === SongType.Unit) {
      if (song.performers.unit !== "") {
        focusPerformersResult = {
          type: FocusPerformersType.Unit,
          name: [song.performers.unit],
        };
      } else if (song.performers.center.length > 0) {
        focusPerformersResult = {
          type: FocusPerformersType.Center,
          name: convertPerformerNames(song.performers.center, membersRawObj),
        };
      } else {
        focusPerformersResult = {
          type: FocusPerformersType.Unit,
          name: convertPerformerNames(
            [
              ...song.formations.firstRow,
              ...song.formations.secondRow,
              ...song.formations.thirdRow,
              ...song.formations.fourthRow,
            ],
            membersRawObj
          ),
        };
      }
    } else if (song.type === SongType.None) {
      if (song.performers.center.length > 0) {
        focusPerformersResult = {
          type: FocusPerformersType.None,
          name: convertPerformerNames(song.performers.center, membersRawObj),
        };
      } else {
        focusPerformersResult = {
          type: FocusPerformersType.None,
          name: [],
        };
      }
    }
  }

  return focusPerformersResult;
};

type ConvertCdSongs = (params: {
  cdSongsRaw: CdRaw["songs"];
  songsRawObj: { [key: string]: any };
  membersRawObj: { [key: string]: any };
}) => CdResult["songs"];

export const convertCdSongs: ConvertCdSongs = ({
  cdSongsRaw,
  songsRawObj,
  membersRawObj,
}) => {
  return cdSongsRaw.map(cdSongRaw => {
    const { number, title, inCdType } = cdSongRaw;

    return {
      number,
      title,
      key: SONGS[title].key,
      inCdType,
      type: convertCdSongType({
        cdSongTitle: title,
        songsRawObj,
      }),
      focusPerformers: convertCdSongFocusPerformers({
        cdSongTitle: title,
        songsRawObj,
        membersRawObj,
      }),
    };
  });
};
