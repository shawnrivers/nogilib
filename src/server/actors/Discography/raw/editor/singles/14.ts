import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const FOURTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ハルジオンが咲く頃',
  number: '14',
  release: '2016-03-23',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: 'ハルジオンが咲く頃',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '遥かなるブータン',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '強がる蕾',
      inCdType: ['A'],
    },
    {
      title: '急斜面',
      inCdType: ['B'],
    },
    {
      title: '釣り堀',
      inCdType: ['C'],
    },
    {
      title: '不等号',
      inCdType: ['D'],
    },
    {
      title: '憂鬱と風船ガム',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.SaitouYuuri,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.KitanoHinako,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.NakadaKana,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouJunna,
  ],
});
