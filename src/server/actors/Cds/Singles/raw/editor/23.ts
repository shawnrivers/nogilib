import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TWENTY_THIRD_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.SingOut,
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
    MemberName.ItouJunna,
    MemberName.SasakiKotoko,
    MemberName.TeradaRanze,
    MemberName.NakadaKana,
    MemberName.NakamuraReno,
    MemberName.HiguchiHina,
    MemberName.MukaiHazuki,
    MemberName.YamazakiRena,
    MemberName.YoshidaAyanoChristie,
    MemberName.WadaMaaya,
  ],
  trainees: [
    MemberName.EndouSakura,
    MemberName.KakiHaruka,
    MemberName.KakehashiSayaka,
    MemberName.KanagawaSaya,
    MemberName.KitagawaYuri,
    MemberName.ShibataYuna,
    MemberName.SeimiyaRei,
    MemberName.TamuraMayu,
    MemberName.TsutsuiAyame,
    MemberName.HayakawaSeira,
    MemberName.YakuboMio,
  ],
  skips: [MemberName.YamashitaMizuki],
});
