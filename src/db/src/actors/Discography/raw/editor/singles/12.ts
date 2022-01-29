import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWELFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '太陽ノック',
  number: '12',
  release: '2015-07-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '太陽ノック',
      inCdType: ['A', 'B', 'C', 'T', 'L'],
    },
    {
      title: 'もう少しの夢',
      inCdType: ['A', 'B', 'C', 'T', 'L'],
    },
    {
      title: '魚たちのLOVE SONG',
      inCdType: ['A'],
    },
    {
      title: '無表情',
      inCdType: ['B'],
    },
    {
      title: '別れ際、もっと好きになる',
      inCdType: ['C'],
    },
    {
      title: '羽根の記憶',
      inCdType: ['T'],
    },
    {
      title: '制服を脱いでサヨナラを…',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'kawamuramahiro',
    'kitanohinako',
    'horimiona',
    'nakamotohimeka',
    'nakadakana',
    'sagaraiori',
    'kawagohina',
    'nagashimaseira',
    'noujouami',
    'saitouchiharu',
    'wadamaaya',
    'sasakikotoko',
    'teradaranze',
    'itoukarin',
    'watanabemiria',
    'suzukiayane',
    'itoujunna',
    'higuchihina',
  ],
  skips: ['yamazakirena'],
});
