import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const SIXTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'サヨナラの意味',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['若田部誠'],
      direct: ['柳沢翔'],
    },
    center: ['hashimotonanami'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'takayamakazumi',
        'nishinonanase',
        'hashimotonanami',
        'shiraishimai',
        'ikutaerika',
      ],
      secondRow: [
        'wakatsukiyumi',
        'matsumurasayuri',
        'horimiona',
        'saitouasuka',
        'etoumisa',
        'akimotomanatsu',
      ],
      thirdRow: [
        'nakamotohimeka',
        'inouesayuri',
        'shinuchimai',
        'sakuraireika',
        'ikomarina',
        'hoshinominami',
        'kitanohinako',
        'itoumarika',
      ],
    },
  }),
  createSongRaw({
    title: 'ブランコ',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Hiro Hoashi'],
      arrange: ['Hiro Hoashi'],
      direct: ['伊藤衆人'],
    },
    center: ['teradaranze'],
    formations: {
      firstRow: [
        'kawamuramahiro',
        'higuchihina',
        'teradaranze',
        'nakadakana',
        'noujouami',
      ],
      secondRow: [
        'saitouyuuri',
        'yamazakirena',
        'watanabemiria',
        'suzukiayane',
        'saitouchiharu',
      ],
      thirdRow: [
        'itoujunna',
        'wadamaaya',
        'itoukarin',
        'kawagohina',
        'sasakikotoko',
        'sagaraiori',
      ],
    },
  }),
  createSongRaw({
    title: '孤独な青空',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['aokado'],
      arrange: ['aokado'],
    },
    center: ['hashimotonanami'],
    formations: {
      firstRow: [
        'hashimotonanami',
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'kitanohinako',
        'saitouasuka',
        'sakuraireika',
        'shiraishimai',
        'shinuchimai',
        'takayamakazumi',
        'nakamotohimeka',
        'nishinonanase',
        'hoshinominami',
        'horimiona',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: 'あの教室',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['カワノミチオ'],
      arrange: ['カワノミチオ'],
      direct: ['山岸聖太'],
    },
    formations: {
      firstRow: ['saitouasuka', 'horimiona'],
    },
  }),
  createSongRaw({
    title: '2度目のキスから',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'APAZZI'],
      arrange: ['Akira Sunset', 'APAZZI'],
      direct: ['中村太洸'],
    },
    unit: '真夏さんリスペクト軍団',
    formations: {
      firstRow: [
        'akimotomanatsu',
        'sagaraiori',
        'suzukiayane',
        'watanabemiria',
      ],
    },
  }),
  createSongRaw({
    title: '君に贈る花がない',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Rizz'],
      arrange: ['山田竜平'],
      direct: ['東市篤憲'],
    },
    unit: 'サンクエトワール',
    formations: {
      firstRow: [
        'kitanohinako',
        'teradaranze',
        'nakadakana',
        'nakamotohimeka',
        'horimiona',
      ],
    },
  }),
  createSongRaw({
    title: 'ないものねだり',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['丸谷マナブ', '福田貴史'],
      direct: ['山岸聖太'],
    },
    solo: 'hashimotonanami',
  }),
];
