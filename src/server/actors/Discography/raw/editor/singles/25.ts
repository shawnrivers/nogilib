import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_FIFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'しあわせの保護色',
  number: '25',
  release: '2020-03-25',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'しあわせの保護色',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'サヨナラ Stay with me',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'じゃあね。',
      inCdType: ['A'],
    },
    {
      title: 'アナスターシャ',
      inCdType: ['B'],
    },
    {
      title: '毎日がBrand new day',
      inCdType: ['C'],
    },
    {
      title: 'I see…',
      inCdType: ['D'],
    },
    {
      title: 'ファンタスティック三色パン',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.ItouRiria,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SatouKaede,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WatanabeMiria,
  ],
  trainees: [
    MemberNameKey.KakehashiSayaka,
    MemberNameKey.KanagawaSaya,
    MemberNameKey.KitagawaYuri,
    MemberNameKey.ShibataYuna,
    MemberNameKey.SeimiyaRei,
    MemberNameKey.TamuraMayu,
    MemberNameKey.HayakawaSeira,
    MemberNameKey.YakuboMio,
    MemberNameKey.TsutsuiAyame,
  ],
});
