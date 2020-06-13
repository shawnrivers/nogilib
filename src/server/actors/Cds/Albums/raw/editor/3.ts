import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { createAlbumRaw } from "server/actors/Cds/Albums/raw/creator";
import { ALBUMS } from "server/actors/Cds/Albums/constants/albumTitles";
import { CdType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const THIRD_ALBUM: AlbumRaw = createAlbumRaw({
  title: ALBUMS["生まれてから初めて見た夢"].title,
  number: "3",
  release: "2017-05-24",
  previousSingle: "17",
  cdTypes: [CdType.A, CdType.B, CdType.L, CdType.T],
  songs: [
    {
      title: SONGS["裸足でSummer"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["サヨナラの意味"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["インフルエンサー"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["シークレットグラフィティー"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["風船は生きている"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["スカイダイビング"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["三番目の風"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      title: SONGS["君が扇いでくれた"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["思い出ファースト"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["設定温度"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["孤独な青空"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["僕だけの光"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["人生を考えたくなる"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["意外BREAK"].title,
      inCdType: [CdType.L],
    },
    {
      title: SONGS["Rewindあの日"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["ごめんね、スムージー"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["醜い私"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["オフショアガール"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["君に贈る花がない"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["白米様"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["硬い殻のように抱きしめたい"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["満月が消えた"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["ワタボコリ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["ないものねだり"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["Another Ghost"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["あの教室"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["流星ディスコティック"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["忘却と美学"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["2度目のキスから"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["行くあてのない僕たち"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["当たり障りのない話"].title,
      inCdType: [CdType.T],
    },
  ],
});
