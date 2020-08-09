import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWELFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '太陽ノック',
  number: '12',
  release: '2015-07-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['太陽ノック'].title,
      inCdType: ['A', 'B', 'C', 'T', 'L'],
    },
    {
      title: SONGS['もう少しの夢'].title,
      inCdType: ['A', 'B', 'C', 'T', 'L'],
    },
    {
      title: SONGS['魚たちのLOVE SONG'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['無表情'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['別れ際、もっと好きになる'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['羽根の記憶'].title,
      inCdType: ['T'],
    },
    {
      title: SONGS['制服を脱いでサヨナラを…'].title,
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
