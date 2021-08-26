import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const SEVENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'バレッタ',
  number: '7',
  release: '2013-11-27',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'バレッタ',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '月の大きさ',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '私のために 誰かのために',
      inCdType: ['A'],
    },
    {
      title: 'そんなバカな…',
      inCdType: ['B'],
    },
    {
      title: '初恋の人を今でも',
      inCdType: ['C'],
    },
    {
      title: 'やさしさとは',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.InoueSayuri,
    MemberNameKey.HoshinoMinami,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NoujouAmi,
    MemberNameKey.HiguchiHina,
    MemberNameKey.NakadaKana,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.YamatoRina,
    MemberNameKey.ItouNene,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.KitanoHinako,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YonetokuKyouka,
    MemberNameKey.YadaRisako,
    MemberNameKey.NishikawaNanami,
  ],
  skips: [MemberNameKey.IchikiRena, MemberNameKey.SagaraIori],
});
