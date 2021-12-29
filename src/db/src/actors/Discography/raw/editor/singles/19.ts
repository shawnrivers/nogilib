import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const NINETEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'いつかできるから今日できる',
  number: '19',
  release: '2017-10-11',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'いつかできるから今日できる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '不眠症',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'まあいいか?',
      inCdType: ['A'],
    },
    {
      title: '失恋お掃除人',
      inCdType: ['B'],
    },
    {
      title: 'My rule',
      inCdType: ['C'],
    },
    {
      title: '僕の衝動',
      inCdType: ['D'],
    },
    {
      title: '新しい花粉 〜ミュージカル「見知らぬ世界」より〜',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'watanabemiria',
    'higuchihina',
    'teradaranze',
    'noujouami',
    'suzukiayane',
    'yamazakirena',
    'saitouchiharu',
    'sagaraiori',
    'sasakikotoko',
    'itoukarin',
    'kawagohina',
    'kawamuramahiro',
    'wadamaaya',
    'itoujunna',
  ],
  trainees: [
    'itouriria',
    'iwamotorenka',
    'umezawaminami',
    'oozonomomoko',
    'kuboshiori',
    'sakaguchitamami',
    'satoukaede',
    'nakamurareno',
    'mukaihazuki',
    'yamashitamizuki',
    'yoshidaayanochristie',
    'yodayuuki',
  ],
});
