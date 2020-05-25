import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SIXTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.GirlsRule,
  number: "6",
  release: "2013-07-03",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["ガールズルール"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["世界で一番 孤独なLover"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["コウモリよ"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["扇風機"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["他の星から"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["人間という楽器"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.HiguchiHina,
    MemberName.SaitouAsuka,
    MemberName.NakamotoHimeka,
    MemberName.NoujouAmi,
    MemberName.EtouMisa,
    MemberName.KawamuraMahiro,
    MemberName.ItouNene,
    MemberName.NagashimaSeira,
    MemberName.SaitouChiharu,
    MemberName.IchikiRena,
    MemberName.YamatoRina,
    MemberName.KawagoHina,
    MemberName.WadaMaaya,
    MemberName.KashiwaYukina,
    MemberName.HatanakaSeira,
    MemberName.MiyazawaSeira,
  ],
});
