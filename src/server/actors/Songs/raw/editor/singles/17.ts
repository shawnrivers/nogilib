import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const SEVENTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'インフルエンサー',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['すみだしんや'],
      arrange: ['APAZZI'],
      direct: ['丸山健志'],
    },
    center: ['nishinonanase', 'shiraishimai'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'akimotomanatsu',
        'horimiona',
        'nishinonanase',
        'shiraishimai',
        'saitouasuka',
        'etoumisa',
      ],
      secondRow: [
        'wakatsukiyumi',
        'takayamakazumi',
        'ikomarina',
        'ikutaerika',
        'matsumurasayuri',
        'sakuraireika',
      ],
      thirdRow: [
        'shinuchimai',
        'inouesayuri',
        'teradaranze',
        'kitanohinako',
        'itoumarika',
        'hoshinominami',
        'saitouyuuri',
        'higuchihina',
        'nakadakana',
      ],
    },
  }),
  createSongRaw({
    title: '風船は生きている',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['泉佳伸', '三好翔太'],
      arrange: ['早川博隆', '三好翔太'],
      direct: ['多田卓也'],
    },
    center: ['watanabemiria'],
    formations: {
      firstRow: ['yamazakirena', 'watanabemiria', 'suzukiayane'],
      secondRow: ['saitouchiharu', 'itoukarin', 'noujouami', 'sagaraiori'],
      thirdRow: [
        'kawagohina',
        'sasakikotoko',
        'wadamaaya',
        'itoujunna',
        'kawamuramahiro',
      ],
    },
  }),
  createSongRaw({
    title: '人生を考えたくなる',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['片桐周太郎'],
      arrange: ['片桐周太郎'],
    },
    unit: '女子校カルテット',
    formations: {
      firstRow: [
        'akimotomanatsu',
        'sakuraireika',
        'nakadakana',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '意外BREAK',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['すみだしんや'],
      arrange: ['華原大輔'],
      direct: ['伊藤衆人'],
    },
    unit: '姉御坂',
    formations: {
      firstRow: [
        'etoumisa',
        'shiraishimai',
        'takayamakazumi',
        'matsumurasayuri',
      ],
    },
  }),
  createSongRaw({
    title: 'Another Ghost',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['前迫潤哉', 'Yasutaka.Ishio'],
      arrange: ['Yasutaka.Ishio'],
      direct: ['井上強'],
    },
    unit: 'ナスカ',
    formations: {
      firstRow: ['itoumarika', 'saitouasuka', 'nishinonanase'],
    },
  }),
  createSongRaw({
    title: '三番目の風',
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['丸谷マナブ'],
      direct: ['岡川太郎'],
    },
    center: ['oozonomomoko'],
    formations: {
      firstRow: ['kuboshiori', 'oozonomomoko', 'yamashitamizuki'],
      secondRow: ['sakaguchitamami', 'yodayuuki', 'itouriria', 'iwamotorenka'],
      thirdRow: [
        'umezawaminami',
        'mukaihazuki',
        'nakamurareno',
        'satoukaede',
        'yoshidaayanochristie',
      ],
    },
  }),
  createSongRaw({
    title: '当たり障りのない話',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['小網準'],
      arrange: ['野中"まさ"雄一'],
    },
    unit: 'かすみ草',
    formations: {
      firstRow: ['ikomarina', 'inouesayuri', 'hoshinominami', 'horimiona'],
    },
  }),
];
