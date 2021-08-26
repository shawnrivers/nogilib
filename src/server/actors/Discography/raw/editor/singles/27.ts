import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_SEVENTH_SINGLE = createSingleRaw({
  title: 'ごめんねFingers crossed',
  number: '27',
  release: '2021-06-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'ごめんねFingers crossed',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '全部　夢のまま',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '大人たちには指示されない',
      inCdType: ['A'],
    },
    {
      title: 'ざんぶざざぶん',
      inCdType: ['B'],
    },
    {
      title: 'さ～ゆ～Ready？',
      inCdType: ['C'],
    },
    {
      title: '錆びたコンパス',
      inCdType: ['D'],
    },
    {
      title: '猫舌カモミールティー',
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
