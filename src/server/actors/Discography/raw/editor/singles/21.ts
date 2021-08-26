import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_FIRST_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ジコチューで行こう!',
  number: '21',
  release: '2018-08-08',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'ジコチューで行こう!',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '空扉',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '三角の空き地',
      inCdType: ['A'],
    },
    {
      title: '自分じゃない感じ',
      inCdType: ['B'],
    },
    {
      title: '心のモノローグ',
      inCdType: ['C'],
    },
    {
      title: '地球が丸いなら',
      inCdType: ['D'],
    },
    {
      title: 'あんなに好きだったのに...',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.NakadaKana,
    MemberNameKey.ItouRiria,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.KitanoHinako,
    MemberNameKey.TeradaRanze,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SatouKaede,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WadaMaaya,
    MemberNameKey.KawagoHina,
    MemberNameKey.NoujouAmi,
    MemberNameKey.NakamuraReno,
    MemberNameKey.ItouKarin,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.ItouJunna,
  ],
  skips: [MemberNameKey.KuboShiori],
});
