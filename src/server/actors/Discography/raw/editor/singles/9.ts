import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const NINTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '夏のFree&Easy',
  number: '9',
  release: '2014-07-09',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '夏のFree&Easy',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '何もできずにそばにいる',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'その先の出口!',
      inCdType: ['A'],
    },
    {
      title: '無口なライオン',
      inCdType: ['B'],
    },
    {
      title: 'ここにいる理由',
      inCdType: ['C'],
    },
    {
      title: '僕が行かなきゃ誰が行くんだ?',
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
