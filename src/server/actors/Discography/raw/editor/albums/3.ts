import { DiscographyRaw } from 'server/actors/Discography/models';
import { createAlbumRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const THIRD_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '生まれてから初めて見た夢',
  number: '3',
  release: '2017-05-24',
  previousSingle: '17',
  cdTypes: ['A', 'B', 'L', 'T'],
  songs: [
    {
      title: SONGS['裸足でSummer'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['サヨナラの意味'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['インフルエンサー'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['シークレットグラフィティー'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['ブランコ'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['風船は生きている'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['スカイダイビング'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['三番目の風'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['君が扇いでくれた'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['思い出ファースト'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['設定温度'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['孤独な青空'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['僕だけの光'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['人生を考えたくなる'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['意外BREAK'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['Rewindあの日'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['ごめんね、スムージー'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['醜い私'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['オフショアガール'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['君に贈る花がない'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['白米様'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['硬い殻のように抱きしめたい'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['満月が消えた'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['ワタボコリ'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['ないものねだり'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['Another Ghost'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['あの教室'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['流星ディスコティック'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['忘却と美学'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['2度目のキスから'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['命の真実 ミュージカル「林檎売りとカメムシ」'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['行くあてのない僕たち'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['当たり障りのない話'].title,
      inCdType: ['T'],
    },
  ],
});
