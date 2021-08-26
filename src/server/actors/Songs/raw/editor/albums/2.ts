import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const SECOND_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'きっかけ',
    type: SongType.Selected,
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
    type: SongType.Selected,
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
    type: SongType.Under,
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
    type: SongType.Unit,
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
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['吉田博'],
      arrange: ['野中"まさ"雄一'],
    },
    solo: 'nishinonanase',
  }),
  createSongRaw({
    title: 'Threefold choice',
    type: SongType.Unit,
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
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中谷あつこ'],
      arrange: ['田上陽一'],
    },
    solo: 'ikutaerika',
  }),
  createSongRaw({
    title: '失恋したら、顔を洗え!',
    type: SongType.Unit,
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
    type: SongType.SecondGeneration,
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
    type: SongType.Unit,
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
    type: SongType.Unit,
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
