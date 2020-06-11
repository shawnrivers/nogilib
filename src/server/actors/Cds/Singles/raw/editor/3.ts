import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
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
    MemberName.HiguchiHina,
    MemberName.ItouNene,
    MemberName.SaitouAsuka,
    MemberName.EtouMisa,
    MemberName.NoujouAmi,
    MemberName.KawagoHina,
    MemberName.KawamuraMahiro,
    MemberName.KashiwaYukina,
    MemberName.YamatoRina,
    MemberName.NagashimaSeira,
    MemberName.MiyazawaSeira,
    MemberName.AndouMikumo,
    MemberName.HatanakaSeira,
    MemberName.IwaseYumiko,
    MemberName.WadaMaaya,
    MemberName.NakamotoHimeka,
    MemberName.SaitouChiharu,
  ],
  skips: [MemberName.AkimotoManatsu],
});
