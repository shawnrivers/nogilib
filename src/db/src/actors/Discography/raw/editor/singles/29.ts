import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_NINTH_SINGLE = createSingleRaw({
  title: 'Actually...',
  number: '29',
  release: '2022-03-23',
  cdTypes: ['A'],
  songs: [
    {
      title: 'Actually...',
      inCdType: ['A'],
    },
  ],
});
