import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const EIGHTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '気づいたら片想い',
  number: '8',
  release: '2014-04-02',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '気づいたら片想い',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'ロマンスのスタート',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '吐息のメソッド',
      inCdType: ['A'],
    },
    {
      title: '孤独兄弟',
      inCdType: ['B'],
    },
    {
      title: '生まれたままで',
      inCdType: ['C'],
    },
    {
      title: 'ダンケシェーン',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'inouesayuri',
    'saitouasuka',
    'itoumarika',
    'hoshinominami',
    'saitouyuuri',
    'nagashimaseira',
    'nakadakana',
    'etoumisa',
    'kawagohina',
    'nakamotohimeka',
    'saitouchiharu',
    'itounene',
    'ichikirena',
    'shinuchimai',
    'hatanakaseira',
    'yamatorina',
    'noujouami',
  ],
  trainees: [
    'itoukarin',
    'itoujunna',
    'sasakikotoko',
    'suzukiayane',
    'teradaranze',
    'yamazakirena',
    'watanabemiria',
    'yonetokukyouka',
    'yadarisako',
  ],
  skips: ['sagaraiori'],
});
