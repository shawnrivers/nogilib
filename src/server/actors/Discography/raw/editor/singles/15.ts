import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const FIFTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '裸足でSummer',
  number: '15',
  release: '2016-07-27',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '裸足でSummer',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '僕だけの光',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'オフショアガール',
      inCdType: ['A'],
    },
    {
      title: '命の真実 ミュージカル「林檎売りとカメムシ」',
      inCdType: ['B'],
    },
    {
      title: '白米様',
      inCdType: ['C'],
    },
    {
      title: 'シークレットグラフィティー',
      inCdType: ['D'],
    },
    {
      title: '行くあてのない僕たち',
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
