import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SEVENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'バレッタ',
  number: '7',
  release: '2013-11-27',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['バレッタ'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['月の大きさ'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['私のために 誰かのために'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['そんなバカな…'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['初恋の人を今でも'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['やさしさとは'].title,
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
