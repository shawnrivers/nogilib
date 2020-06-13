import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { createAlbumRaw } from "server/actors/Cds/Albums/raw/creator";
import { ALBUMS } from "server/actors/Cds/Albums/constants/albumTitles";
import { CdType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const SECOND_ALBUM: AlbumRaw = createAlbumRaw({
  title: ALBUMS["それぞれの椅子"].title,
  number: "2",
  release: "2016-05-25",
  previousSingle: "14",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["命は美しい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["太陽ノック"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["今、話したい誰かがいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["きっかけ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["太陽に口説かれて"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["欲望のリインカーネーション"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["悲しみの忘れ方"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["空気感"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["光合成希望"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["無表情"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["あらかじめ語られるロマンス"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["隙間"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["急斜面"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["羽根の記憶"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      title: SONGS["乃木坂の詩"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["Threefold choice"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["低体温のキス"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["遥かなるブータン"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["ポピパッパパー"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["制服を脱いでサヨナラを…"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["憂鬱と風船ガム"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["立ち直り中"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["失恋したら、顔を洗え!"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["かき氷の片想い"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["大人への近道"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["別れ際、もっと好きになる"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["不等号"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["環状六号線"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["口約束"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["ロマンティックいか焼き"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["ハウス!"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["そんなバカな…"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["シャキイズム"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["ロマンスのスタート"].title,
      inCdType: [CdType.D],
    },
  ],
});
