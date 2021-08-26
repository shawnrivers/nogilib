import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const THIRTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '今、話したい誰かがいる',
  number: '13',
  release: '2015-10-28',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '今、話したい誰かがいる',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '嫉妬の権利',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'ポピパッパパー',
      inCdType: ['A'],
    },
    {
      title: '大人への近道',
      inCdType: ['B'],
    },
    {
      title: '悲しみの忘れ方',
      inCdType: ['C'],
    },
    {
      title: '隙間',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.KitanoHinako,
    MemberNameKey.HoriMiona,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NoujouAmi,
    MemberNameKey.HiguchiHina,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.KawagoHina,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SagaraIori,
    MemberNameKey.ItouJunna,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.ItouKarin,
    MemberNameKey.WadaMaaya,
  ],
});
