import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_SEVENTH_SINGLE = createSingleRaw({
  title: 'ごめんねFingers crossed',
  number: '27',
  release: '2021-06-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'ごめんねFingers crossed',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '全部　夢のまま',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '大人たちには指示されない',
      inCdType: ['A'],
    },
    {
      title: 'ざんぶざざぶん',
      inCdType: ['B'],
    },
    {
      title: 'さ～ゆ～Ready？',
      inCdType: ['C'],
    },
    {
      title: '錆びたコンパス',
      inCdType: ['D'],
    },
    {
      title: '猫舌カモミールティー',
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
    'kuromiharuka',
    'satourika',
    'shibatayuna',
    'hayashiruna',
    'matsuomiyu',
    'yakubomio',
    'yumikinao',
  ],
});
