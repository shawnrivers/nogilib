import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const TWENTIETH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'シンクロニシティ',
  number: '20',
  release: '2018-04-25',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'シンクロニシティ',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'Against',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '雲になればいい',
      inCdType: ['A'],
    },
    {
      title: '新しい世界',
      inCdType: ['B'],
    },
    {
      title: 'スカウトマン',
      inCdType: ['C'],
    },
    {
      title: 'トキトキメキメキ',
      inCdType: ['D'],
    },
    {
      title: '言霊砲',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'umezawaminami',
    'watanabemiria',
    'nakadakana',
    'suzukiayane',
    'saitouyuuri',
    'yamazakirena',
    'itouriria',
    'mukaihazuki',
    'itoukarin',
    'iwamotorenka',
    'itoujunna',
    'sakaguchitamami',
    'saitouchiharu',
    'satoukaede',
    'noujouami',
    'kawagohina',
    'yoshidaayanochristie',
    'sasakikotoko',
    'nakamurareno',
    'wadamaaya',
    'sagaraiori',
  ],
  skips: ['kitanohinako'],
});
