import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FIFTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '裸足でSummer',
  number: '15',
  release: '2016-07-27',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['裸足でSummer'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['僕だけの光'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['オフショアガール'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['命の真実 ミュージカル「林檎売りとカメムシ」'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['白米様'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['シークレットグラフィティー'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['行くあてのない僕たち'].title,
      inCdType: ['T'],
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
