import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTIETH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'シンクロニシティ',
  number: '20',
  release: '2018-04-25',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['シンクロニシティ'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['Against'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['雲になればいい'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['新しい世界'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['スカウトマン'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['トキトキメキメキ'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['言霊砲'].title,
      inCdType: ['T'],
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
