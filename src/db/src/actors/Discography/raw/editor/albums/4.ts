import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createAlbumRaw } from 'db/src/actors/Discography/raw/creators';

export const FOURTH_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '今が思い出になるまで',
  number: '4',
  release: '2019-04-17',
  previousSingle: '22',
  cdTypes: ['L', 'A', 'B', 'T'],
  songs: [
    {
      title: 'ありがちな恋愛',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '逃げ水',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'いつかできるから今日できる',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'シンクロニシティ',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'ジコチューで行こう!',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '帰り道は遠回りしたくなる',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'アンダー',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'My rule',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '新しい世界',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '三角の空き地',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: '日常',
      inCdType: ['L', 'A', 'B', 'T'],
    },
    {
      title: 'もし君がいなければ',
      inCdType: ['L'],
    },
    {
      title: 'キスの手裏剣',
      inCdType: ['L'],
    },
    {
      title: 'Against',
      inCdType: ['L'],
    },
    {
      title: 'つづく',
      inCdType: ['L'],
    },
    {
      title: '頬杖をついては眠れない',
      inCdType: ['A'],
    },
    {
      title: 'ぼっち党',
      inCdType: ['A'],
    },
    {
      title: '僕の衝動',
      inCdType: ['A'],
    },
    {
      title: 'スカウトマン',
      inCdType: ['A'],
    },
    {
      title: 'さゆりんご募集中',
      inCdType: ['B'],
    },
    {
      title: 'ゴルゴンゾーラ',
      inCdType: ['B'],
    },
    {
      title: 'トキトキメキメキ',
      inCdType: ['B'],
    },
    {
      title: '未来の答え',
      inCdType: ['B'],
    },
    {
      title: 'もうすぐ～ザンビ伝説～',
      inCdType: ['T'],
    },
    {
      title: 'キャラバンは眠らない',
      inCdType: ['T'],
    },
    {
      title: 'ライブ神',
      inCdType: ['T'],
    },
    {
      title: '自分じゃない感じ',
      inCdType: ['T'],
    },
  ],
});
