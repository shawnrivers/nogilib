import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_FIFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'しあわせの保護色',
  number: '25',
  release: '2020-03-25',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'しあわせの保護色',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'サヨナラ Stay with me',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'じゃあね。',
      inCdType: ['A'],
    },
    {
      title: 'アナスターシャ',
      inCdType: ['B'],
    },
    {
      title: '毎日がBrand new day',
      inCdType: ['C'],
    },
    {
      title: 'I see…',
      inCdType: ['D'],
    },
    {
      title: 'ファンタスティック三色パン',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'itoujunna',
    'itouriria',
    'sakaguchitamami',
    'sasakikotoko',
    'satoukaede',
    'suzukiayane',
    'teradaranze',
    'nakamurareno',
    'mukaihazuki',
    'yamazakirena',
    'yoshidaayanochristie',
    'watanabemiria',
  ],
  trainees: [
    'kakehashisayaka',
    'kanagawasaya',
    'kitagawayuri',
    'shibatayuna',
    'seimiyarei',
    'tamuramayu',
    'hayakawaseira',
    'yakubomio',
    'tsutsuiayame',
  ],
});
