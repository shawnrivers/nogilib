import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_SECOND_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '帰り道は遠回りしたくなる',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['渡邉俊彦'],
      arrange: ['渡邉俊彦', '早川博隆'],
      direct: ['関和亮'],
    },
    center: ['nishinonanase'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
        'saitouasuka',
        'nishinonanase',
        'shiraishimai',
        'ikutaerika',
        'yodayuuki',
      ],
      secondRow: [
        'etoumisa',
        'akimotomanatsu',
        'horimiona',
        'wakatsukiyumi',
        'hoshinominami',
        'sakuraireika',
        'matsumurasayuri',
      ],
      thirdRow: [
        'saitouyuuri',
        'inouesayuri',
        'satoukaede',
        'oozonomomoko',
        'itouriria',
        'shinuchimai',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: '日常',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', '野口大志'],
      arrange: ['Akira Sunset', '野口大志'],
      direct: ['今泉力哉'],
    },
    center: ['kitanohinako'],
    formations: {
      firstRow: [
        'suzukiayane',
        'higuchihina',
        'kitanohinako',
        'teradaranze',
        'iwamotorenka',
      ],
      secondRow: [
        'sakaguchitamami',
        'yamazakirena',
        'kuboshiori',
        'nakadakana',
        'watanabemiria',
        'mukaihazuki',
      ],
      thirdRow: [
        'itoujunna',
        'wadamaaya',
        'nakamurareno',
        'kawagohina',
        'itoukarin',
        'sasakikotoko',
        'yoshidaayanochristie',
      ],
    },
  }),
  createSongRaw({
    title: 'キャラバンは眠らない',
    type: 'coupling',
    creators: {
      lyrics: ['秋元康'],
      compose: ['CottON'],
      arrange: ['CottON'],
      direct: ['横堀光範'],
    },
    center: ['saitouasuka'],
    formations: {
      firstRow: [
        'hoshinominami',
        'yodayuuki',
        'saitouasuka',
        'yamashitamizuki',
        'horimiona',
      ],
      secondRow: [
        'watanabemiria',
        'kitanohinako',
        'umezawaminami',
        'teradaranze',
        'itouriria',
      ],
      thirdRow: [
        'iwamotorenka',
        'higuchihina',
        'kuboshiori',
        'oozonomomoko',
        'suzukiayane',
        'satoukaede',
      ],
    },
  }),
  createSongRaw({
    title: 'つづく',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['若田部誠'],
      arrange: ['若田部誠'],
      direct: ['湯浅弘章'],
    },
    solo: 'nishinonanase',
  }),
  createSongRaw({
    title: '告白の順番',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['安部純'],
      arrange: ['安部純'],
      direct: ['荒船泰廣'],
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
  createSongRaw({
    title: 'ショパンの嘘つき',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['山本加津彦'],
      arrange: ['山本加津彦'],
    },
    formations: {
      firstRow: ['ikutaerika', 'shiraishimai', 'matsumurasayuri'],
    },
  }),
  createSongRaw({
    title: '知りたいこと',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['佐々木裕'],
      arrange: ['佐々木裕'],
    },
    formations: {
      firstRow: [
        'saitouasuka',
        'hoshinominami',
        'yamashitamizuki',
        'yodayuuki',
      ],
    },
  }),
];
