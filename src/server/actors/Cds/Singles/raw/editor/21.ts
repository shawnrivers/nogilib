import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const TWENTY_FIRST_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["ジコチューで行こう!"].title,
  number: "21",
  release: "2018-08-08",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["ジコチューで行こう!"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["空扉"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["三角の空き地"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["自分じゃない感じ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["心のモノローグ"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["地球が丸いなら"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["あんなに好きだったのに..."].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.NakadaKana,
    MemberNameKey.ItouRiria,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.KitanoHinako,
    MemberNameKey.TeradaRanze,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SatouKaede,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WadaMaaya,
    MemberNameKey.KawagoHina,
    MemberNameKey.NoujouAmi,
    MemberNameKey.NakamuraReno,
    MemberNameKey.ItouKarin,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.ItouJunna,
  ],
  skips: [MemberNameKey.KuboShiori],
});
