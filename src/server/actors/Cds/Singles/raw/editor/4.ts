import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const FOURTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.SeifukunoMannequin,
  number: "4",
  release: "2012-12-19",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["制服のマネキン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["指望遠鏡"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["やさしさなら間に合ってる"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["ここじゃないどこか"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["春のメロディー"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["渋谷ブルース"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakadaKana,
    MemberNameKey.EtouMisa,
    MemberNameKey.ItouMarika,
    MemberNameKey.KawagoHina,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouNene,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.MiyazawaSeira,
    MemberNameKey.YamatoRina,
    MemberNameKey.AndouMikumo,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SaitouChiharu,
  ],
  skips: [MemberNameKey.KashiwaYukina],
});
