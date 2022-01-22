import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const BEST_ALBUM_SONGS = [
  createSongRaw({
    title: '最後のTight Hug',
    type: 'lead',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['池田一真'],
    },
    center: ['ikutaerika'],
    performersType: {
      name: 'selected',
      single: '28',
    },
    formations: {
      firstRow: [
        'kitanohinako',
        'higuchihina',
        'saitouasuka',
        'ikutaerika',
        'akimotomanatsu',
        'hoshinominami',
        'suzukiayane',
      ],
      secondRow: [
        'iwamotorenka',
        'yodayuuki',
        'umezawaminami',
        'shinuchimai',
        'yamashitamizuki',
        'kuboshiori',
      ],
      thirdRow: [
        'endousakura',
        'seimiyarei',
        'kakehashisayaka',
        'tsutsuiayame',
        'hayakawaseira',
        'tamuramayu',
        'kakiharuka',
      ],
    },
  }),
  createSongRaw({
    title: 'ゆっくりと咲く花',
    type: 'second generation',
    creators: {
      lyrics: ['秋元康'],
      direct: ['荒船泰廣'],
    },
    performersType: {
      name: 'generation',
      generation: 2,
      single: '24',
    },
    formations: {
      firstRow: ['teradaranze', 'horimiona', 'kitanohinako', 'shinuchimai'],
      secondRow: [
        'yamazakirena',
        'watanabemiria',
        'sasakikotoko',
        'suzukiayane',
        'itoujunna',
      ],
    },
  }),
  createSongRaw({
    title: '歳月の轍',
    type: 'solo',
    solo: 'ikutaerika',
  }),
  createSongRaw({
    title: 'あなたからの卒業',
    type: 'solo',
    solo: 'shinuchimai',
  }),
  createSongRaw({
    title: 'Hard to say',
    type: 'coupling',
    formations: {
      firstRow: [
        'saitouasuka',
        'higuchihina',
        'hoshinominami',
        'wadamaaya',
        'kitanohinako',
        'shinuchimai',
        'suzukiayane',
        'yamazakirena',
        'itouriria',
        'iwamotorenka',
        'umezawaminami',
        'kuboshiori',
        'sakaguchitamami',
        'satoukaede',
        'nakamurareno',
        'mukaihazuki',
        'yoshidaayanochristie',
        'kanagawasaya',
        'kitagawayuri',
        'kuromiharuka',
        'satourika',
        'shibatayuna',
        'hayashiruna',
        'matsuomiyu',
        'yakubomio',
        'yumikinao',
      ],
    },
  }),
];