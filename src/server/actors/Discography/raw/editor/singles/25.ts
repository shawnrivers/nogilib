import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_FIFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'しあわせの保護色',
  number: '25',
  release: '2020-03-25',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['しあわせの保護色'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['サヨナラ Stay with me'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['じゃあね。'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['アナスターシャ'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['毎日がBrand new day'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['I see…'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['ファンタスティック三色パン'].title,
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
