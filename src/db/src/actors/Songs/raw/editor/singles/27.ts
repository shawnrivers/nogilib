import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_SEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'ごめんねFingers crossed',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦', 'APAZZI'],
      direct: ['東市篤憲'],
    },
    center: ['endousakura'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'yodayuuki',
        'saitouasuka',
        'endousakura',
        'yamashitamizuki',
        'kakiharuka',
      ],
      secondRow: [
        'akimotomanatsu',
        'umezawaminami',
        'hoshinominami',
        'matsumurasayuri',
        'ikutaerika',
        'kuboshiori',
        'takayamakazumi',
      ],
      thirdRow: [
        'higuchihina',
        'hayakawaseira',
        'tsutsuiayame',
        'oozonomomoko',
        'iwamotorenka',
        'seimiyarei',
        'tamuramayu',
        'shinuchimai',
      ],
    },
  }),
  createSongRaw({
    title: '全部　夢のまま',
    type: 'coupling',
    creators: {
      lyrics: ['秋元康'],
      compose: ['you-me'],
      arrange: ['佐々木裕'],
      direct: ['神谷雄貴'],
    },
    center: ['yodayuuki'],
    formations: {
      firstRow: ['hoshinominami', 'yodayuuki', 'tsutsuiayame'],
      secondRow: [
        'akimotomanatsu',
        'ikutaerika',
        'umezawaminami',
        'yamashitamizuki',
        'kuboshiori',
        'saitouasuka',
        'matsumurasayuri',
      ],
      thirdRow: [
        'kakiharuka',
        'iwamotorenka',
        'seimiyarei',
        'oozonomomoko',
        'endousakura',
        'takayamakazumi',
        'shinuchimai',
        'tamuramayu',
      ],
    },
    performersType: {
      name: 'selected',
      single: '26',
    },
  }),
  createSongRaw({
    title: '大人たちには指示されない',
    type: 'third generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['BASEMINT'],
    },
    center: ['iwamotorenka'],
    formations: {
      firstRow: ['oozonomomoko', 'iwamotorenka', 'nakamurareno'],
      secondRow: [
        'kuboshiori',
        'yodayuuki',
        'yamashitamizuki',
        'umezawaminami',
      ],
      thirdRow: [
        'satoukaede',
        'mukaihazuki',
        'sakaguchitamami',
        'itouriria',
        'yoshidaayanochristie',
      ],
    },
  }),
  createSongRaw({
    title: 'ざんぶざざぶん',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['NOVECHIKA', 'TETTA'],
      direct: ['高橋一生'],
    },
    formations: {
      firstRow: ['yodayuuki', 'tsutsuiayame'],
    },
  }),
  createSongRaw({
    title: 'さ～ゆ～Ready？',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Masayoshi Kawabata'],
      direct: ['萩原健太郎', '月田茂', '伊藤衆人'],
    },
    solo: 'matsumurasayuri',
  }),
  createSongRaw({
    title: '錆びたコンパス',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      direct: ['大久保拓朗'],
    },
    center: ['yamazakirena'],
    formations: {
      firstRow: ['watanabemiria', 'yamazakirena', 'itoujunna'],
      secondRow: [
        'sakaguchitamami',
        'kitanohinako',
        'suzukiayane',
        'teradaranze',
      ],
      thirdRow: [
        'satoukaede',
        'wadamaaya',
        'nakamurareno',
        'mukaihazuki',
        'yoshidaayanochristie',
        'itouriria',
      ],
    },
  }),
  createSongRaw({
    title: '猫舌カモミールティー',
    type: 'fourth generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Shinobu Suzuki'],
    },
    center: ['tamuramayu'],
    formations: {
      firstRow: ['matsuomiyu', 'tamuramayu', 'yumikinao'],
      secondRow: [
        'tsutsuiayame',
        'kakiharuka',
        'endousakura',
        'hayakawaseira',
        'seimiyarei',
      ],
      thirdRow: [
        'kitagawayuri',
        'kakehashisayaka',
        'kuromiharuka',
        'shibatayuna',
        'hayashiruna',
        'satourika',
        'yakubomio',
        'kanagawasaya',
      ],
    },
  }),
];
