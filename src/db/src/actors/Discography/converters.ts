import { SONGS } from 'db/src/actors/Songs/constants/songTitle';
import { SongsRawObject } from 'db/src/actors/Songs/models';
import {
  DiscographyRaw,
  DiscographyResult,
  CdSongResult,
  CdSongRaw,
} from 'db/src/actors/Discography/models';

type ConvertCdSongType = (params: {
  cdSongTitle: CdSongRaw['title'];
  songsRawObject: SongsRawObject;
}) => CdSongResult['type'];

export const convertCdSongType: ConvertCdSongType = ({
  cdSongTitle,
  songsRawObject,
}) => {
  if (cdSongTitle === 'OVERTURE') {
    return 'coupling';
  }

  if (songsRawObject[cdSongTitle].type.includes('selected')) {
    return 'coupling';
  }

  return songsRawObject[cdSongTitle].type;
};

type ConvertCdSongFocusPerformers = (params: {
  cdSongTitle: CdSongRaw['title'];
  songsRawObject: SongsRawObject;
}) => CdSongResult['focusPerformers'];

export const convertCdSongFocusPerformers: ConvertCdSongFocusPerformers = ({
  cdSongTitle,
  songsRawObject,
}) => {
  let focusPerformersResult: CdSongResult['focusPerformers'] = {
    type: '',
    members: [],
  };

  const song = songsRawObject[cdSongTitle];

  if (cdSongTitle !== 'OVERTURE') {
    if (
      song.type === 'title' ||
      song.type === 'under' ||
      song.type === 'coupling' ||
      song.type === 'selected' ||
      song.type === 'lead' ||
      song.type.includes('generation')
    ) {
      if (song.performers.center !== null) {
        focusPerformersResult = {
          type: 'center',
          members: song.performers.center,
        };
      } else {
        focusPerformersResult = {
          type: '',
          members: [],
        };
      }
    } else if (song.type === 'solo') {
      focusPerformersResult = {
        type: 'solo',
        members: song.formations.firstRow,
      };
    } else if (song.type === 'unit') {
      if (song.performers.unit !== '') {
        focusPerformersResult = {
          type: 'unit',
          members: [song.performers.unit],
        };
      } else if (song.performers.center.length > 0) {
        focusPerformersResult = {
          type: 'center',
          members: song.performers.center,
        };
      } else {
        focusPerformersResult = {
          type: 'unit',
          members: [
            ...song.formations.firstRow,
            ...song.formations.secondRow,
            ...song.formations.thirdRow,
            ...song.formations.fourthRow,
          ],
        };
      }
    } else if (song.type === 'none') {
      if (song.performers.center.length > 0) {
        focusPerformersResult = {
          type: '',
          members: song.performers.center,
        };
      } else {
        focusPerformersResult = {
          type: '',
          members: [],
        };
      }
    }
  }

  return focusPerformersResult;
};

type ConvertCdSongs = (params: {
  cdSongsRaw: DiscographyRaw['songs'];
  songsRawObject: SongsRawObject;
}) => DiscographyResult['songs'];

export const convertCdSongs: ConvertCdSongs = ({
  cdSongsRaw,
  songsRawObject,
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
      }),
    };
  });
};
