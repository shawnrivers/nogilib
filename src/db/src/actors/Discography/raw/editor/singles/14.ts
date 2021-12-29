import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const FOURTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ハルジオンが咲く頃',
  number: '14',
  release: '2016-03-23',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'ハルジオンが咲く頃',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '遥かなるブータン',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '強がる蕾',
      inCdType: ['A'],
    },
    {
      title: '急斜面',
      inCdType: ['B'],
    },
    {
      title: '釣り堀',
      inCdType: ['C'],
    },
    {
      title: '不等号',
      inCdType: ['D'],
    },
    {
      title: '憂鬱と風船ガム',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'saitouyuuri',
    'teradaranze',
    'nakamotohimeka',
    'kitanohinako',
    'higuchihina',
    'itoukarin',
    'kawagohina',
    'nakadakana',
    'shinuchimai',
    'noujouami',
    'saitouchiharu',
    'watanabemiria',
    'suzukiayane',
    'yamazakirena',
    'sasakikotoko',
    'sagaraiori',
    'kawagohina',
    'wadamaaya',
    'itoujunna',
  ],
});
