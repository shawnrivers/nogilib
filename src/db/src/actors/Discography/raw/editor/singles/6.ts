import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const SIXTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ガールズルール',
  number: '6',
  release: '2013-07-03',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'ガールズルール',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '世界で一番 孤独なLover',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'コウモリよ',
      inCdType: ['A'],
    },
    {
      title: '扇風機',
      inCdType: ['B'],
    },
    {
      title: '他の星から',
      inCdType: ['C'],
    },
    {
      title: '人間という楽器',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'higuchihina',
    'saitouasuka',
    'nakamotohimeka',
    'noujouami',
    'etoumisa',
    'kawamuramahiro',
    'itounene',
    'nagashimaseira',
    'saitouchiharu',
    'ichikirena',
    'yamatorina',
    'kawagohina',
    'wadamaaya',
    'kashiwayukina',
    'hatanakaseira',
    'miyazawaseira',
  ],
});
