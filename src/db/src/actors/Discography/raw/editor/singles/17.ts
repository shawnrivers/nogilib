import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const SEVENTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'インフルエンサー',
  number: '17',
  release: '2017-03-22',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'インフルエンサー',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '人生を考えたくなる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '意外BREAK',
      inCdType: ['A'],
    },
    {
      title: 'Another Ghost',
      inCdType: ['B'],
    },
    {
      title: '風船は生きている',
      inCdType: ['C'],
    },
    {
      title: '三番目の風',
      inCdType: ['D'],
    },
    {
      title: '当たり障りのない話',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'yamazakirena',
    'watanabemiria',
    'suzukiayane',
    'saitouchiharu',
    'itoukarin',
    'noujouami',
    'sagaraiori',
    'kawagohina',
    'sasakikotoko',
    'wadamaaya',
    'itoujunna',
    'kawamuramahiro',
  ],
  trainees: [
    'itouriria',
    'iwamotorenka',
    'umezawaminami',
    'oozonomomoko',
    'kuboshiori',
    'sakaguchitamami',
    'satoukaede',
    'nakamurareno',
    'mukaihazuki',
    'yamashitamizuki',
    'yoshidaayanochristie',
    'yodayuuki',
  ],
  skips: ['nakamotohimeka'],
});
