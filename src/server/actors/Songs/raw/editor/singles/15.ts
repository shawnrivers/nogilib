import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const FIFTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '裸足でSummer',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['福森秀敏'],
      arrange: ['APAZZI'],
      direct: ['丸山健志'],
    },
    center: ['saitouasuka'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'hashimotonanami',
        'nishinonanase',
        'saitouasuka',
        'shiraishimai',
        'ikutaerika',
      ],
      secondRow: [
        'takayamakazumi',
        'etoumisa',
        'matsumurasayuri',
        'akimotomanatsu',
        'sakuraireika',
      ],
      thirdRow: [
        'kitanohinako',
        'hoshinominami',
        'wakatsukiyumi',
        'ikomarina',
        'horimiona',
        'nakamotohimeka',
      ],
    },
  }),
  createSongRaw({
    title: 'シークレットグラフィティー',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['ツキダタダシ'],
      arrange: ['ツキダタダシ'],
      direct: ['山岸聖太'],
    },
    center: ['higuchihina'],
    formations: {
      firstRow: [
        'teradaranze',
        'itoumarika',
        'higuchihina',
        'inouesayuri',
        'watanabemiria',
      ],
      secondRow: [
        'saitouchiharu',
        'saitouyuuri',
        'shinuchimai',
        'nakadakana',
        'noujouami',
      ],
      thirdRow: [
        'kawamuramahiro',
        'yamazakirena',
        'itoujunna',
        'kawagohina',
        'suzukiayane',
        'wadamaaya',
        'sagaraiori',
        'sasakikotoko',
        'itoukarin',
      ],
    },
  }),
  createSongRaw({
    title: '僕だけの光',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Hiro Hoashi'],
      arrange: ['Hiro Hoashi'],
    },
    center: ['saitouasuka'],
    formations: {
      firstRow: [
        'saitouasuka',
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'etoumisa',
        'kitanohinako',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakamotohimeka',
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
    title: 'オフショアガール',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ha-j'],
      arrange: ['Akira Sunset', 'ha-j'],
      direct: ['井上強'],
    },
    solo: 'shiraishimai',
  }),
  createSongRaw({
    title: '命の真実 ミュージカル「林檎売りとカメムシ」',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['NA.ZU.NA'],
      arrange: ['NA.ZU.NA'],
      direct: ['中村太洸'],
    },
    solo: 'ikutaerika',
  }),
  createSongRaw({
    title: '白米様',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Ruby'],
      arrange: ['あらケン'],
      direct: ['伊藤衆人'],
    },
    unit: 'さゆりんご軍団',
    formations: {
      firstRow: ['matsumurasayuri'],
      secondRow: ['sasakikotoko', 'itoukarin', 'teradaranze'],
    },
  }),
  createSongRaw({
    title: '行くあてのない僕たち',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['大橋莉子'],
      arrange: ['佐々木裕'],
    },
    formations: {
      firstRow: ['itoumarika', 'inouesayuri'],
    },
  }),
];
