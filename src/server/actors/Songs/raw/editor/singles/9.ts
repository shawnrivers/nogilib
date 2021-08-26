import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

import { SongType } from 'server/actors/Songs/constants/songType';

export const NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '夏のFree&Easy',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['井上トモノリ'],
      arrange: ['橋本幸太'],
      direct: ['丸山健志'],
    },
    center: ['nishinonanase'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'matsuirena',
        'shiraishimai',
        'nishinonanase',
        'hashimotonanami',
        'matsumurasayuri',
      ],
      secondRow: [
        'wakatsukiyumi',
        'akimotomanatsu',
        'sakuraireika',
        'fukagawamai',
        'ikomarina',
      ],
      thirdRow: [
        'etoumisa',
        'inouesayuri',
        'saitouyuuri',
        'hoshinominami',
        'yamatorina',
        'horimiona',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: 'ここにいる理由',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['長谷川湊'],
      arrange: ['Carlos K.'],
      direct: ['近藤大介'],
    },
    center: ['itoumarika'],
    formations: {
      firstRow: [
        'kawagohina',
        'saitouasuka',
        'itoumarika',
        'higuchihina',
        'wadamaaya',
      ],
      secondRow: [
        'nagashimaseira',
        'nakadakana',
        'noujouami',
        'nakamotohimeka',
        'kawamuramahiro',
      ],
      thirdRow: [
        'saitouchiharu',
        'kitanohinako',
        'hatanakaseira',
        'itounene',
        'ichikirena',
        'shinuchimai',
      ],
    },
  }),
  createSongRaw({
    title: '何もできずにそばにいる',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['角野寿和'],
      arrange: ['京田誠一'],
    },
    center: ['nishinonanase'],
    formations: {
      firstRow: [
        'matsuirena',
        'shiraishimai',
        'nishinonanase',
        'hashimotonanami',
        'matsumurasayuri',
      ],
      secondRow: [
        'wakatsukiyumi',
        'akimotomanatsu',
        'sakuraireika',
        'fukagawamai',
        'ikomarina',
      ],
      thirdRow: [
        'etoumisa',
        'inouesayuri',
        'saitouyuuri',
        'hoshinominami',
        'yamatorina',
        'horimiona',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: 'その先の出口!',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Carlos K.'],
      arrange: ['Carlos K.'],
      direct: ['中村太洸'],
    },
    center: ['shiraishimai'],
    formations: {
      firstRow: [
        'akimotomanatsu',
        'etoumisa',
        'shiraishimai',
        'takayamakazumi',
        'hashimotonanami',
        'matsuirena',
        'matsumurasayuri',
        'fukagawamai',
        'yamatorina',
      ],
    },
  }),
  createSongRaw({
    title: '無口なライオン',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Shusui', 'ヒロイズム'],
      arrange: ['Shusui', 'ヒロイズム'],
      direct: ['湯浅弘章'],
    },
    center: ['nishinonanase'],
    formations: {
      firstRow: [
        'ikomarina',
        'inouesayuri',
        'saitouyuuri',
        'sakuraireika',
        'nishinonanase',
        'hoshinominami',
        'horimiona',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '僕が行かなきゃ誰が行くんだ?',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
    },
    center: ['nishinonanase'],
    formations: {
      firstRow: [
        'itoumarika',
        'inouesayuri',
        'saitouyuuri',
        'sakuraireika',
        'nakadakana',
        'nishinonanase',
        'wakatsukiyumi',
      ],
    },
  }),
];
