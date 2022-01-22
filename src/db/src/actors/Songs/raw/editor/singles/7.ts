import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const SEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'バレッタ',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['サイトウヨシヒロ'],
      arrange: ['若田部誠'],
      direct: ['江湖広二'],
    },
    center: ['horimiona'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'nishinonanase',
        'shiraishimai',
        'horimiona',
        'hashimotonanami',
        'matsumurasayuri',
      ],
      secondRow: ['sakuraireika', 'ikutaerika', 'ikomarina', 'wakatsukiyumi'],
      thirdRow: [
        'itoumarika',
        'etoumisa',
        'saitouasuka',
        'akimotomanatsu',
        'fukagawamai',
        'nakamotohimeka',
        'kawagohina',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: '初恋の人を今でも',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['田所貴司'],
    },
    center: ['hoshinominami'],
    formations: {
      firstRow: ['inouesayuri', 'hoshinominami', 'saitouyuuri'],
      secondRow: [
        'noujouami',
        'higuchihina',
        'nakadakana',
        'nagashimaseira',
        'kawamuramahiro',
      ],
      thirdRow: [
        'saitouchiharu',
        'hatanakaseira',
        'yamatorina',
        'itounene',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: '月の大きさ',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['大久保拓朗'],
    },
    center: ['horimiona'],
    formations: {
      firstRow: [
        'nishinonanase',
        'shiraishimai',
        'horimiona',
        'hashimotonanami',
        'matsumurasayuri',
      ],
      secondRow: ['sakuraireika', 'ikutaerika', 'ikomarina', 'wakatsukiyumi'],
      thirdRow: [
        'itoumarika',
        'etoumisa',
        'saitouasuka',
        'akimotomanatsu',
        'fukagawamai',
        'nakamotohimeka',
        'kawagohina',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: '私のために 誰かのために',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
    },
    center: ['shiraishimai'],
    formations: {
      firstRow: [
        'etoumisa',
        'kawamuramahiro',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: 'そんなバカな…',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset'],
      arrange: ['Akira Sunset'],
      direct: ['丸山健志'],
    },
    center: ['horimiona'],
    formations: {
      firstRow: [
        'horimiona',
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'kawagohina',
        'saitouasuka',
        'saitouyuuri',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakadakana',
        'nakamotohimeka',
        'nishinonanase',
        'hashimotonanami',
        'higuchihina',
        'fukagawamai',
        'hoshinominami',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: 'やさしさとは',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
    },
    center: ['hashimotonanami'],
    formations: {
      firstRow: [
        'ikutaerika',
        'nakamotohimeka',
        'nishinonanase',
        'noujouami',
        'hashimotonanami',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
];