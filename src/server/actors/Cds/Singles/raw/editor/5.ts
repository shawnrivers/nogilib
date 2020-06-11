import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const FIFTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Kiminonahakibou,
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
    MemberName.ItouMarika,
    MemberName.SaitouYuuri,
    MemberName.SaitouAsuka,
    MemberName.KawamuraMahiro,
    MemberName.EtouMisa,
    MemberName.NoujouAmi,
    MemberName.IchikiRena,
    MemberName.YamatoRina,
    MemberName.WadaMaaya,
    MemberName.NakamotoHimeka,
    MemberName.SaitouChiharu,
    MemberName.KashiwaYukina,
    MemberName.AndouMikumo,
    MemberName.HatanakaSeira,
    MemberName.HiguchiHina,
    MemberName.KawagoHina,
    MemberName.MiyazawaSeira,
  ],
});
