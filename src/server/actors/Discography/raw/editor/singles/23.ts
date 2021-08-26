import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_THIRD_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'Sing Out!',
  number: '23',
  release: '2019-05-29',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'Sing Out!',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '滑走路',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'のような存在',
      inCdType: ['A'],
    },
    {
      title: 'Am I Loving?',
      inCdType: ['B'],
    },
    {
      title: '平行線',
      inCdType: ['C'],
    },
    {
      title: '4番目の光',
      inCdType: ['D'],
    },
    {
      title: '曖昧',
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
