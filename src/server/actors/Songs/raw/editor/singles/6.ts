import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const SIXTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'ガールズルール',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['後藤康二'],
      arrange: ['後藤康二'],
      direct: ['柳沢翔'],
    },
    center: ['shiraishimai'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: ['matsumurasayuri', 'shiraishimai', 'hashimotonanami'],
      secondRow: [
        'sakuraireika',
        'ikutaerika',
        'ikomarina',
        'nishinonanase',
        'takayamakazumi',
      ],
      thirdRow: [
        'itoumarika',
        'inouesayuri',
        'nakadakana',
        'wakatsukiyumi',
        'hoshinominami',
        'akimotomanatsu',
        'fukagawamai',
        'saitouyuuri',
      ],
    },
  }),
  createSongRaw({
    title: '扇風機',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['角野寿和'],
      arrange: ['野村陽一郎'],
      direct: ['池田一真'],
    },
    center: ['saitouasuka'],
    formations: {
      firstRow: ['higuchihina', 'saitouasuka', 'nakamotohimeka'],
      secondRow: ['noujouami', 'etoumisa', 'kawamuramahiro'],
      thirdRow: ['itounene', 'nagashimaseira', 'saitouchiharu', 'ichikirena'],
      fourthRow: [
        'yamatorina',
        'kawagohina',
        'wadamaaya',
        'kashiwayukina',
        'hatanakaseira',
        'miyazawaseira',
      ],
    },
  }),
  createSongRaw({
    title: '世界で一番 孤独なLover',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['河原嶺旭'],
      arrange: ['百石元'],
      direct: ['丸山健志'],
    },
    center: ['shiraishimai'],
    formations: {
      firstRow: ['matsumurasayuri', 'shiraishimai', 'hashimotonanami'],
      secondRow: [
        'sakuraireika',
        'ikutaerika',
        'ikomarina',
        'nishinonanase',
        'takayamakazumi',
      ],
      thirdRow: [
        'itoumarika',
        'inouesayuri',
        'nakadakana',
        'wakatsukiyumi',
        'hoshinominami',
        'akimotomanatsu',
        'fukagawamai',
        'saitouyuuri',
      ],
    },
  }),
  createSongRaw({
    title: 'コウモリよ',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['南田健吾'],
      arrange: ['高梨康治'],
    },
    formations: {
      firstRow: [
        'shiraishimai',
        'nakamotohimeka',
        'noujouami',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '他の星から',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Sugaya Bros.', '松村PONY'],
      arrange: ['Sugaya Bros.'],
      direct: ['岡川太郎'],
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
  createSongRaw({
    title: '人間という楽器',
    type: SongType.FirstGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['鐘撞行孝'],
      arrange: ['TATOO'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'ichikirena',
        'itounene',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'kashiwayukina',
        'kawagohina',
        'kawamuramahiro',
        'saitouasuka',
        'saitouchiharu',
        'saitouyuuri',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakadakana',
        'nakamotohimeka',
        'nagashimaseira',
        'nishinonanase',
        'noujouami',
        'hashimotonanami',
        'hatanakaseira',
        'higuchihina',
        'fukagawamai',
        'hoshinominami',
        'matsumurasayuri',
        'miyazawaseira',
        'yamatorina',
        'wakatsukiyumi',
        'wadamaaya',
      ],
    },
  }),
];
