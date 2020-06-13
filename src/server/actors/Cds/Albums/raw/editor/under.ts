import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { createAlbumRaw } from "server/actors/Cds/Albums/raw/creator";
import { ALBUMS } from "server/actors/Cds/Albums/constants/albumTitles";
import { CdType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const UNDER_ALBUM: AlbumRaw = createAlbumRaw({
  title: ALBUMS["僕だけの君〜Under Super Best〜"].title,
  number: "U",
  release: "2018-01-10",
  previousSingle: "19",
  cdTypes: [CdType.L1, CdType.L2, CdType.T],
  songs: [
    {
      title: SONGS["左胸の勇気"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["狼に口笛を"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["涙がまだ悲しみだった頃"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["春のメロディー"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["13日の金曜日"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["扇風機"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["初恋の人を今でも"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["生まれたままで"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["ここにいる理由"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["別れ際、もっと好きになる"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["不等号"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["シークレットグラフィティー"].title,
      inCdType: [CdType.L1],
    },
    {
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["風船は生きている"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["アンダー"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["My rule"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["自由の彼方"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["欲望のリインカーネーション"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["君が扇いでくれた"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["自分のこと"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["自惚れビーチ"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["その女"].title,
      inCdType: [CdType.L2],
    },
    {
      title: SONGS["誰よりそばにいたい"].title,
      inCdType: [CdType.L2],
    },
  ],
});
