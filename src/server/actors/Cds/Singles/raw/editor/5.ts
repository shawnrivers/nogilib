import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitle";
import { CdType } from "server/actors/Cds/constants/cdType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const FIFTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["君の名は希望"].title,
  number: "5",
  release: "2013-03-31",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["君の名は希望"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["シャキイズム"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["ロマンティックいか焼き"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["13日の金曜日"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["でこぴん"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["サイコキネシスの可能性"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.ItouMarika,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.EtouMisa,
    MemberNameKey.NoujouAmi,
    MemberNameKey.IchikiRena,
    MemberNameKey.YamatoRina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.AndouMikumo,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KawagoHina,
    MemberNameKey.MiyazawaSeira,
  ],
});
