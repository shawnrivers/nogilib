import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const NINETEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["いつかできるから今日できる"].title,
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
    MemberNameKey.WatanabeMiria,
    MemberNameKey.HiguchiHina,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.SagaraIori,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouJunna,
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
});
