import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const NINETEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'いつかできるから今日できる',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', '京田誠一'],
      arrange: ['Akira Sunset', '京田誠一'],
      direct: ['高橋栄樹'],
    },
    center: ['nishinonanase', 'saitouasuka'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: ['horimiona', 'nishinonanase', 'saitouasuka', 'shiraishimai'],
      secondRow: [
        'wakatsukiyumi',
        'inouesayuri',
        'matsumurasayuri',
        'ikutaerika',
        'itoumarika',
        'sakuraireika',
        'etoumisa',
      ],
      thirdRow: [
        'shinuchimai',
        'saitouyuuri',
        'hoshinominami',
        'ikomarina',
        'akimotomanatsu',
        'kitanohinako',
        'nakadakana',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: 'My rule',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['藤田卓也'],
      arrange: ['藤田卓也'],
      direct: ['林希', '古屋蔵人'],
    },
    center: ['higuchihina'],
    formations: {
      firstRow: ['watanabemiria', 'higuchihina', 'teradaranze'],
      secondRow: ['noujouami', 'suzukiayane', 'yamazakirena', 'saitouchiharu'],
      thirdRow: [
        'sagaraiori',
        'sasakikotoko',
        'itoukarin',
        'kawagohina',
        'kawamuramahiro',
        'wadamaaya',
        'itoujunna',
      ],
    },
  }),
  createSongRaw({
    title: '不眠症',
    type: 'coupling',
    creators: {
      lyrics: ['秋元康'],
      compose: ['大貫和紀', '河原レオ', '高木龍一'],
      arrange: ['大貫和紀', '河原レオ', '高木龍一'],
    },
    center: ['kuboshiori', 'yamashitamizuki'],
    formations: {
      firstRow: [
        'kuboshiori',
        'yamashitamizuki',
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'oozonomomoko',
        'saitouasuka',
        'sakuraireika',
        'shiraishimai',
        'shinuchimai',
        'takayamakazumi',
        'nishinonanase',
        'hoshinominami',
        'horimiona',
        'matsumurasayuri',
        'yodayuuki',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: 'まあいいか?',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['HRK'],
      arrange: ['原広明'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: ['akimotomanatsu', 'shiraishimai'],
    },
  }),
  createSongRaw({
    title: '失恋お掃除人',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['さいとうくにあき', 'Akira Sunset', '京田誠一'],
      arrange: ['さいとうくにあき', 'Akira Sunset', '京田誠一'],
      direct: ['伊藤衆人'],
    },
    unit: '若様軍団',
    formations: {
      firstRow: [
        'umezawaminami',
        'sakaguchitamami',
        'yamashitamizuki',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '僕の衝動',
    type: 'third generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['石井伸昂'],
      arrange: ['石井伸昂'],
      direct: ['荒船泰廣'],
    },
    center: ['itouriria'],
    formations: {
      firstRow: ['oozonomomoko', 'itouriria', 'yodayuuki'],
      secondRow: [
        'yoshidaayanochristie',
        'umezawaminami',
        'satoukaede',
        'nakamurareno',
      ],
      thirdRow: [
        'sakaguchitamami',
        'yamashitamizuki',
        'mukaihazuki',
        'kuboshiori',
        'iwamotorenka',
      ],
    },
  }),
  createSongRaw({
    title: '新しい花粉 〜ミュージカル「見知らぬ世界」より〜',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['新田目翔'],
      arrange: ['若田部誠'],
      direct: ['荒船泰廣'],
    },
    formations: {
      firstRow: ['ikutaerika', 'kuboshiori'],
    },
  }),
];
