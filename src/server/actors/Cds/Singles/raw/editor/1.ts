import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitle";
import { CdType } from "server/actors/Cds/constants/cdType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const FIRST_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["ぐるぐるカーテン"].title,
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
    MemberNameKey.AndouMikumo,
    MemberNameKey.IwaseYumiko,
    MemberNameKey.ItouNene,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.ItouMarika,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.YamatoRina,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KawagoHina,
    MemberNameKey.WakatsukiYumi,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.EtouMisa,
    MemberNameKey.FukagawaMai,
    MemberNameKey.MiyazawaSeira,
  ],
  skips: [MemberNameKey.AkimotoManatsu],
});
