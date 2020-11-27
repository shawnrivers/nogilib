import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_SIXTH_SINGLE = createSingleRaw({
  title: '僕は僕を好きになる',
  number: '26',
  release: '2021-01-27',
  cdTypes: ['A'],
  songs: [
    {
      title: SONGS['僕は僕を好きになる'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['冷たい水の中'].title,
      inCdType: ['A'],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.ItouRiria,
    MemberNameKey.KitanoHinako,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SatouKaede,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakamuraReno,
    MemberNameKey.HiguchiHina,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamazakiRena,
    MemberNameKey.YoshidaAyanoChristie,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.KakehashiSayaka,
    MemberNameKey.KanagawaSaya,
    MemberNameKey.KitagawaYuri,
    MemberNameKey.ShibataYuna,
    MemberNameKey.SeimiyaRei,
    MemberNameKey.HayakawaSeira,
    MemberNameKey.YakuboMio,
    MemberNameKey.KuromiHaruka,
    MemberNameKey.SatouRika,
    MemberNameKey.HayashiRuna,
    MemberNameKey.MatsuoMiyu,
    MemberNameKey.YumikiNao,
  ],
});
