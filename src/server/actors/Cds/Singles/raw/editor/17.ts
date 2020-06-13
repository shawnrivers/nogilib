import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitle";
import { CdType } from "server/actors/Cds/constants/cdType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const SEVENTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["インフルエンサー"].title,
  number: "17",
  release: "2017-03-22",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["インフルエンサー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["人生を考えたくなる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["意外BREAK"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["Another Ghost"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["風船は生きている"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["三番目の風"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["当たり障りのない話"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.ItouKarin,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouJunna,
    MemberNameKey.KawamuraMahiro,
  ],
  trainees: [
    MemberNameKey.ItouRiria,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.UmezawaMinami,
    MemberNameKey.OozonoMomoko,
    MemberNameKey.KuboShiori,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SatouKaede,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamashitaMizuki,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.YodaYuuki,
  ],
  skips: [MemberNameKey.NakamotoHimeka],
});
