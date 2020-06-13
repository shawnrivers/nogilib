import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Songs/constants";
import { SONGS } from "server/constants/songs";

export const TWENTY_FOURTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["夜明けまで強がらなくてもいい"].title,
  number: "24",
  release: "2019-09-04",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["夜明けまで強がらなくてもいい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["僕のこと、知ってる?"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["路面電車の街"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["図書室の君へ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["時々 思い出してください"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["～Do my best～じゃ意味はない"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["僕の思い込み"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.ItouRiria,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SatouKaede,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.NakamuraReno,
    MemberNameKey.HiguchiHina,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.KakehashiSayaka,
    MemberNameKey.KanagawaSaya,
    MemberNameKey.KitagawaYuri,
    MemberNameKey.ShibataYuna,
    MemberNameKey.SeimiyaRei,
    MemberNameKey.TamuraMayu,
    MemberNameKey.HayakawaSeira,
    MemberNameKey.YakuboMio,
  ],
  skips: [MemberNameKey.InoueSayuri, MemberNameKey.OozonoMomoko],
});
