import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const TENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '何度目の青空か?',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['川浦正大'],
      arrange: ['百石元'],
      direct: ['内田けんじ'],
    },
    center: ['ikutaerika'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'matsuirena',
        'shiraishimai',
        'ikutaerika',
        'nishinonanase',
        'hashimotonanami',
      ],
      secondRow: [
        'matsumurasayuri',
        'akimotomanatsu',
        'ikomarina',
        'sakuraireika',
        'fukagawamai',
      ],
      thirdRow: [
        'etoumisa',
        'wakatsukiyumi',
        'horimiona',
        'hoshinominami',
        'takayamakazumi',
        'saitouchiharu',
      ],
    },
  }),
  createSongRaw({
    title: 'あの日 僕は咄嗟に嘘をついた',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['三輪智也'],
      arrange: ['京田誠一'],
      direct: ['湯浅弘章'],
    },
    center: ['inouesayuri'],
    formations: {
      firstRow: ['saitouasuka', 'inouesayuri', 'itoumarika'],
      secondRow: [
        'nagashimaseira',
        'nakamotohimeka',
        'saitouyuuri',
        'nakadakana',
        'noujouami',
      ],
      thirdRow: [
        'kawamuramahiro',
        'wadamaaya',
        'higuchihina',
        'itoukarin',
        'kawagohina',
        'hatanakaseira',
        'kitanohinako',
        'yamatorina',
        'shinuchimai',
      ],
    },
  }),
  createSongRaw({
    title: '遠回りの愛情',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Noda Akiko'],
      arrange: ['野中"まさ"雄一'],
    },
    center: ['nagashimaseira', 'sakuraireika'],
    formations: {
      firstRow: [
        'inouesayuri',
        'sakuraireika',
        'nakadakana',
        'nagashimaseira',
        'nishinonanase',
        'noujouami',
        'yamatorina',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '転がった鐘を鳴らせ!',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中山英二'],
      arrange: ['田上陽一'],
      direct: ['丸山健志'],
    },
    center: ['ikutaerika'],
    formations: {
      firstRow: [
        'ikomarina',
        'akimotomanatsu',
        'ikutaerika',
        'etoumisa',
        'saitouchiharu',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nishinonanase',
        'hashimotonanami',
        'fukagawamai',
        'hoshinominami',
        'horimiona',
        'matsuirena',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '私、起きる。',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ZERO'],
      arrange: ['Akira Sunset', 'ZERO'],
      direct: ['柳沢翔'],
    },
    center: ['ikutaerika'],
    formations: {
      firstRow: [
        'ikutaerika',
        'kawagohina',
        'kitanohinako',
        'saitouasuka',
        'saitouchiharu',
        'nakamotohimeka',
        'higuchihina',
        'hoshinominami',
        'horimiona',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: 'Tender days',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['SoichiroK', 'Nozomu.S'],
      arrange: ['Soulife'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'sakuraireika',
        'shiraishimai',
        'nishinonanase',
        'hashimotonanami',
        'fukagawamai',
        'matsumurasayuri',
      ],
    },
  }),
];
