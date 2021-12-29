import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const ELEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '命は美しい',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Hiroki Sagawa'],
      arrange: ['Hiroki Sagawa'],
      direct: ['井上強'],
    },
    center: ['nishinonanase'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'matsuirena',
        'shiraishimai',
        'nishinonanase',
        'hashimotonanami',
        'ikutaerika',
      ],
      secondRow: [
        'wakatsukiyumi',
        'akimotomanatsu',
        'ikomarina',
        'sakuraireika',
        'fukagawamai',
      ],
      thirdRow: [
        'matsumurasayuri',
        'sagaraiori',
        'saitouasuka',
        'itoumarika',
        'horimiona',
        'hoshinominami',
        'etoumisa',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: '君は僕と会わない方がよかったのかな',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ha-j'],
      arrange: ['Akira Sunset', 'ha-j'],
      direct: ['山田篤宏'],
    },
    center: ['nakamotohimeka'],
    formations: {
      firstRow: ['saitouyuuri', 'nakamotohimeka', 'inouesayuri'],
      secondRow: ['noujouami', 'nagashimaseira', 'nakadakana', 'shinuchimai'],
      thirdRow: [
        'kawamuramahiro',
        'kitanohinako',
        'kawagohina',
        'higuchihina',
        'itoukarin',
        'wadamaaya',
        'saitouchiharu',
      ],
    },
  }),
  createSongRaw({
    title: 'あらかじめ語られるロマンス',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['SoichiroK', 'Nozomu.S'],
      arrange: ['SoichiroK', 'Nozomu.S'],
      direct: ['岡川太郎'],
    },
    center: ['saitouasuka', 'hoshinominami'],
    formations: {
      firstRow: [
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'saitouasuka',
        'hoshinominami',
        'horimiona',
      ],
    },
  }),
  createSongRaw({
    title: '立ち直り中',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['福田貴史'],
      arrange: ['TATOO'],
      direct: ['湯浅弘章'],
    },
    center: ['shiraishimai'],
    formations: {
      firstRow: [
        'akimotomanatsu',
        'etoumisa',
        'shiraishimai',
        'takayamakazumi',
        'hashimotonanami',
        'fukagawamai',
        'matsumurasayuri',
      ],
    },
  }),
  createSongRaw({
    title: 'ごめんね ずっと…',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田智和'],
      arrange: ['住谷翔平'],
      direct: ['山戸結希'],
    },
    solo: 'nishinonanase',
  }),
  createSongRaw({
    title: 'ボーダー',
    type: 'second generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
    },
    center: ['teradaranze'],
    formations: {
      firstRow: [
        'itoujunna',
        'sasakikotoko',
        'suzukiayane',
        'teradaranze',
        'yamazakirena',
        'watanabemiria',
      ],
    },
  }),
];
