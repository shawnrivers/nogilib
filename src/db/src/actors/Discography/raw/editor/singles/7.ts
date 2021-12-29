import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const SEVENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'バレッタ',
  number: '7',
  release: '2013-11-27',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'バレッタ',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '月の大きさ',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '私のために 誰かのために',
      inCdType: ['A'],
    },
    {
      title: 'そんなバカな…',
      inCdType: ['B'],
    },
    {
      title: '初恋の人を今でも',
      inCdType: ['C'],
    },
    {
      title: 'やさしさとは',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'inouesayuri',
    'hoshinominami',
    'saitouyuuri',
    'noujouami',
    'higuchihina',
    'nakadakana',
    'nagashimaseira',
    'kawamuramahiro',
    'saitouchiharu',
    'hatanakaseira',
    'yamatorina',
    'itounene',
    'wadamaaya',
  ],
  trainees: [
    'itoukarin',
    'itoujunna',
    'kitanohinako',
    'sasakikotoko',
    'shinuchimai',
    'suzukiayane',
    'teradaranze',
    'yamazakirena',
    'watanabemiria',
    'yonetokukyouka',
    'yadarisako',
    'nishikawananami',
  ],
  skips: ['ichikirena', 'sagaraiori'],
});
