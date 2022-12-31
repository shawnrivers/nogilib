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
    creators: {
      lyrics: ['秋元康'],
      compose: ['若林充'],
      arrange: ['若林充'],
      direct: ['東市篤憲'],
    },
    center: ['nakamurareno'],
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
    creators: {
      lyrics: ['秋元康'],
      compose: ['浦島健太', '菊池博人'],
      arrange: ['菊池博人'],
      direct: ['山岸聖太'],
    },
  }),
  createSongRaw({
    title: '銭湯ラプソディー',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['本田正樹'],
      arrange: ['本田正樹'],
    },
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
    creators: {
      lyrics: ['秋元康'],
      compose: ['藤田卓也'],
      arrange: ['藤田卓也'],
    },
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
    creators: {
      lyrics: ['秋元康'],
      compose: ['坂本麗衣'],
      arrange: ['ツタナオヒコ'],
    },
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
    creators: {
      lyrics: ['秋元康'],
      compose: ['姫野博行'],
      arrange: ['APAZZI'],
      direct: ['横堀光範'],
    },
    center: ['kawasakisakura'],
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
