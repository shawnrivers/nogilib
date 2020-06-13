import * as fs from "fs";
import {
  CdRaw,
  CdSongRaw,
  CdSongResult,
  CdResult,
} from "server/actors/Cds/models";
import {
  CdType,
  SongType,
  FocusPerformersType,
  CdKind,
} from "server/constants/commons";
import { SONGS, SongTitle } from "server/constants/songs";
import { NO_ARTWORK_IMAGE_SRC } from "server/constants/paths";
import { SongsRawObject } from "server/actors/Songs/models";
import { MembersRawObject } from "server/actors/Members/models";
import { MemberNameKey } from "server/actors/Songs/constants";

export const convertPerformerNames = (
  memberNames: MemberNameKey[],
  membersRawObject: MembersRawObject
): string[] => {
  return memberNames.map(name => {
    const { lastName, firstName } = membersRawObject[name].nameNotations;
    return lastName + firstName;
  });
};

type ConvertCdArtwork = (params: {
  cdHasArtworks: CdRaw["hasArtworks"];
  cdNumber: CdRaw["number"];
  cdArtworkType: CdType;
  cdKind: CdKind;
}) => string;

export const convertCdArtwork: ConvertCdArtwork = ({
  cdHasArtworks,
  cdNumber,
  cdArtworkType,
  cdKind,
}) => {
  const imageSrcBasePath =
    cdKind === CdKind.Album ? "artworks/albums" : "artworks/singles";

  if (!cdHasArtworks) {
    return NO_ARTWORK_IMAGE_SRC;
  }

  const imageSrc = `${imageSrcBasePath}/${cdNumber}/${cdArtworkType}.jpg`;

  if (fs.existsSync("./src/assets/images/" + imageSrc)) {
    return imageSrc;
  }

  return NO_ARTWORK_IMAGE_SRC;
};

type ConvertCdArtworks = (params: {
  cdArtworkTypes: CdRaw["artworkTypes"];
  cdHasArtworks: CdRaw["hasArtworks"];
  cdNumber: CdRaw["number"];
  cdKind: CdKind;
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
  songsRawObject: SongsRawObject;
}) => CdSongResult["type"];

export const convertCdSongType: ConvertCdSongType = ({
  cdSongTitle,
  songsRawObject,
}) => {
  if (cdSongTitle === SongTitle.Overture) {
    return SongType.Coupling;
  }

  if (songsRawObject[cdSongTitle].type.includes(SongType.Selected)) {
    return SongType.Coupling;
  }

  return songsRawObject[cdSongTitle].type;
};

type ConvertCdSongFocusPerformers = (params: {
  cdSongTitle: CdSongRaw["title"];
  songsRawObject: SongsRawObject;
  membersRawObject: MembersRawObject;
}) => CdSongResult["focusPerformers"];

export const convertCdSongFocusPerformers: ConvertCdSongFocusPerformers = ({
  cdSongTitle,
  songsRawObject,
  membersRawObject,
}) => {
  let focusPerformersResult: CdSongResult["focusPerformers"] = {
    type: FocusPerformersType.None,
    name: [],
  };

  const song = songsRawObject[cdSongTitle];

  if (cdSongTitle !== SongTitle.Overture) {
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
          name: convertPerformerNames(song.performers.center, membersRawObject),
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
        name: convertPerformerNames(song.formations.firstRow, membersRawObject),
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
          name: convertPerformerNames(song.performers.center, membersRawObject),
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
            membersRawObject
          ),
        };
      }
    } else if (song.type === SongType.None) {
      if (song.performers.center.length > 0) {
        focusPerformersResult = {
          type: FocusPerformersType.None,
          name: convertPerformerNames(song.performers.center, membersRawObject),
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
  songsRawObject: SongsRawObject;
  membersRawObject: MembersRawObject;
}) => CdResult["songs"];

export const convertCdSongs: ConvertCdSongs = ({
  cdSongsRaw,
  songsRawObject,
  membersRawObject,
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
        songsRawObject,
      }),
      focusPerformers: convertCdSongFocusPerformers({
        cdSongTitle: title,
        songsRawObject,
        membersRawObject,
      }),
    };
  });
};
