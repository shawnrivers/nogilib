import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_THIRD_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'Sing Out!',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Ryota Saito', 'TETTA'],
      arrange: ['野中“まさ”雄一'],
      direct: ['池田一真'],
    },
    center: ['saitouasuka'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'oozonomomoko',
        'horimiona',
        'ikutaerika',
        'saitouasuka',
        'shiraishimai',
        'takayamakazumi',
        'yodayuuki',
      ],
      secondRow: [
        'umezawaminami',
        'kitanohinako',
        'akimotomanatsu',
        'kuboshiori',
        'matsumurasayuri',
        'hoshinominami',
        'sakuraireika',
      ],
      thirdRow: [
        'inouesayuri',
        'satoukaede',
        'suzukiayane',
        'iwamotorenka',
        'sakaguchitamami',
        'watanabemiria',
        'itouriria',
        'shinuchimai',
      ],
    },
  }),
  createSongRaw({
    title: '滑走路',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['CHOCOLATE MIX'],
      arrange: ['CHOCOLATE MIX'],
      direct: ['maxilla'],
    },
    center: ['teradaranze'],
    formations: {
      firstRow: [
        'yamazakirena',
        'nakamurareno',
        'teradaranze',
        'higuchihina',
        'nakadakana',
      ],
      secondRow: [
        'yoshidaayanochristie',
        'mukaihazuki',
        'wadamaaya',
        'sasakikotoko',
        'itoujunna',
      ],
    },
  }),
  createSongRaw({
    title: 'のような存在',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'APAZZI'],
      arrange: ['Akira Sunset', 'APAZZI'],
      direct: ['伊藤衆人'],
    },
    formations: {
      firstRow: ['saitouasuka', 'shiraishimai'],
    },
  }),
  createSongRaw({
    title: 'Am I Loving?',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田智和'],
      arrange: ['APAZZI'],
      direct: [],
    },
    formations: {
      firstRow: [
        'kitanohinako',
        'suzukiayane',
        'hoshinominami',
        'horimiona',
        'watanabemiria',
      ],
    },
  }),
  createSongRaw({
    title: '平行線',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['近藤圭一'],
      arrange: ['近藤圭一'],
      direct: ['泉田岳'],
    },
    formations: {
      firstRow: [
        'sakaguchitamami',
        'iwamotorenka',
        'oozonomomoko',
        'yodayuuki',
        'kuboshiori',
      ],
    },
  }),
  createSongRaw({
    title: '4番目の光',
    type: 'fourth generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['月田茂'],
    },
    center: ['endousakura'],
    formations: {
      firstRow: [
        'tamuramayu',
        'kakehashisayaka',
        'endousakura',
        'tsutsuiayame',
        'kakiharuka',
      ],
      secondRow: [
        'hayakawaseira',
        'kitagawayuri',
        'seimiyarei',
        'shibatayuna',
        'yakubomio',
        'kanagawasaya',
      ],
    },
  }),
  createSongRaw({
    title: '曖昧',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['doubleglass'],
      arrange: ['doubleglass'],
    },
    unit: 'からあげ姉妹',
    formations: {
      firstRow: ['ikutaerika', 'matsumurasayuri'],
    },
  }),
];
