import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_THIRD_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'Sing Out!',
  number: '23',
  release: '2019-05-29',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'Sing Out!',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '滑走路',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'のような存在',
      inCdType: ['A'],
    },
    {
      title: 'Am I Loving?',
      inCdType: ['B'],
    },
    {
      title: '平行線',
      inCdType: ['C'],
    },
    {
      title: '4番目の光',
      inCdType: ['D'],
    },
    {
      title: '曖昧',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'itoujunna',
    'sasakikotoko',
    'teradaranze',
    'nakadakana',
    'nakamurareno',
    'higuchihina',
    'mukaihazuki',
    'yamazakirena',
    'yoshidaayanochristie',
    'wadamaaya',
  ],
  trainees: [
    'endousakura',
    'kakiharuka',
    'kakehashisayaka',
    'kanagawasaya',
    'kitagawayuri',
    'shibatayuna',
    'seimiyarei',
    'tamuramayu',
    'tsutsuiayame',
    'hayakawaseira',
    'yakubomio',
  ],
  skips: ['yamashitamizuki'],
});
