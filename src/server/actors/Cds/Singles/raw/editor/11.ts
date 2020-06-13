import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitle";
import { CdType } from "server/actors/Cds/constants/cdType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const ELEVENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["命は美しい"].title,
  number: "11",
  release: "2015-03-18",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["命は美しい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["あらかじめ語られるロマンス"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["立ち直り中"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["ごめんね ずっと…"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ボーダー"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.InoueSayuri,
    MemberNameKey.NoujouAmi,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakadaKana,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.KitanoHinako,
    MemberNameKey.KawagoHina,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouKarin,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SaitouChiharu,
  ],
  trainees: [
    MemberNameKey.ItouJunna,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
  ],
});
