import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const NINETEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Itsukadekirukarakyoudekiru,
  number: "19",
  release: "2017-10-11",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["いつかできるから今日できる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["不眠症"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["まあいいか?"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["失恋お掃除人"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["My rule"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["僕の衝動"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.WatanabeMiria,
    MemberName.HiguchiHina,
    MemberName.TeradaRanze,
    MemberName.NoujouAmi,
    MemberName.SuzukiAyane,
    MemberName.YamazakiRena,
    MemberName.SaitouChiharu,
    MemberName.SagaraIori,
    MemberName.SasakiKotoko,
    MemberName.ItouKarin,
    MemberName.KawagoHina,
    MemberName.KawamuraMahiro,
    MemberName.WadaMaaya,
    MemberName.ItouJunna,
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
});
