import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const THIRTY_FIRST_SINGLE_SONGS = [
  createSongRaw({
    title: 'ここにはないもの',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ナスカ'],
      arrange: ['the Third'],
      direct: ['小林啓一'],
    },
    center: ['saitouasuka'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'kakiharuka',
        'endousakura',
        'saitouasuka',
        'yamashitamizuki',
        'yodayuuki',
      ],
      secondRow: [
        'tamuramayu',
        'kuboshiori',
        'umezawaminami',
        'akimotomanatsu',
        'suzukiayane',
        'kanagawasaya',
      ],
      thirdRow: [
        'shibatayuna',
        'iwamotorenka',
        'sakaguchitamami',
        'tsutsuiayame',
        'hayakawaseira',
        'hayashiruna',
        'yumikinao',
      ],
    },
  }),
  createSongRaw({
    title: '悪い成分',
    type: 'under',
    formations: {
      firstRow: [
        'itouriria',
        'satoukaede',
        'nakamurareno',
        'mukaihazuki',
        'yoshidaayanochristie',
        'kitagawayuri',
        'kuromiharuka',
        'satourika',
        'matsuomiyu',
        'yakubomio',
      ],
    },
  }),
  createSongRaw({
    title: 'これから',
    type: 'solo',
    solo: 'saitouasuka',
  }),
  createSongRaw({
    title: '銭湯ラプソディー',
    type: 'unit',
    formations: {
      firstRow: [
        'umezawaminami',
        'kanagawasaya',
        'tamuramayu',
        'yamashitamizuki',
        'yodayuuki',
      ],
    },
  }),
  createSongRaw({
    title: 'アトノマツリ',
    type: 'unit',
    formations: {
      firstRow: [
        'endousakura',
        'kakiharuka',
        'kitagawayuri',
        'hayashiruna',
        'yumikinao',
      ],
    },
  }),
  createSongRaw({
    title: '甘いエビデンス',
    type: 'unit',
    formations: {
      firstRow: [
        'itouriria',
        'kuboshiori',
        'shibatayuna',
        'nakamurareno',
        'hayashiruna',
      ],
    },
  }),
  createSongRaw({
    title: '17分間',
    type: 'fifth generation',
    formations: {
      firstRow: [
        'iokimao',
        'ikedateresa',
        'ichinosemiku',
        'inouenagi',
        'okamotohina',
        'ogawaaya',
        'okudairoha',
        'kawasakisakura',
        'sugawarasatsuki',
        'tomisatonao',
        'nakanishiaruno',
      ],
    },
  }),
];
