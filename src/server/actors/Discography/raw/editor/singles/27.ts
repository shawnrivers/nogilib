import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_SEVENTH_SINGLE = createSingleRaw({
  title: 'ごめんねFingers crossed',
  number: '27',
  release: '2021-06-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['ごめんねFingers crossed'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['全部　夢のまま'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['大人たちには指示されない'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['ざんぶざざぶん'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['さ～ゆ～Ready？'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['錆びたコンパス'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['猫舌カモミールティー'].title,
      inCdType: ['T'],
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
