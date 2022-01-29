import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'しあわせの保護色',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['MASANORI URA'],
      arrange: ['武藤星児'],
      direct: ['池田一真'],
    },
    center: ['shiraishimai'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'saitouasuka',
        'ikutaerika',
        'shiraishimai',
        'matsumurasayuri',
        'hoshinominami',
      ],
      secondRow: [
        'inouesayuri',
        'wadamaaya',
        'takayamakazumi',
        'akimotomanatsu',
        'higuchihina',
        'nakadakana',
      ],
      thirdRow: [
        'kakiharuka',
        'shinuchimai',
        'yamashitamizuki',
        'kuboshiori',
        'horimiona',
        'oozonomomoko',
        'endousakura',
        'iwamotorenka',
        'yodayuuki',
        'kitanohinako',
        'umezawaminami',
      ],
    },
  }),
  createSongRaw({
    title: 'サヨナラ Stay with me',
    type: 'coupling',
    creators: {
      lyrics: ['秋元康'],
      compose: ['シライシ紗トリ'],
      arrange: ['シライシ紗トリ'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'saitouasuka',
        'matsumurasayuri',
        'kuboshiori',
        'yodayuuki',
        'endousakura',
        'kakiharuka',
      ],
    },
  }),
  createSongRaw({
    title: 'じゃあね。',
    type: 'solo',
    creators: {
      lyrics: ['白石麻衣'],
      compose: ['浦島健太', 'H.Shing'],
      arrange: ['菊池博人'],
      direct: ['湯浅弘章'],
    },
    solo: 'shiraishimai',
  }),
  createSongRaw({
    title: 'アナスターシャ',
    type: 'second generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      arrange: ['中村泰輔'],
      direct: ['伊藤衆人'],
    },
    center: ['horimiona'],
    formations: {
      firstRow: ['shinuchimai', 'horimiona', 'kitanohinako'],
      secondRow: ['teradaranze', 'suzukiayane', 'watanabemiria'],
      thirdRow: ['itoujunna', 'sasakikotoko', 'yamazakirena'],
    },
  }),
  createSongRaw({
    title: '毎日がBrand new day',
    type: 'third generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['APAZZI'],
      arrange: ['APAZZI'],
      direct: ['横堀光範'],
    },
    center: ['kuboshiori'],
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
        'kuboshiori',
        'yodayuuki',
        'oozonomomoko',
      ],
      secondRow: [
        'satoukaede',
        'nakamurareno',
        'sakaguchitamami',
        'iwamotorenka',
        'mukaihazuki',
        'itouriria',
        'yoshidaayanochristie',
      ],
    },
  }),
  createSongRaw({
    title: 'I see…',
    type: 'fourth generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['youth case'],
      arrange: ['佐々木博史'],
      direct: ['神谷雄貴'],
    },
    center: ['kakiharuka'],
    formations: {
      firstRow: [
        'tamuramayu',
        'kakehashisayaka',
        'kakiharuka',
        'endousakura',
        'tsutsuiayame',
      ],
      secondRow: [
        'shibatayuna',
        'seimiyarei',
        'kanagawasaya',
        'hayakawaseira',
        'yakubomio',
        'kitagawayuri',
      ],
    },
  }),
  createSongRaw({
    title: 'ファンタスティック三色パン',
    type: 'coupling',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ジンツチハシ'],
      arrange: ['ジンツチハシ'],
    },
    formations: {
      firstRow: ['saitouasuka', 'umezawaminami', 'yamashitamizuki'],
    },
  }),
];
