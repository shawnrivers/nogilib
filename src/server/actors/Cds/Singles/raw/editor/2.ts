import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SECOND_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Oideshampo,
  number: "2",
  release: "2012-05-02",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["おいでシャンプー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["心の薬"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["偶然を言い訳にして"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["水玉模様"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["狼に口笛を"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ハウス!"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.FukagawaMai,
    MemberName.ItouMarika,
    MemberName.WakatsukiYumi,
    MemberName.KawagoHina,
    MemberName.KawamuraMahiro,
    MemberName.SaitouChiharu,
    MemberName.NagashimaSeira,
    MemberName.EtouMisa,
    MemberName.ItouNene,
    MemberName.SaitouAsuka,
    MemberName.NakamotoHimeka,
    MemberName.HiguchiHina,
    MemberName.KashiwaYukina,
    MemberName.AndouMikumo,
    MemberName.YamatoRina,
    MemberName.NoujouAmi,
    MemberName.WadaMaaya,
  ],
  skips: [MemberName.AkimotoManatsu],
});
