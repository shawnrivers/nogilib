import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const FIFTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '裸足でSummer',
  number: '15',
  release: '2016-07-27',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '裸足でSummer',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '僕だけの光',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'オフショアガール',
      inCdType: ['A'],
    },
    {
      title: '命の真実 ミュージカル「林檎売りとカメムシ」',
      inCdType: ['B'],
    },
    {
      title: '白米様',
      inCdType: ['C'],
    },
    {
      title: 'シークレットグラフィティー',
      inCdType: ['D'],
    },
    {
      title: '行くあてのない僕たち',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'teradaranze',
    'itoumarika',
    'higuchihina',
    'inouesayuri',
    'watanabemiria',
    'saitouchiharu',
    'saitouyuuri',
    'shinuchimai',
    'nakadakana',
    'noujouami',
    'kawamuramahiro',
    'yamazakirena',
    'itoujunna',
    'kawagohina',
    'suzukiayane',
    'wadamaaya',
    'sagaraiori',
    'sasakikotoko',
    'itoukarin',
  ],
});
