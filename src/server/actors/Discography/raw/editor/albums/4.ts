import { DiscographyRaw } from 'server/actors/Discography/models';
import { createAlbumRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FOURTH_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '今が思い出になるまで',
  number: '4',
  release: '2019-04-17',
  previousSingle: '22',
  cdTypes: ['L', 'A', 'B', 'T'],
  songs: [
    {
      title: SONGS['ありがちな恋愛'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['逃げ水'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['いつかできるから今日できる'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['シンクロニシティ'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['ジコチューで行こう!'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['帰り道は遠回りしたくなる'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['アンダー'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['My rule'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['新しい世界'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['三角の空き地'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['日常'].title,
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: SONGS['もし君がいなければ'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['キスの手裏剣'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['Against'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['つづく'].title,
      inCdType: ['L'],
    },
    {
      title: SONGS['頬杖をついては眠れない'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['ぼっち党'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['僕の衝動'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['スカウトマン'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['さゆりんご募集中'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['ゴルゴンゾーラ'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['トキトキメキメキ'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['未来の答え'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['もうすぐ～ザンビ伝説～'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['キャラバンは眠らない'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['ライブ神'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['自分じゃない感じ'].title,
      inCdType: ['T'],
    },
  ],
});
