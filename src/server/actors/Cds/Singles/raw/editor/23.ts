import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Songs/constants";
import { SONGS } from "server/constants/songs";

export const TWENTY_THIRD_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["Sing Out!"].title,
  number: "23",
  release: "2019-05-29",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["Sing Out!"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["滑走路"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["のような存在"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["Am I Loving?"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["平行線"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["4番目の光"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["曖昧"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.NakamuraReno,
    MemberNameKey.HiguchiHina,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.EndouSakura,
    MemberNameKey.KakiHaruka,
    MemberNameKey.KakehashiSayaka,
    MemberNameKey.KanagawaSaya,
    MemberNameKey.KitagawaYuri,
    MemberNameKey.ShibataYuna,
    MemberNameKey.SeimiyaRei,
    MemberNameKey.TamuraMayu,
    MemberNameKey.TsutsuiAyame,
    MemberNameKey.HayakawaSeira,
    MemberNameKey.YakuboMio,
  ],
  skips: [MemberNameKey.YamashitaMizuki],
});
