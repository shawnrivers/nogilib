import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const THIRD_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.HashireBicycle,
  number: "3",
  release: "2012-08-22",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["走れ!Bicycle"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["せっかちなかたつむり"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["涙がまだ悲しみだった頃"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["人はなぜ走るのか?"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["音が出ないギター"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["海流の島よ"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouNene,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.EtouMisa,
    MemberNameKey.NoujouAmi,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.YamatoRina,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.MiyazawaSeira,
    MemberNameKey.AndouMikumo,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.IwaseYumiko,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
  ],
  skips: [MemberNameKey.AkimotoManatsu],
});
