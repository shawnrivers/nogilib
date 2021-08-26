import { createSingleRaw } from 'server/actors/Discography/raw/creators';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_SIXTH_SINGLE = createSingleRaw({
  title: '僕は僕を好きになる',
  number: '26',
  release: '2021-01-27',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '僕は僕を好きになる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '明日がある理由',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'Wilderness world',
      inCdType: ['A'],
    },
    {
      title: '口ほどにもないKISS',
      inCdType: ['B'],
    },
    {
      title: '冷たい水の中',
      inCdType: ['C'],
    },
    {
      title: 'Out of the blue',
      inCdType: ['D'],
    },
    {
      title: '友情ピアス',
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
