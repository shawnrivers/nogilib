import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const THIRTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '今、話したい誰かがいる',
  number: '13',
  release: '2015-10-28',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '今、話したい誰かがいる',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '嫉妬の権利',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'ポピパッパパー',
      inCdType: ['A'],
    },
    {
      title: '大人への近道',
      inCdType: ['B'],
    },
    {
      title: '悲しみの忘れ方',
      inCdType: ['C'],
    },
    {
      title: '隙間',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'kitanohinako',
    'horimiona',
    'nakamotohimeka',
    'teradaranze',
    'nakadakana',
    'shinuchimai',
    'kawamuramahiro',
    'nagashimaseira',
    'noujouami',
    'higuchihina',
    'saitouchiharu',
    'saitouyuuri',
    'kawagohina',
    'watanabemiria',
    'yamazakirena',
    'sasakikotoko',
    'sagaraiori',
    'itoujunna',
    'suzukiayane',
    'itoukarin',
    'wadamaaya',
  ],
});
