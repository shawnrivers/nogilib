import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SEVENTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'インフルエンサー',
  number: '17',
  release: '2017-03-22',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['インフルエンサー'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['人生を考えたくなる'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['意外BREAK'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['Another Ghost'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['風船は生きている'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['三番目の風'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['当たり障りのない話'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.ItouKarin,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouJunna,
    MemberNameKey.KawamuraMahiro,
  ],
  trainees: [
    MemberNameKey.ItouRiria,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.UmezawaMinami,
    MemberNameKey.OozonoMomoko,
    MemberNameKey.KuboShiori,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SatouKaede,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamashitaMizuki,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.YodaYuuki,
  ],
  skips: [MemberNameKey.NakamotoHimeka],
});
