import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongsRawObject } from 'server/actors/Songs/models';
import { SongType } from 'server/actors/Songs/constants/songType';
import {
  DiscographyRaw,
  DiscographyResult,
  CdSongResult,
  CdSongRaw,
} from 'server/actors/Discography/models';

type ConvertCdSongType = (params: {
  cdSongTitle: CdSongRaw['title'];
  songsRawObject: SongsRawObject;
}) => CdSongResult['type'];

export const convertCdSongType: ConvertCdSongType = ({
  cdSongTitle,
  songsRawObject,
}) => {
  if (cdSongTitle === 'OVERTURE') {
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
      song.type === SongType.Title ||
      song.type === SongType.Under ||
      song.type === SongType.Coupling ||
      song.type === SongType.Selected ||
      song.type === SongType.Lead ||
      song.type === SongType.FirstGeneration ||
      song.type === SongType.SecondGeneration ||
      song.type === SongType.ThirdGeneration ||
      song.type === SongType.FourthGeneration
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
    } else if (song.type === SongType.Solo) {
      focusPerformersResult = {
        type: 'solo',
        members: song.formations.firstRow,
      };
    } else if (song.type === SongType.Unit) {
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
    } else if (song.type === SongType.None) {
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
