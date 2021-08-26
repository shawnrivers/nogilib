import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const NINETEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'いつかできるから今日できる',
  number: '19',
  release: '2017-10-11',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'いつかできるから今日できる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '不眠症',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'まあいいか?',
      inCdType: ['A'],
    },
    {
      title: '失恋お掃除人',
      inCdType: ['B'],
    },
    {
      title: 'My rule',
      inCdType: ['C'],
    },
    {
      title: '僕の衝動',
      inCdType: ['D'],
    },
    {
      title: '新しい花粉 〜ミュージカル「見知らぬ世界」より〜',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.WatanabeMiria,
    MemberNameKey.HiguchiHina,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.SagaraIori,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouJunna,
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
});
