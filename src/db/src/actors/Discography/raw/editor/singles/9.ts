import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const NINTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '夏のFree&Easy',
  number: '9',
  release: '2014-07-09',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '夏のFree&Easy',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '何もできずにそばにいる',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'その先の出口!',
      inCdType: ['A'],
    },
    {
      title: '無口なライオン',
      inCdType: ['B'],
    },
    {
      title: 'ここにいる理由',
      inCdType: ['C'],
    },
    {
      title: '僕が行かなきゃ誰が行くんだ?',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'kawagohina',
    'saitouasuka',
    'itoumarika',
    'higuchihina',
    'wadamaaya',
    'nagashimaseira',
    'nakadakana',
    'noujouami',
    'nakamotohimeka',
    'kawamuramahiro',
    'saitouchiharu',
    'kitanohinako',
    'hatanakaseira',
    'itounene',
    'ichikirena',
    'shinuchimai',
  ],
  trainees: [
    'itoukarin',
    'itoujunna',
    'sagaraiori',
    'sasakikotoko',
    'suzukiayane',
    'teradaranze',
    'yamazakirena',
    'watanabemiria',
    'yonetokukyouka',
    'yadarisako',
  ],
  skips: ['ikutaerika'],
});
