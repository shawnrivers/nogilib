import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const SIXTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'サヨナラの意味',
  number: '16',
  release: '2016-11-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'サヨナラの意味',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '孤独な青空',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'あの教室',
      inCdType: ['A'],
    },
    {
      title: 'ブランコ',
      inCdType: ['B'],
    },
    {
      title: '2度目のキスから',
      inCdType: ['C'],
    },
    {
      title: '君に贈る花がない',
      inCdType: ['D'],
    },
    {
      title: 'ないものねだり',
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
