import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const TWENTY_FOURTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '夜明けまで強がらなくてもいい',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田裕介'],
      arrange: ['APAZZI'],
      direct: ['丸山健志'],
    },
    center: ['endousakura'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'horimiona',
        'kakiharuka',
        'endousakura',
        'tsutsuiayame',
        'saitouasuka',
      ],
      secondRow: [
        'yamashitamizuki',
        'ikutaerika',
        'shiraishimai',
        'matsumurasayuri',
        'sakuraireika',
        'yodayuuki',
      ],
      thirdRow: [
        'umezawaminami',
        'kitanohinako',
        'akimotomanatsu',
        'kuboshiori',
        'takayamakazumi',
        'hoshinominami',
        'shinuchimai',
      ],
    },
  }),
  createSongRaw({
    title: '僕のこと、知ってる?',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      arrange: ['中村泰輔'],
    },
    center: ['saitouasuka'],
    formations: {
      firstRow: [
        'oozonomomoko',
        'horimiona',
        'ikutaerika',
        'saitouasuka',
        'shiraishimai',
        'takayamakazumi',
        'yodayuuki',
      ],
      secondRow: [
        'umezawaminami',
        'kitanohinako',
        'akimotomanatsu',
        'kuboshiori',
        'matsumurasayuri',
        'hoshinominami',
        'sakuraireika',
      ],
      thirdRow: [
        'inouesayuri',
        'satoukaede',
        'suzukiayane',
        'iwamotorenka',
        'sakaguchitamami',
        'watanabemiria',
        'itouriria',
        'shinuchimai',
      ],
    },
  }),
  createSongRaw({
    title: '路面電車の街',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['山岸聖太'],
    },
    formations: {
      firstRow: ['saitouasuka', 'horimiona', 'yamashitamizuki'],
    },
  }),
  createSongRaw({
    title: '図書室の君へ',
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['若田部誠'],
      direct: ['伊藤衆人'],
    },
    center: ['kakehashisayaka'],
    formations: {
      firstRow: [
        'endousakura',
        'tamuramayu',
        'kakehashisayaka',
        'kanagawasaya',
        'tsutsuiayame',
      ],
      secondRow: [
        'kakiharuka',
        'seimiyarei',
        'yakubomio',
        'kitagawayuri',
        'shibatayuna',
        'hayakawaseira',
      ],
    },
  }),
  createSongRaw({
    title: '時々 思い出してください',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['頃安祐良'],
    },
    solo: 'sakuraireika',
  }),

  createSongRaw({
    title: '～Do my best～じゃ意味はない',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['浦島健太', 'APAZZI'],
      arrange: ['浦島健太', 'APAZZI'],
      direct: ['maxilla'],
    },
    center: ['iwamotorenka'],
    formations: {
      firstRow: [
        'suzukiayane',
        'higuchihina',
        'iwamotorenka',
        'watanabemiria',
        'teradaranze',
      ],
      secondRow: [
        'nakadakana',
        'sakaguchitamami',
        'itouriria',
        'yamazakirena',
        'satoukaede',
      ],
      thirdRow: [
        'nakamurareno',
        'wadamaaya',
        'mukaihazuki',
        'yoshidaayanochristie',
        'sasakikotoko',
        'itoujunna',
      ],
    },
  }),
  createSongRaw({
    title: '僕の思い込み',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['野中“まさ”雄一'],
    },
    center: ['endousakura'],
    formations: {
      firstRow: [
        'horimiona',
        'kakiharuka',
        'endousakura',
        'tsutsuiayame',
        'saitouasuka',
      ],
      secondRow: [
        'yamashitamizuki',
        'ikutaerika',
        'shiraishimai',
        'matsumurasayuri',
        'sakuraireika',
        'yodayuuki',
      ],
      thirdRow: [
        'umezawaminami',
        'kitanohinako',
        'akimotomanatsu',
        'kuboshiori',
        'takayamakazumi',
        'hoshinominami',
        'shinuchimai',
      ],
    },
  }),
];
