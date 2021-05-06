import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_SEVENTH_SINGLE = createSingleRaw({
  title: 'ごめんねFingers crossed',
  number: '27',
  release: '2021-06-09',
  cdTypes: ['A'],
  songs: [
    {
      title: SONGS['ごめんねFingers crossed'].title,
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
    MemberNameKey.KuromiHaruka,
    MemberNameKey.SatouRika,
    MemberNameKey.ShibataYuna,
    MemberNameKey.HayashiRuna,
    MemberNameKey.MatsuoMiyu,
    MemberNameKey.YakuboMio,
    MemberNameKey.YumikiNao,
  ],
});
