import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TWENTY_FIRST_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Jikochudeikou,
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
    MemberName.HiguchiHina,
    MemberName.NakadaKana,
    MemberName.ItouRiria,
    MemberName.YamazakiRena,
    MemberName.SakaguchiTamami,
    MemberName.KitanoHinako,
    MemberName.TeradaRanze,
    MemberName.WatanabeMiria,
    MemberName.SatouKaede,
    MemberName.YoshidaAyanoChristie,
    MemberName.WadaMaaya,
    MemberName.KawagoHina,
    MemberName.NoujouAmi,
    MemberName.NakamuraReno,
    MemberName.ItouKarin,
    MemberName.SasakiKotoko,
    MemberName.MukaiHazuki,
    MemberName.ItouJunna,
  ],
  skips: [MemberName.KuboShiori],
});
