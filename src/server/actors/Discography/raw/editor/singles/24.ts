import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_FOURTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '夜明けまで強がらなくてもいい',
  number: '24',
  release: '2019-09-04',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '夜明けまで強がらなくてもいい',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '僕のこと、知ってる?',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '路面電車の街',
      inCdType: ['A'],
    },
    {
      title: '図書室の君へ',
      inCdType: ['B'],
    },
    {
      title: '時々 思い出してください',
      inCdType: ['C'],
    },
    {
      title: '～Do my best～じゃ意味はない',
      inCdType: ['D'],
    },
    {
      title: '僕の思い込み',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.ItouJunna,
    MemberNameKey.ItouRiria,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SatouKaede,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
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
    MemberNameKey.TamuraMayu,
    MemberNameKey.HayakawaSeira,
    MemberNameKey.YakuboMio,
  ],
  skips: [MemberNameKey.InoueSayuri, MemberNameKey.OozonoMomoko],
});
