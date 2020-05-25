import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const FIFTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.HadashideSummer,
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
    MemberName.TeradaRanze,
    MemberName.ItouMarika,
    MemberName.HiguchiHina,
    MemberName.InoueSayuri,
    MemberName.WatanabeMiria,
    MemberName.SaitouChiharu,
    MemberName.SaitouYuuri,
    MemberName.ShinuchiMai,
    MemberName.NakadaKana,
    MemberName.NoujouAmi,
    MemberName.KawamuraMahiro,
    MemberName.YamazakiRena,
    MemberName.ItouJunna,
    MemberName.KawagoHina,
    MemberName.SuzukiAyane,
    MemberName.WadaMaaya,
    MemberName.SagaraIori,
    MemberName.SasakiKotoko,
    MemberName.ItouKarin,
  ],
});
