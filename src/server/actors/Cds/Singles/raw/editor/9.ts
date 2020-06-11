import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
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
    MemberName.KawagoHina,
    MemberName.SaitouAsuka,
    MemberName.ItouMarika,
    MemberName.HiguchiHina,
    MemberName.WadaMaaya,
    MemberName.NagashimaSeira,
    MemberName.NakadaKana,
    MemberName.NoujouAmi,
    MemberName.NakamotoHimeka,
    MemberName.KawamuraMahiro,
    MemberName.SaitouChiharu,
    MemberName.KitanoHinako,
    MemberName.HatanakaSeira,
    MemberName.ItouNene,
    MemberName.IchikiRena,
    MemberName.ShinuchiMai,
  ],
  trainees: [
    MemberName.ItouKarin,
    MemberName.ItouJunna,
    MemberName.SagaraIori,
    MemberName.SasakiKotoko,
    MemberName.SuzukiAyane,
    MemberName.TeradaRanze,
    MemberName.YamazakiRena,
    MemberName.WatanabeMiria,
    MemberName.YonetokuKyouka,
    MemberName.YadaRisako,
  ],
  skips: [MemberName.IkutaErika],
});
