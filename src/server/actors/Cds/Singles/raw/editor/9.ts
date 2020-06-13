import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const NINTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.NatsunoFreeAndEasy,
  number: "9",
  release: "2014-07-09",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["夏のFree&Easy"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["何もできずにそばにいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["その先の出口!"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["無口なライオン"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["ここにいる理由"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["僕が行かなきゃ誰が行くんだ?"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.KawagoHina,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.ItouMarika,
    MemberNameKey.HiguchiHina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakadaKana,
    MemberNameKey.NoujouAmi,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.KitanoHinako,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.ItouNene,
    MemberNameKey.IchikiRena,
    MemberNameKey.ShinuchiMai,
  ],
  trainees: [
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.SagaraIori,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YonetokuKyouka,
    MemberNameKey.YadaRisako,
  ],
  skips: [MemberNameKey.IkutaErika],
});
