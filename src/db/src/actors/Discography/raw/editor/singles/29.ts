import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_NINTH_SINGLE = createSingleRaw({
  title: 'Actually...',
  number: '29',
  release: '2022-03-23',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'Actually...',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '深読み',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '価値あるもの',
      inCdType: ['A'],
    },
    {
      title: '忘れないといいな',
      inCdType: ['B'],
    },
    {
      title: '届かなくたって…',
      inCdType: ['C'],
    },
    {
      title: '絶望の一秒前',
      inCdType: ['D'],
    },
    {
      title: '好きになってみた',
      inCdType: ['T'],
    },
  ],
});
