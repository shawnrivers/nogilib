import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const FOURTH_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'ありがちな恋愛',
    type: 'lead',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['野中"まさ"雄一'],
    },
    center: ['shiraishimai', 'saitouasuka'],
    formations: {
      firstRow: [
        'shiraishimai',
        'saitouasuka',
        'akimotomanatsu',
        'ikutaerika',
        'itouriria',
        'inouesayuri',
        'umezawaminami',
        'oozonomomoko',
        'saitouyuuri',
        'sakuraireika',
        'satoukaede',
        'shinuchimai',
        'takayamakazumi',
        'hoshinominami',
        'horimiona',
        'matsumurasayuri',
        'yamashitamizuki',
        'yodayuuki',
      ],
    },
  }),
  createSongRaw({
    title: 'もし君がいなければ',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
      direct: [],
    },
    solo: 'etoumisa',
  }),
  createSongRaw({
    title: 'キスの手裏剣',
    type: 'fourth generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田智和'],
      arrange: ['住谷翔平'],
    },
    center: ['endousakura'],
    formations: {
      firstRow: [
        'tamuramayu',
        'kakehashisayaka',
        'endousakura',
        'tsutsuiayame',
        'kakiharuka',
      ],
      secondRow: [
        'hayakawaseira',
        'kitagawayuri',
        'seimiyarei',
        'shibatayuna',
        'yakubomio',
        'kanagawasaya',
      ],
    },
  }),
  createSongRaw({
    title: '頬杖をついては眠れない',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Super Mahirock'],
      arrange: ['Huge M'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'saitouyuuri',
        'shiraishimai',
        'shinuchimai',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: 'ぼっち党',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['庄司裕'],
      arrange: ['庄司裕'],
    },
    formations: {
      firstRow: ['ikutaerika', 'kuboshiori', 'sakuraireika'],
    },
  }),
  createSongRaw({
    title: 'さゆりんご募集中',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['浦島健太', '菊池博人'],
      arrange: ['浦島健太', '菊池博人'],
    },
    unit: 'さゆりんご軍団',
    formations: {
      firstRow: ['matsumurasayuri', 'itoukarin', 'sasakikotoko', 'teradaranze'],
    },
  }),
  createSongRaw({
    title: 'ゴルゴンゾーラ',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['BASEMINT'],
      arrange: ['BASEMINT'],
    },
    formations: {
      firstRow: ['kitanohinako', 'horimiona', 'watanabemiria'],
    },
  }),
  createSongRaw({
    title: 'もうすぐ～ザンビ伝説～',
    type: 'special',
    creators: {
      lyrics: ['秋元康'],
      compose: ['渡辺剛'],
      arrange: ['渡辺剛'],
    },
    center: ['saitouasuka'],
    formations: {
      firstRow: [
        'saitouasuka',
        'akimotomanatsu',
        'itoujunna',
        'itouriria',
        'iwamotorenka',
        'umezawaminami',
        'oozonomomoko',
        'kuboshiori',
        'sakaguchitamami',
        'satoukaede',
        'shinuchimai',
        'suzukiayane',
        'teradaranze',
        'nakamurareno',
        'hoshinominami',
        'horimiona',
        'mukaihazuki',
        'yamashitamizuki',
        'yoshidaayanochristie',
        'yodayuuki',
        'watanabemiria',
      ],
    },
  }),
];
