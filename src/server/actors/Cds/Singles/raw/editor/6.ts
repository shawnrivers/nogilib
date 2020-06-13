import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const SIXTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["ガールズルール"].title,
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
    MemberNameKey.HiguchiHina,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.NoujouAmi,
    MemberNameKey.EtouMisa,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.ItouNene,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.IchikiRena,
    MemberNameKey.YamatoRina,
    MemberNameKey.KawagoHina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.MiyazawaSeira,
  ],
});
