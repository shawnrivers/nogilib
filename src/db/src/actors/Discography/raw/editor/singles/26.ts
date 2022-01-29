import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_SIXTH_SINGLE = createSingleRaw({
  title: '僕は僕を好きになる',
  number: '26',
  release: '2021-01-27',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '僕は僕を好きになる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '明日がある理由',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'Wilderness world',
      inCdType: ['A'],
    },
    {
      title: '口ほどにもないKISS',
      inCdType: ['B'],
    },
    {
      title: '冷たい水の中',
      inCdType: ['C'],
    },
    {
      title: 'Out of the blue',
      inCdType: ['D'],
    },
    {
      title: '友情ピアス',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'itoujunna',
    'itouriria',
    'kitanohinako',
    'sakaguchitamami',
    'satoukaede',
    'suzukiayane',
    'teradaranze',
    'nakamurareno',
    'higuchihina',
    'mukaihazuki',
    'yamazakirena',
    'yoshidaayanochristie',
    'watanabemiria',
    'wadamaaya',
  ],
  trainees: [
    'kakehashisayaka',
    'kanagawasaya',
    'kitagawayuri',
    'shibatayuna',
    'seimiyarei',
    'hayakawaseira',
    'yakubomio',
    'kuromiharuka',
    'satourika',
    'hayashiruna',
    'matsuomiyu',
    'yumikinao',
  ],
});
