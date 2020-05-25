import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TWELFTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.TaiyouKnock,
  number: "12",
  release: "2015-07-22",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["太陽ノック"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T, CdType.L],
    },
    {
      title: SONGS["もう少しの夢"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T, CdType.L],
    },
    {
      title: SONGS["魚たちのLOVE SONG"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["無表情"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["別れ際、もっと好きになる"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["羽根の記憶"].title,
      inCdType: [CdType.T],
    },
    {
      title: SONGS["制服を脱いでサヨナラを…"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.KawamuraMahiro,
    MemberName.KitanoHinako,
    MemberName.HoriMiona,
    MemberName.NakamotoHimeka,
    MemberName.NakadaKana,
    MemberName.SagaraIori,
    MemberName.KawagoHina,
    MemberName.NagashimaSeira,
    MemberName.NoujouAmi,
    MemberName.SaitouChiharu,
    MemberName.WadaMaaya,
    MemberName.SasakiKotoko,
    MemberName.TeradaRanze,
    MemberName.ItouKarin,
    MemberName.WatanabeMiria,
    MemberName.SuzukiAyane,
    MemberName.ItouJunna,
    MemberName.HiguchiHina,
  ],
  skips: [MemberName.YamazakiRena],
});
