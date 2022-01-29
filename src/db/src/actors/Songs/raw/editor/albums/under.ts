import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const UNDER_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: '自分のこと',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['小松清人'],
      arrange: ['小松清人'],
    },
    solo: 'nakamotohimeka',
  }),
  createSongRaw({
    title: '自惚れビーチ',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ツキダタダシ'],
      arrange: ['ツキダタダシ'],
    },
    center: ['suzukiayane'],
    formations: {
      firstRow: [
        'suzukiayane',
        'itoukarin',
        'itoujunna',
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'sagaraiori',
        'sasakikotoko',
        'teradaranze',
        'noujouami',
        'higuchihina',
        'yamazakirena',
        'watanabemiria',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: 'その女',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['HRK'],
      arrange: ['APAZZI'],
    },
    center: ['teradaranze'],
    formations: {
      firstRow: [
        'teradaranze',
        'itoukarin',
        'itoujunna',
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'sagaraiori',
        'sasakikotoko',
        'suzukiayane',
        'noujouami',
        'higuchihina',
        'yamazakirena',
        'watanabemiria',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: '誰よりそばにいたい',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['岩崎哲也'],
      arrange: ['関根佑樹'],
    },
    center: ['higuchihina'],
    formations: {
      firstRow: [
        'higuchihina',
        'itoukarin',
        'itoujunna',
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'sagaraiori',
        'sasakikotoko',
        'suzukiayane',
        'teradaranze',
        'noujouami',
        'yamazakirena',
        'watanabemiria',
        'wadamaaya',
      ],
    },
  }),
];
