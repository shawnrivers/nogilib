import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWELFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '太陽ノック',
  number: '12',
  release: '2015-07-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '太陽ノック',
      inCdType: ['A', 'B', 'C', 'T', 'L'],
    },
    {
      title: 'もう少しの夢',
      inCdType: ['A', 'B', 'C', 'T', 'L'],
    },
    {
      title: '魚たちのLOVE SONG',
      inCdType: ['A'],
    },
    {
      title: '無表情',
      inCdType: ['B'],
    },
    {
      title: '別れ際、もっと好きになる',
      inCdType: ['C'],
    },
    {
      title: '羽根の記憶',
      inCdType: ['T'],
    },
    {
      title: '制服を脱いでサヨナラを…',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.KitanoHinako,
    MemberNameKey.HoriMiona,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.NakadaKana,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.TeradaRanze,
    MemberNameKey.ItouKarin,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.ItouJunna,
    MemberNameKey.HiguchiHina,
  ],
  skips: [MemberNameKey.YamazakiRena],
});
