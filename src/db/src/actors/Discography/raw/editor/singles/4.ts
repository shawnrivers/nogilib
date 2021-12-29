import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const FOURTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '制服のマネキン',
  number: '4',
  release: '2012-12-19',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '制服のマネキン',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '指望遠鏡',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'やさしさなら間に合ってる',
      inCdType: ['A'],
    },
    {
      title: 'ここじゃないどこか',
      inCdType: ['B'],
    },
    {
      title: '春のメロディー',
      inCdType: ['C'],
    },
    {
      title: '渋谷ブルース',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'saitouyuuri',
    'nakadakana',
    'etoumisa',
    'itoumarika',
    'kawagohina',
    'higuchihina',
    'itounene',
    'kawamuramahiro',
    'nakamotohimeka',
    'hatanakaseira',
    'nagashimaseira',
    'miyazawaseira',
    'yamatorina',
    'andoumikumo',
    'wadamaaya',
    'saitouchiharu',
  ],
  skips: ['kashiwayukina'],
});
