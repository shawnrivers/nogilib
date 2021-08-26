import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const SECOND_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'おいでシャンプー',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['小田切大'],
      arrange: ['TATOO'],
      direct: ['高橋栄樹'],
    },
    center: ['ikomarina'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: ['sakuraireika', 'ikomarina', 'nakadakana'],
      secondRow: [
        'hashimotonanami',
        'matsumurasayuri',
        'shiraishimai',
        'takayamakazumi',
      ],
      thirdRow: [
        'iwaseyumiko',
        'ichikirena',
        'saitouyuuri',
        'ikutaerika',
        'inouesayuri',
        'hoshinominami',
        'nishinonanase',
        'hatanakaseira',
        'miyazawaseira',
      ],
    },
  }),
  createSongRaw({
    title: '狼に口笛を',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset'],
      arrange: ['シライシ紗トリ'],
      direct: ['福居英晃'],
    },
    center: ['itoumarika'],
    formations: {
      firstRow: ['fukagawamai', 'itoumarika', 'wakatsukiyumi'],
      secondRow: [
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'nagashimaseira',
      ],
      thirdRow: [
        'etoumisa',
        'itounene',
        'saitouasuka',
        'nakamotohimeka',
        'higuchihina',
      ],
      fourthRow: [
        'kashiwayukina',
        'andoumikumo',
        'yamatorina',
        'noujouami',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: '心の薬',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['MIKOTO'],
      arrange: ['木之下慶行'],
    },
    center: ['ikomarina'],
    formations: {
      firstRow: [
        'ikomarina',
        'ikutaerika',
        'ichikirena',
        'itoumarika',
        'inouesayuri',
        'iwaseyumiko',
        'saitouyuuri',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakadakana',
        'nagashimaseira',
        'nishinonanase',
        'hashimotonanami',
        'hatanakaseira',
        'fukagawamai',
        'hoshinominami',
        'matsumurasayuri',
        'miyazawaseira',
        'yamatorina',
      ],
    },
  }),
  createSongRaw({
    title: '偶然を言い訳にして',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['坂部大介'],
      arrange: ['中土智博'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: [
        'shiraishimai',
        'takayamakazumi',
        'hashimotonanami',
        'matsumurasayuri',
      ],
    },
  }),
  createSongRaw({
    title: '水玉模様',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['若田部誠'],
      arrange: ['若田部誠'],
      direct: ['丸山健志'],
    },
    solo: 'ikomarina',
  }),
  createSongRaw({
    title: 'ハウス!',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['y@suo ohtani'],
      arrange: ['y@suo ohtani'],
    },
    center: ['ikomarina'],
    formations: {
      firstRow: [
        'ikomarina',
        'ikutaerika',
        'ichikirena',
        'inouesayuri',
        'iwaseyumiko',
        'etoumisa',
        'kawamuramahiro',
        'saitouyuuri',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakadakana',
        'nishinonanase',
        'noujouami',
        'hashimotonanami',
        'hatanakaseira',
        'hoshinominami',
        'matsumurasayuri',
        'miyazawaseira',
        'wakatsukiyumi',
      ],
    },
  }),
];
