import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const FIFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '君の名は希望',
  number: '5',
  release: '2013-03-31',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '君の名は希望',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'シャキイズム',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'ロマンティックいか焼き',
      inCdType: ['A'],
    },
    {
      title: '13日の金曜日',
      inCdType: ['B'],
    },
    {
      title: 'でこぴん',
      inCdType: ['C'],
    },
    {
      title: 'サイコキネシスの可能性',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'itoumarika',
    'saitouyuuri',
    'saitouasuka',
    'kawamuramahiro',
    'etoumisa',
    'noujouami',
    'ichikirena',
    'yamatorina',
    'wadamaaya',
    'nakamotohimeka',
    'saitouchiharu',
    'kashiwayukina',
    'andoumikumo',
    'hatanakaseira',
    'higuchihina',
    'kawagohina',
    'miyazawaseira',
  ],
});
