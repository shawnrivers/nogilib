import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TWENTIETH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Synchronicity,
  number: "20",
  release: "2018-04-25",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["シンクロニシティ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["Against"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["雲になればいい"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["新しい世界"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["スカウトマン"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["トキトキメキメキ"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["言霊砲"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.UmezawaMinami,
    MemberName.WatanabeMiria,
    MemberName.NakadaKana,
    MemberName.SuzukiAyane,
    MemberName.SaitouYuuri,
    MemberName.YamazakiRena,
    MemberName.ItouRiria,
    MemberName.MukaiHazuki,
    MemberName.ItouKarin,
    MemberName.IwamotoRenka,
    MemberName.ItouJunna,
    MemberName.SakaguchiTamami,
    MemberName.SaitouChiharu,
    MemberName.SatouKaede,
    MemberName.NoujouAmi,
    MemberName.KawagoHina,
    MemberName.YoshidaAyanoChristie,
    MemberName.SasakiKotoko,
    MemberName.NakamuraReno,
    MemberName.WadaMaaya,
    MemberName.SagaraIori,
  ],
  skips: [MemberName.KitanoHinako],
});
