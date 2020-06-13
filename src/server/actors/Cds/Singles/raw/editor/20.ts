import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const TWENTIETH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["シンクロニシティ"].title,
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
    MemberNameKey.UmezawaMinami,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.NakadaKana,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.YamazakiRena,
    MemberNameKey.ItouRiria,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.ItouKarin,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.ItouJunna,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.SatouKaede,
    MemberNameKey.NoujouAmi,
    MemberNameKey.KawagoHina,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.NakamuraReno,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SagaraIori,
  ],
  skips: [MemberNameKey.KitanoHinako],
});
