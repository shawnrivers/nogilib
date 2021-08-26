import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_EIGHTH_SINGLE = createSingleRaw({
  title: '君に叱られた',
  number: '28',
  release: '2021-09-22',
  cdTypes: ['A'],
  songs: [
    {
      title: '君に叱られた',
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
