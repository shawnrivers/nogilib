import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const THIRTY_FIRST_SINGLE = createSingleRaw({
  title: 'ここにはないもの',
  number: '31',
  release: '2022-12-07',
  cdTypes: ['A'],
  songs: [{ title: 'ここにはないもの', inCdType: ['A'] }],
  underMembers: [
    'itouriria',
    'satoukaede',
    'nakamurareno',
    'mukaihazuki',
    'yoshidaayanochristie',
    'kitagawayuri',
    'kuromiharuka',
    'satourika',
    'matsuomiyu',
    'yakubomio',
  ],
  skips: ['seimiyarei', 'kakehashisayaka'],
});
