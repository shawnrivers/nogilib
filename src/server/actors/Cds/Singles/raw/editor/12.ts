import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const TWELFTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["太陽ノック"].title,
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
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.KitanoHinako,
    MemberNameKey.HoriMiona,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.NakadaKana,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.TeradaRanze,
    MemberNameKey.ItouKarin,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.ItouJunna,
    MemberNameKey.HiguchiHina,
  ],
  skips: [MemberNameKey.YamazakiRena],
});
