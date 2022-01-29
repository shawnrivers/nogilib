import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWELFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '太陽ノック',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['黒須克彦'],
      arrange: ['長田直之'],
      direct: ['三石直和'],
    },
    center: ['ikomarina'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'shiraishimai',
        'nishinonanase',
        'ikomarina',
        'ikutaerika',
        'hashimotonanami',
      ],
      secondRow: [
        'takayamakazumi',
        'wakatsukiyumi',
        'sakuraireika',
        'akimotomanatsu',
        'fukagawamai',
      ],
      thirdRow: [
        'matsumurasayuri',
        'saitouyuuri',
        'hoshinominami',
        'saitouasuka',
        'itoumarika',
        'inouesayuri',
        'shinuchimai',
        'etoumisa',
      ],
    },
  }),
  createSongRaw({
    title: '別れ際、もっと好きになる',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ha-j'],
      arrange: ['Akira Sunset', 'ha-j'],
      direct: ['山岸聖太'],
    },
    center: ['horimiona'],
    formations: {
      firstRow: [
        'kawamuramahiro',
        'kitanohinako',
        'horimiona',
        'nakamotohimeka',
        'nakadakana',
      ],
      secondRow: [
        'sagaraiori',
        'kawagohina',
        'nagashimaseira',
        'noujouami',
        'saitouchiharu',
      ],
      thirdRow: [
        'wadamaaya',
        'sasakikotoko',
        'teradaranze',
        'itoukarin',
        'watanabemiria',
        'suzukiayane',
        'itoujunna',
        'higuchihina',
      ],
    },
  }),
  createSongRaw({
    title: 'もう少しの夢',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['野中"まさ"雄一'],
    },
    solo: 'nishinonanase',
  }),
  createSongRaw({
    title: '魚たちのLOVE SONG',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['渡辺拓也'],
      arrange: ['渡辺拓也'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: [
        'shiraishimai',
        'takayamakazumi',
        'hashimotonanami',
        'fukagawamai',
      ],
    },
  }),
  createSongRaw({
    title: '無表情',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset'],
      arrange: ['Akira Sunset'],
      direct: ['月田茂', '山本篤彦', '柴谷麻以'],
    },
    unit: 'からあげ姉妹',
    formations: {
      firstRow: ['ikutaerika', 'matsumurasayuri'],
    },
  }),
  createSongRaw({
    title: '羽根の記憶',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
      direct: ['岡川太郎'],
    },
    center: ['ikomarina'],
    formations: {
      firstRow: [
        'ikomarina',
        'akimotomanatsu',
        'ikutaerika',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'saitouasuka',
        'saitouyuuri',
        'sakuraireika',
        'shinuchimai',
        'shiraishimai',
        'takayamakazumi',
        'nishinonanase',
        'hashimotonanami',
        'fukagawamai',
        'hoshinominami',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '制服を脱いでサヨナラを…',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
    },
    formations: {
      firstRow: ['saitouasuka', 'hoshinominami'],
    },
  }),
];
