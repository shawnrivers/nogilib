import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_THIRD_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'Sing Out!',
  number: '23',
  release: '2019-05-29',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['Sing Out!'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['滑走路'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['のような存在'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['Am I Loving?'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['平行線'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['4番目の光'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['曖昧'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.NakamuraReno,
    MemberNameKey.HiguchiHina,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.EndouSakura,
    MemberNameKey.KakiHaruka,
    MemberNameKey.KakehashiSayaka,
    MemberNameKey.KanagawaSaya,
    MemberNameKey.KitagawaYuri,
    MemberNameKey.ShibataYuna,
    MemberNameKey.SeimiyaRei,
    MemberNameKey.TamuraMayu,
    MemberNameKey.TsutsuiAyame,
    MemberNameKey.HayakawaSeira,
    MemberNameKey.YakuboMio,
  ],
  skips: [MemberNameKey.YamashitaMizuki],
});
