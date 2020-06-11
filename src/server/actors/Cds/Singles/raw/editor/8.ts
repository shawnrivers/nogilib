import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const EIGHTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Kiduitarakataomoi,
  number: "8",
  release: "2014-04-02",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["気づいたら片想い"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["ロマンスのスタート"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["吐息のメソッド"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["孤独兄弟"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["生まれたままで"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ダンケシェーン"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.InoueSayuri,
    MemberName.SaitouAsuka,
    MemberName.ItouMarika,
    MemberName.HoshinoMinami,
    MemberName.SaitouYuuri,
    MemberName.NagashimaSeira,
    MemberName.NakadaKana,
    MemberName.EtouMisa,
    MemberName.KawagoHina,
    MemberName.NakamotoHimeka,
    MemberName.SaitouChiharu,
    MemberName.ItouNene,
    MemberName.IchikiRena,
    MemberName.ShinuchiMai,
    MemberName.HatanakaSeira,
    MemberName.YamatoRina,
    MemberName.NoujouAmi,
  ],
  trainees: [
    MemberName.ItouKarin,
    MemberName.ItouJunna,
    MemberName.SasakiKotoko,
    MemberName.SuzukiAyane,
    MemberName.TeradaRanze,
    MemberName.YamazakiRena,
    MemberName.WatanabeMiria,
    MemberName.YonetokuKyouka,
    MemberName.YadaRisako,
  ],
  skips: [MemberName.SagaraIori],
});
