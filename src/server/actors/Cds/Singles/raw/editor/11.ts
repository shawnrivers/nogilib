import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const ELEVENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Inochihautsukushii,
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
    MemberName.SaitouYuuri,
    MemberName.NakamotoHimeka,
    MemberName.InoueSayuri,
    MemberName.NoujouAmi,
    MemberName.NagashimaSeira,
    MemberName.NakadaKana,
    MemberName.ShinuchiMai,
    MemberName.KawamuraMahiro,
    MemberName.KitanoHinako,
    MemberName.KawagoHina,
    MemberName.HiguchiHina,
    MemberName.ItouKarin,
    MemberName.WadaMaaya,
    MemberName.SaitouChiharu,
  ],
  trainees: [
    MemberName.ItouJunna,
    MemberName.SasakiKotoko,
    MemberName.SuzukiAyane,
    MemberName.TeradaRanze,
    MemberName.YamazakiRena,
    MemberName.WatanabeMiria,
  ],
});
