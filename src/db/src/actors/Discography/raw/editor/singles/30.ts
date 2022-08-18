import { createSingleRaw } from '../../creators';

export const THIRTIETH_SINGLE = createSingleRaw({
  title: '好きというのはロックだぜ！',
  number: '30',
  release: '2022-08-30',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '好きというのはロックだぜ！',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: "Under's Love",
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '僕が手を叩く方へ',
      inCdType: ['A'],
    },
    {
      title: 'ジャンピングジョーカーフラッシュ',
      inCdType: ['B'],
    },
    {
      title: 'バンドエイド剥がすような別れ方',
      inCdType: ['C'],
    },
    {
      title: 'パッションフルーツの食べ方',
      inCdType: ['D'],
    },
  ],
  underMembers: [
    'wadamaaya',
    'itouriria',
    'sakaguchitamami',
    'nakamurareno',
    'mukaihazuki',
    'yoshidaayanochristie',
    'kitagawayuri',
    'kuromiharuka',
    'satourika',
    'hayashiruna',
    'matsuomiyu',
    'yakubomio',
  ],
  skips: ['hayakawaseira'],
});
