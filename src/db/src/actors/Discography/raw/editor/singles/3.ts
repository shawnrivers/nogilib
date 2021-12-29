import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const THIRD_SINGLE: DiscographyRaw = createSingleRaw({
  title: '走れ!Bicycle',
  number: '3',
  release: '2012-08-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '走れ!Bicycle',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'せっかちなかたつむり',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '涙がまだ悲しみだった頃',
      inCdType: ['A'],
    },
    {
      title: '人はなぜ走るのか?',
      inCdType: ['B'],
    },
    {
      title: '音が出ないギター',
      inCdType: ['C'],
    },
    {
      title: '海流の島よ',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'higuchihina',
    'itounene',
    'saitouasuka',
    'etoumisa',
    'noujouami',
    'kawagohina',
    'kawamuramahiro',
    'kashiwayukina',
    'yamatorina',
    'nagashimaseira',
    'miyazawaseira',
    'andoumikumo',
    'hatanakaseira',
    'iwaseyumiko',
    'wadamaaya',
    'nakamotohimeka',
    'saitouchiharu',
  ],
  skips: ['akimotomanatsu'],
});
