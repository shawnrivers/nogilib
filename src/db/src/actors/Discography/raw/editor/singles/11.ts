import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const ELEVENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '命は美しい',
  number: '11',
  release: '2015-03-18',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '命は美しい',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'あらかじめ語られるロマンス',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '立ち直り中',
      inCdType: ['A'],
    },
    {
      title: 'ごめんね ずっと…',
      inCdType: ['B'],
    },
    {
      title: '君は僕と会わない方がよかったのかな',
      inCdType: ['C'],
    },
    {
      title: 'ボーダー',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'saitouyuuri',
    'nakamotohimeka',
    'inouesayuri',
    'noujouami',
    'nagashimaseira',
    'nakadakana',
    'shinuchimai',
    'kawamuramahiro',
    'kitanohinako',
    'kawagohina',
    'higuchihina',
    'itoukarin',
    'wadamaaya',
    'saitouchiharu',
  ],
  trainees: [
    'itoujunna',
    'sasakikotoko',
    'suzukiayane',
    'teradaranze',
    'yamazakirena',
    'watanabemiria',
  ],
});
