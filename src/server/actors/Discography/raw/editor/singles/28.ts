import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_EIGHTH_SINGLE = createSingleRaw({
  title: 'タイトル未定',
  number: '28',
  release: '2021-09-22',
  cdTypes: ['A'],
  songs: [
    {
      title: SONGS['タイトル未定'].title,
      inCdType: ['A'],
    },
  ],
  underMembers: [
    MemberNameKey.ItouRiria,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SatouKaede,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WadaMaaya,
    MemberNameKey.KakehashiSayaka,
    MemberNameKey.KanagawaSaya,
    MemberNameKey.KitagawaYuri,
    MemberNameKey.KuromiHaruka,
    MemberNameKey.SatouRika,
    MemberNameKey.ShibataYuna,
    MemberNameKey.HayashiRuna,
    MemberNameKey.MatsuoMiyu,
    MemberNameKey.YakuboMio,
    MemberNameKey.YumikiNao,
  ],
});
