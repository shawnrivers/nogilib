import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_SIXTH_SINGLE = createSingleRaw({
  title: 'タイトル未定',
  number: '26',
  release: '2021-01-27',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['タイトル未定'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
  ],
});
