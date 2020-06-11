import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const FIRST_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.GuruguruCurtain,
  number: "1",
  release: "2012-02-22",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["ぐるぐるカーテン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["左胸の勇気"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["乃木坂の詩"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["会いたかったかもしれない"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["失いたくないから"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["白い雲にのって"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.AndouMikumo,
    MemberName.IwaseYumiko,
    MemberName.ItouNene,
    MemberName.HatanakaSeira,
    MemberName.ItouMarika,
    MemberName.WadaMaaya,
    MemberName.NakamotoHimeka,
    MemberName.SaitouChiharu,
    MemberName.YamatoRina,
    MemberName.NagashimaSeira,
    MemberName.HiguchiHina,
    MemberName.KawagoHina,
    MemberName.WakatsukiYumi,
    MemberName.KashiwaYukina,
    MemberName.EtouMisa,
    MemberName.FukagawaMai,
    MemberName.MiyazawaSeira,
  ],
  skips: [MemberName.AkimotoManatsu],
});
