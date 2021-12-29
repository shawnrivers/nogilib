import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTY_FOURTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '夜明けまで強がらなくてもいい',
  number: '24',
  release: '2019-09-04',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '夜明けまで強がらなくてもいい',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '僕のこと、知ってる?',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '路面電車の街',
      inCdType: ['A'],
    },
    {
      title: '図書室の君へ',
      inCdType: ['B'],
    },
    {
      title: '時々 思い出してください',
      inCdType: ['C'],
    },
    {
      title: '～Do my best～じゃ意味はない',
      inCdType: ['D'],
    },
    {
      title: '僕の思い込み',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'itoujunna',
    'itouriria',
    'iwamotorenka',
    'sakaguchitamami',
    'sasakikotoko',
    'satoukaede',
    'suzukiayane',
    'teradaranze',
    'nakadakana',
    'nakamurareno',
    'higuchihina',
    'mukaihazuki',
    'yamazakirena',
    'yoshidaayanochristie',
    'watanabemiria',
    'wadamaaya',
  ],
  trainees: [
    'kakehashisayaka',
    'kanagawasaya',
    'kitagawayuri',
    'shibatayuna',
    'seimiyarei',
    'tamuramayu',
    'hayakawaseira',
    'yakubomio',
  ],
  skips: ['inouesayuri', 'oozonomomoko'],
});
