import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TWENTY_FIFTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Shiawasenohogoshoku,
  number: "25",
  release: "2020-03-25",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["しあわせの保護色"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["サヨナラ Stay with me"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["じゃあね。"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["アナスターシャ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["毎日がBrand new day"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["I see…"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["ファンタスティック三色パン"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.ItouRiria,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SatouKaede,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WatanabeMiria,
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
    MemberNameKey.TsutsuiAyame,
  ],
});
