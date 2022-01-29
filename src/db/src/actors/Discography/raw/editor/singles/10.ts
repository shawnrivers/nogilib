import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '何度目の青空か?',
  number: '10',
  release: '2014-10-08',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '何度目の青空か?',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '遠回りの愛情',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '転がった鐘を鳴らせ!',
      inCdType: ['A'],
    },
    {
      title: '私、起きる。',
      inCdType: ['B'],
    },
    {
      title: 'あの日 僕は咄嗟に嘘をついた',
      inCdType: ['C'],
    },
    {
      title: 'Tender days',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'saitouasuka',
    'inouesayuri',
    'itoumarika',
    'nagashimaseira',
    'nakamotohimeka',
    'saitouyuuri',
    'nakadakana',
    'noujouami',
    'kawamuramahiro',
    'wadamaaya',
    'higuchihina',
    'itoukarin',
    'kawagohina',
    'hatanakaseira',
    'kitanohinako',
    'yamatorina',
    'shinuchimai',
  ],
  trainees: [
    'itoujunna',
    'sagaraiori',
    'sasakikotoko',
    'suzukiayane',
    'teradaranze',
    'yamazakirena',
    'watanabemiria',
  ],
});
