import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const SEVENTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'インフルエンサー',
  number: '17',
  release: '2017-03-22',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'インフルエンサー',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '人生を考えたくなる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '意外BREAK',
      inCdType: ['A'],
    },
    {
      title: 'Another Ghost',
      inCdType: ['B'],
    },
    {
      title: '風船は生きている',
      inCdType: ['C'],
    },
    {
      title: '三番目の風',
      inCdType: ['D'],
    },
    {
      title: '当たり障りのない話',
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
