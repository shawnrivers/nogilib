import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const EIGHTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '逃げ水',
  number: '18',
  release: '2017-08-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '逃げ水',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '女は一人じゃ眠れない',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'ひと夏の長さより…',
      inCdType: ['A'],
    },
    {
      title: '泣いたっていいじゃないか?',
      inCdType: ['B'],
    },
    {
      title: 'アンダー',
      inCdType: ['C'],
    },
    {
      title: 'ライブ神',
      inCdType: ['D'],
    },
    {
      title: '未来の答え',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'higuchihina',
    'watanabemiria',
    'nakamotohimeka',
    'kitanohinako',
    'teradaranze',
    'saitouyuuri',
    'nakadakana',
    'yamazakirena',
    'suzukiayane',
    'itoukarin',
    'itoujunna',
    'saitouchiharu',
    'noujouami',
    'sagaraiori',
    'kawagohina',
    'kawamuramahiro',
    'sasakikotoko',
    'wadamaaya',
  ],
  trainees: [
    'itouriria',
    'iwamotorenka',
    'umezawaminami',
    'kuboshiori',
    'sakaguchitamami',
    'satoukaede',
    'nakamurareno',
    'mukaihazuki',
    'yamashitamizuki',
    'yoshidaayanochristie',
  ],
});
