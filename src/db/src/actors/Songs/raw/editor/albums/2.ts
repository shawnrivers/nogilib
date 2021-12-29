import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const SECOND_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'きっかけ',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
    },
    formations: {
      firstRow: [
        'hashimotonanami',
        'nishinonanase',
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
    title: '太陽に口説かれて',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['フジノタカフミ'],
      arrange: ['フジノタカフミ'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'saitouasuka',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nishinonanase',
        'hashimotonanami',
        'hoshinominami',
        'horimiona',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '欲望のリインカーネーション',
    type: 'under',
    creators: {
      lyrics: ['秋元康', '本山清治'],
      compose: ['渡辺未来'],
      arrange: ['渡辺未来'],
    },
    formations: {
      firstRow: [
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'saitouyuuri',
        'nakadakana',
        'nakamotohimeka',
        'noujouami',
        'higuchihina',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: '空気感',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['DR QUEENBEE'],
      arrange: ['DR QUEENBEE'],
    },
    formations: {
      firstRow: [
        'etoumisa',
        'shiraishimai',
        'takayamakazumi',
        'hashimotonanami',
        'matsumurasayuri',
      ],
    },
  }),
  createSongRaw({
    title: '光合成希望',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['吉田博'],
      arrange: ['野中"まさ"雄一'],
    },
    solo: 'nishinonanase',
  }),
  createSongRaw({
    title: 'Threefold choice',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
    },
    formations: {
      firstRow: ['saitouasuka', 'hoshinominami', 'horimiona'],
    },
  }),
  createSongRaw({
    title: '低体温のキス',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中谷あつこ'],
      arrange: ['田上陽一'],
    },
    solo: 'ikutaerika',
  }),
  createSongRaw({
    title: '失恋したら、顔を洗え!',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['さいとうくにあき'],
      arrange: ['内田充'],
    },
    unit: '乃木團',
    formations: {
      firstRow: ['nakamotohimeka', 'noujouami'],
    },
  }),
  createSongRaw({
    title: 'かき氷の片想い',
    type: 'second generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['白須賀悟'],
      arrange: ['白須賀悟'],
    },
    center: ['horimiona'],
    formations: {
      firstRow: ['teradaranze', 'horimiona', 'kitanohinako'],
      secondRow: [
        'yamazakirena',
        'watanabemiria',
        'suzukiayane',
        'shinuchimai',
      ],
      thirdRow: ['itoujunna', 'itoukarin', 'sasakikotoko', 'sagaraiori'],
    },
  }),
  createSongRaw({
    title: '環状六号線',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['サイトウリョースケ'],
      arrange: ['サイトウリョースケ'],
    },
    unit: '犬メン',
    formations: {
      firstRow: ['ikomarina', 'itoumarika', 'inouesayuri'],
    },
  }),
  createSongRaw({
    title: '口約束',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Amber'],
      arrange: ['若田部誠'],
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
];
