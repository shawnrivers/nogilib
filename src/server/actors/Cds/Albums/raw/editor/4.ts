import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { createAlbumRaw } from "server/actors/Cds/Albums/raw/creator";
import { ALBUMS } from "server/actors/Cds/Albums/constants/albumTitle";
import { CdType } from "server/actors/Cds/constants/cdType";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const FOURTH_ALBUM: AlbumRaw = createAlbumRaw({
  title: ALBUMS["今が思い出になるまで"].title,
  number: "4",
  release: "2019-04-17",
  previousSingle: "22",
  cdTypes: [CdType.L, CdType.A, CdType.B, CdType.T],
  songs: [
    {
      title: SONGS["ありがちな恋愛"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["逃げ水"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["いつかできるから今日できる"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["シンクロニシティ"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["ジコチューで行こう!"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["帰り道は遠回りしたくなる"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["アンダー"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["My rule"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["新しい世界"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["三角の空き地"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["日常"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["もし君がいなければ"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["キスの手裏剣"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["Against"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["つづく"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["頬杖をついては眠れない"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["ぼっち党"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["僕の衝動"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["スカウトマン"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["さゆりんご募集中"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["ゴルゴンゾーラ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["トキトキメキメキ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["未来の答え"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["もうすぐ～ザンビ伝説～"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["キャラバンは眠らない"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["ライブ神"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["自分じゃない感じ"].title,
      inCdType: [CdType.T],
    },
  ],
});
