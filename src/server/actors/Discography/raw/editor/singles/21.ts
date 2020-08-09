import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_FIRST_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ジコチューで行こう!',
  number: '21',
  release: '2018-08-08',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['ジコチューで行こう!'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['空扉'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['三角の空き地'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['自分じゃない感じ'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['心のモノローグ'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['地球が丸いなら'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['あんなに好きだったのに...'].title,
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
