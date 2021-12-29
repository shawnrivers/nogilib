import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_SECOND_SINGLE: DiscographyRaw = createSingleRaw({
  title: '帰り道は遠回りしたくなる',
  number: '22',
  release: '2018-11-14',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '帰り道は遠回りしたくなる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'キャラバンは眠らない',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'つづく',
      inCdType: ['A'],
    },
    {
      title: '日常',
      inCdType: ['B'],
    },
    {
      title: '告白の順番',
      inCdType: ['C'],
    },
    {
      title: 'ショパンの嘘つき',
      inCdType: ['D'],
    },
    {
      title: '知りたいこと',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'suzukiayane',
    'higuchihina',
    'kitanohinako',
    'teradaranze',
    'iwamotorenka',
    'sakaguchitamami',
    'yamazakirena',
    'kuboshiori',
    'nakadakana',
    'watanabemiria',
    'mukaihazuki',
    'itoujunna',
    'wadamaaya',
    'nakamurareno',
    'kawagohina',
    'itoukarin',
    'sasakikotoko',
    'yoshidaayanochristie',
  ],
});
