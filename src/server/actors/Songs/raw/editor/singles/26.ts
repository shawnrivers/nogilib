import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongRaw } from 'server/actors/Songs/models';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';

export const TWENTY_SIXTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['タイトル未定'].title,
    type: SongType.Title,
    creators: {
      lyrics: [],
      compose: [],
      arrange: [],
      direct: [],
    },
    center: [],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [],
      secondRow: [],
      thirdRow: [],
    },
  }),
];
