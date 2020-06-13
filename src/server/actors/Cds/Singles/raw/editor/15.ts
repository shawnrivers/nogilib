import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const FIFTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["裸足でSummer"].title,
  number: "15",
  release: "2016-07-27",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["裸足でSummer"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["僕だけの光"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["オフショアガール"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["白米様"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["シークレットグラフィティー"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["行くあてのない僕たち"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.TeradaRanze,
    MemberNameKey.ItouMarika,
    MemberNameKey.HiguchiHina,
    MemberNameKey.InoueSayuri,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.NakadaKana,
    MemberNameKey.NoujouAmi,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.YamazakiRena,
    MemberNameKey.ItouJunna,
    MemberNameKey.KawagoHina,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SagaraIori,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.ItouKarin,
  ],
});
