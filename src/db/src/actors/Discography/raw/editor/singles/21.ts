import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_FIRST_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ジコチューで行こう!',
  number: '21',
  release: '2018-08-08',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'ジコチューで行こう!',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '空扉',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '三角の空き地',
      inCdType: ['A'],
    },
    {
      title: '自分じゃない感じ',
      inCdType: ['B'],
    },
    {
      title: '心のモノローグ',
      inCdType: ['C'],
    },
    {
      title: '地球が丸いなら',
      inCdType: ['D'],
    },
    {
      title: 'あんなに好きだったのに...',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'higuchihina',
    'nakadakana',
    'itouriria',
    'yamazakirena',
    'sakaguchitamami',
    'kitanohinako',
    'teradaranze',
    'watanabemiria',
    'satoukaede',
    'yoshidaayanochristie',
    'wadamaaya',
    'kawagohina',
    'noujouami',
    'nakamurareno',
    'itoukarin',
    'sasakikotoko',
    'mukaihazuki',
    'itoujunna',
  ],
  skips: ['kuboshiori'],
});
