import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const FOURTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '制服のマネキン',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['百石元'],
      direct: ['池田一真'],
    },
    center: ['ikomarina'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: ['ikutaerika', 'ikomarina', 'hoshinominami'],
      secondRow: [
        'shiraishimai',
        'hashimotonanami',
        'matsumurasayuri',
        'sakuraireika',
        'akimotomanatsu',
      ],
      thirdRow: [
        'noujouami',
        'saitouasuka',
        'wakatsukiyumi',
        'inouesayuri',
        'fukagawamai',
        'ichikirena',
        'nishinonanase',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: '春のメロディー',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['フジノタカフミ'],
      arrange: ['湯浅篤'],
      direct: ['柿本ケンサク'],
    },
    center: ['nakadakana'],
    formations: {
      firstRow: ['saitouyuuri', 'nakadakana', 'etoumisa'],
      secondRow: ['itoumarika', 'kawagohina', 'higuchihina', 'itounene'],
      thirdRow: [
        'kawamuramahiro',
        'nakamotohimeka',
        'hatanakaseira',
        'nagashimaseira',
      ],
      fourthRow: [
        'miyazawaseira',
        'yamatorina',
        'andoumikumo',
        'wadamaaya',
        'saitouchiharu',
      ],
    },
  }),
  createSongRaw({
    title: '指望遠鏡',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['北室龍馬'],
      arrange: ['木村有希'],
      direct: ['丸山健志'],
    },
    center: ['ikomarina'],
    formations: {
      firstRow: ['ikutaerika', 'ikomarina', 'hoshinominami'],
      secondRow: [
        'shiraishimai',
        'hashimotonanami',
        'matsumurasayuri',
        'sakuraireika',
        'akimotomanatsu',
      ],
      thirdRow: [
        'noujouami',
        'saitouasuka',
        'wakatsukiyumi',
        'inouesayuri',
        'fukagawamai',
        'ichikirena',
        'nishinonanase',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: 'やさしさなら間に合ってる',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['松田純一'],
      arrange: ['清水武仁'],
    },
    center: ['takayamakazumi', 'noujouami'],
    formations: {
      firstRow: [
        'ichikirena',
        'inouesayuri',
        'saitouasuka',
        'takayamakazumi',
        'nishinonanase',
        'noujouami',
        'fukagawamai',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: 'ここじゃないどこか',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['大藤史'],
      arrange: ['京田誠一'],
      direct: ['岡川太郎'],
    },
    formations: {
      firstRow: ['ikutaerika', 'ikomarina', 'hoshinominami'],
    },
  }),
  createSongRaw({
    title: '渋谷ブルース',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['佐藤嘉風'],
      arrange: ['佐藤嘉風'],
      direct: ['丸山健志'],
    },
    unit: 'WHITE HIGH',
    formations: {
      firstRow: ['shiraishimai', 'takayamakazumi'],
    },
  }),
];
