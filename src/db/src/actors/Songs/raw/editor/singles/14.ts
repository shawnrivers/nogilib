import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const FOURTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'ハルジオンが咲く頃',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'APAZZI'],
      arrange: ['Akira Sunset', 'APAZZI'],
      direct: ['山戸結希'],
    },
    center: ['fukagawamai'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'hashimotonanami',
        'nishinonanase',
        'fukagawamai',
        'shiraishimai',
        'ikutaerika',
      ],
      secondRow: [
        'saitouasuka',
        'takayamakazumi',
        'etoumisa',
        'akimotomanatsu',
        'hoshinominami',
      ],
      thirdRow: [
        'sakuraireika',
        'wakatsukiyumi',
        'matsumurasayuri',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'horimiona',
      ],
    },
  }),
  createSongRaw({
    title: '不等号',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['福田貴史'],
      arrange: ['福田貴史'],
      direct: ['池田千尋'],
    },
    center: ['nakamotohimeka'],
    formations: {
      firstRow: [
        'saitouyuuri',
        'teradaranze',
        'nakamotohimeka',
        'kitanohinako',
        'higuchihina',
      ],
      secondRow: [
        'itoukarin',
        'kawagohina',
        'nakadakana',
        'shinuchimai',
        'noujouami',
      ],
      thirdRow: [
        'saitouchiharu',
        'watanabemiria',
        'suzukiayane',
        'yamazakirena',
        'sasakikotoko',
        'sagaraiori',
        'kawagohina',
        'wadamaaya',
        'itoujunna',
      ],
    },
  }),
  createSongRaw({
    title: '遥かなるブータン',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ツキダタダシ'],
      arrange: ['ha-j'],
    },
    center: ['ikutaerika'],
    formations: {
      firstRow: [
        'ikutaerika',
        'itoumarika',
        'etoumisa',
        'saitouasuka',
        'horimiona',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '強がる蕾',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['大貫和紀', '河原レオ', '高木龍一'],
      arrange: ['Carlos K.'],
      direct: ['真壁幸紀'],
    },
    solo: 'fukagawamai',
  }),
  createSongRaw({
    title: '急斜面',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['FURUTA', 'Yasutaka Ishio'],
      arrange: ['重永亮介'],
      direct: ['番場秀一'],
    },
    formations: {
      firstRow: ['shiraishimai', 'hashimotonanami', 'matsumurasayuri'],
    },
  }),
  createSongRaw({
    title: '釣り堀',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Bush-I'],
      arrange: ['APAZZI'],
      direct: ['永田琴'],
    },
    solo: 'nishinonanase',
  }),
  createSongRaw({
    title: '憂鬱と風船ガム',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['HIROTOMO', 'Dr.Lilcom'],
      arrange: ['APAZZI'],
    },
    center: ['hoshinominami'],
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikomarina',
        'inouesayuri',
        'sakuraireika',
        'takayamakazumi',
        'hoshinominami',
      ],
    },
  }),
];
