import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SEVENTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Influencer,
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
    MemberName.YamazakiRena,
    MemberName.WatanabeMiria,
    MemberName.SuzukiAyane,
    MemberName.SaitouChiharu,
    MemberName.ItouKarin,
    MemberName.NoujouAmi,
    MemberName.SagaraIori,
    MemberName.KawagoHina,
    MemberName.SasakiKotoko,
    MemberName.WadaMaaya,
    MemberName.ItouJunna,
    MemberName.KawamuraMahiro,
  ],
  trainees: [
    MemberName.ItouRiria,
    MemberName.IwamotoRenka,
    MemberName.UmezawaMinami,
    MemberName.OozonoMomoko,
    MemberName.KuboShiori,
    MemberName.SakaguchiTamami,
    MemberName.SatouKaede,
    MemberName.NakamuraReno,
    MemberName.MukaiHazuki,
    MemberName.YamashitaMizuki,
    MemberName.YoshidaAyanoChristie,
    MemberName.YodaYuuki,
  ],
  skips: [MemberName.NakamotoHimeka],
});
