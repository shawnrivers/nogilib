import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const NINTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '夏のFree&Easy',
  number: '9',
  release: '2014-07-09',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['夏のFree&Easy'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['何もできずにそばにいる'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['その先の出口!'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['無口なライオン'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['ここにいる理由'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['僕が行かなきゃ誰が行くんだ?'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.KawagoHina,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.ItouMarika,
    MemberNameKey.HiguchiHina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakadaKana,
    MemberNameKey.NoujouAmi,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.KitanoHinako,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.ItouNene,
    MemberNameKey.IchikiRena,
    MemberNameKey.ShinuchiMai,
  ],
  trainees: [
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.SagaraIori,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YonetokuKyouka,
    MemberNameKey.YadaRisako,
  ],
  skips: [MemberNameKey.IkutaErika],
});
