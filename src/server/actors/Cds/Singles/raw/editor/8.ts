import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
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
    MemberNameKey.InoueSayuri,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.ItouMarika,
    MemberNameKey.HoshinoMinami,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakadaKana,
    MemberNameKey.EtouMisa,
    MemberNameKey.KawagoHina,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.ItouNene,
    MemberNameKey.IchikiRena,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.YamatoRina,
    MemberNameKey.NoujouAmi,
  ],
  trainees: [
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YonetokuKyouka,
    MemberNameKey.YadaRisako,
  ],
  skips: [MemberNameKey.SagaraIori],
});
