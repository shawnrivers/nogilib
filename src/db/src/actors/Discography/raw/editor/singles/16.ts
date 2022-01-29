import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const SIXTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'サヨナラの意味',
  number: '16',
  release: '2016-11-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'サヨナラの意味',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '孤独な青空',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'あの教室',
      inCdType: ['A'],
    },
    {
      title: 'ブランコ',
      inCdType: ['B'],
    },
    {
      title: '2度目のキスから',
      inCdType: ['C'],
    },
    {
      title: '君に贈る花がない',
      inCdType: ['D'],
    },
    {
      title: 'ないものねだり',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'kawamuramahiro',
    'higuchihina',
    'teradaranze',
    'nakadakana',
    'noujouami',
    'saitouyuuri',
    'yamazakirena',
    'watanabemiria',
    'suzukiayane',
    'saitouchiharu',
    'itoujunna',
    'wadamaaya',
    'itoukarin',
    'kawagohina',
    'sasakikotoko',
    'sagaraiori',
  ],
});
