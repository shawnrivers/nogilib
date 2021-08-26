import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTIETH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'シンクロニシティ',
  number: '20',
  release: '2018-04-25',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'シンクロニシティ',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'Against',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '雲になればいい',
      inCdType: ['A'],
    },
    {
      title: '新しい世界',
      inCdType: ['B'],
    },
    {
      title: 'スカウトマン',
      inCdType: ['C'],
    },
    {
      title: 'トキトキメキメキ',
      inCdType: ['D'],
    },
    {
      title: '言霊砲',
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
