import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createAlbumRaw } from 'db/src/actors/Discography/raw/creators';

export const THIRD_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '生まれてから初めて見た夢',
  number: '3',
  release: '2017-05-24',
  previousSingle: '17',
  cdTypes: ['A', 'B', 'L', 'T'],
  songs: [
    {
      title: '裸足でSummer',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'サヨナラの意味',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'インフルエンサー',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'シークレットグラフィティー',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'ブランコ',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '風船は生きている',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'スカイダイビング',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '三番目の風',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '君が扇いでくれた',
      inCdType: ['L'],
    },
    {
      title: '思い出ファースト',
      inCdType: ['L'],
    },
    {
      title: '設定温度',
      inCdType: ['L'],
    },
    {
      title: '孤独な青空',
      inCdType: ['L'],
    },
    {
      title: '僕だけの光',
      inCdType: ['L'],
    },
    {
      title: '人生を考えたくなる',
      inCdType: ['L'],
    },
    {
      title: '意外BREAK',
      inCdType: ['L'],
    },
    {
      title: 'Rewindあの日',
      inCdType: ['A'],
    },
    {
      title: 'ごめんね、スムージー',
      inCdType: ['A'],
    },
    {
      title: '醜い私',
      inCdType: ['A'],
    },
    {
      title: 'オフショアガール',
      inCdType: ['A'],
    },
    {
      title: '君に贈る花がない',
      inCdType: ['A'],
    },
    {
      title: '白米様',
      inCdType: ['A'],
    },
    {
      title: '硬い殻のように抱きしめたい',
      inCdType: ['B'],
    },
    {
      title: '満月が消えた',
      inCdType: ['B'],
    },
    {
      title: 'ワタボコリ',
      inCdType: ['B'],
    },
    {
      title: 'ないものねだり',
      inCdType: ['B'],
    },
    {
      title: 'Another Ghost',
      inCdType: ['B'],
    },
    {
      title: 'あの教室',
      inCdType: ['B'],
    },
    {
      title: '流星ディスコティック',
      inCdType: ['T'],
    },
    {
      title: '忘却と美学',
      inCdType: ['T'],
    },
    {
      title: '2度目のキスから',
      inCdType: ['T'],
    },
    {
      title: '命の真実 ミュージカル「林檎売りとカメムシ」',
      inCdType: ['T'],
    },
    {
      title: '行くあてのない僕たち',
      inCdType: ['T'],
    },
    {
      title: '当たり障りのない話',
      inCdType: ['T'],
    },
  ],
});
