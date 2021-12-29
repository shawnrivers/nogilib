import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const SECOND_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'おいでシャンプー',
  number: '2',
  release: '2012-05-02',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'おいでシャンプー',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '心の薬',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '偶然を言い訳にして',
      inCdType: ['A'],
    },
    {
      title: '水玉模様',
      inCdType: ['B'],
    },
    {
      title: '狼に口笛を',
      inCdType: ['C'],
    },
    {
      title: 'ハウス!',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'fukagawamai',
    'itoumarika',
    'wakatsukiyumi',
    'kawagohina',
    'kawamuramahiro',
    'saitouchiharu',
    'nagashimaseira',
    'etoumisa',
    'itounene',
    'saitouasuka',
    'nakamotohimeka',
    'higuchihina',
    'kashiwayukina',
    'andoumikumo',
    'yamatorina',
    'noujouami',
    'wadamaaya',
  ],
  skips: ['akimotomanatsu'],
});
