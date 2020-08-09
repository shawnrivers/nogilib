import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const NINETEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'いつかできるから今日できる',
  number: '19',
  release: '2017-10-11',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['いつかできるから今日できる'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['不眠症'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['まあいいか?'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['失恋お掃除人'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['My rule'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['僕の衝動'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['新しい花粉 〜ミュージカル「見知らぬ世界」より〜'].title,
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
