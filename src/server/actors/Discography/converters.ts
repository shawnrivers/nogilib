import * as fs from 'fs';
import { SONGS, SongTitle } from 'server/actors/Songs/constants/songTitle';
import { NO_ARTWORK_IMAGE_SRC } from 'server/constants/paths';
import { SongsRawObject } from 'server/actors/Songs/models';
import { MembersRawObject } from 'server/actors/Members/models';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongType } from 'server/actors/Songs/constants/songType';
import {
  DiscographyRaw,
  CdType,
  DiscographyResult,
  CdSongResult,
  CdSongRaw,
} from 'server/actors/Discography/models';

const convertPerformerNames = (
  memberNames: MemberNameKey[],
  membersRawObject: MembersRawObject
): string[] => {
  return memberNames.map(name => {
    const { lastName, firstName } = membersRawObject[name].nameNotations;
    return lastName + firstName;
  });
};

type ConvertCdArtwork = (params: {
  cdHasArtworks: DiscographyRaw['hasArtworks'];
  cdNumber: DiscographyRaw['number'];
  cdArtworkType: CdType;
  cdKind: DiscographyRaw['type'];
}) => string;

export const convertCdArtwork: ConvertCdArtwork = ({
  cdHasArtworks,
  cdNumber,
  cdArtworkType,
  cdKind,
}) => {
  let imageSrcBasePath = '';

  switch (cdKind) {
    case 'single':
      imageSrcBasePath = 'artworks/singles';
      break;
    case 'album':
      imageSrcBasePath = 'artworks/albums';
      break;
    case 'other':
      imageSrcBasePath = 'artworks/others';
      break;
    default:
      imageSrcBasePath = '';
      break;
  }

  if (!cdHasArtworks) {
    return NO_ARTWORK_IMAGE_SRC;
  }

  const imageSrc = `${imageSrcBasePath}/${cdNumber}/${cdArtworkType}.jpg`;

  if (fs.existsSync('./src/assets/images/' + imageSrc)) {
    return imageSrc;
  }

  return NO_ARTWORK_IMAGE_SRC;
};

type ConvertCdArtworks = (params: {
  cdArtworkTypes: DiscographyRaw['artworkTypes'];
  cdHasArtworks: DiscographyRaw['hasArtworks'];
  cdNumber: DiscographyRaw['number'];
  cdKind: DiscographyRaw['type'];
}) => DiscographyResult['artworks'];

export const convertCdArtworks: ConvertCdArtworks = ({
  cdArtworkTypes,
  cdHasArtworks,
  cdNumber,
  cdKind,
}) => {
  const artworksResult = [];

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
  cdSongTitle: CdSongRaw['title'];
  songsRawObject: SongsRawObject;
}) => CdSongResult['type'];

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
  cdSongTitle: CdSongRaw['title'];
  songsRawObject: SongsRawObject;
  membersRawObject: MembersRawObject;
}) => CdSongResult['focusPerformers'];

export const convertCdSongFocusPerformers: ConvertCdSongFocusPerformers = ({
  cdSongTitle,
  songsRawObject,
  membersRawObject,
}) => {
  let focusPerformersResult: CdSongResult['focusPerformers'] = {
    type: '',
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
          type: 'center',
          name: convertPerformerNames(song.performers.center, membersRawObject),
        };
      } else {
        focusPerformersResult = {
          type: '',
          name: [],
        };
      }
    } else if (song.type === SongType.Solo) {
      focusPerformersResult = {
        type: 'solo',
        name: convertPerformerNames(song.formations.firstRow, membersRawObject),
      };
    } else if (song.type === SongType.Unit) {
      if (song.performers.unit !== '') {
        focusPerformersResult = {
          type: 'unit',
          name: [song.performers.unit],
        };
      } else if (song.performers.center.length > 0) {
        focusPerformersResult = {
          type: 'center',
          name: convertPerformerNames(song.performers.center, membersRawObject),
        };
      } else {
        focusPerformersResult = {
          type: 'unit',
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
          type: '',
          name: convertPerformerNames(song.performers.center, membersRawObject),
        };
      } else {
        focusPerformersResult = {
          type: '',
          name: [],
        };
      }
    }
  }

  return focusPerformersResult;
};

type ConvertCdSongs = (params: {
  cdSongsRaw: DiscographyRaw['songs'];
  songsRawObject: SongsRawObject;
  membersRawObject: MembersRawObject;
}) => DiscographyResult['songs'];

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
