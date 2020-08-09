import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SIXTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'サヨナラの意味',
  number: '16',
  release: '2016-11-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['サヨナラの意味'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['孤独な青空'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['あの教室'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['ブランコ'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['2度目のキスから'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['君に贈る花がない'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['ないものねだり'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.HiguchiHina,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.ItouJunna,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SagaraIori,
  ],
});
