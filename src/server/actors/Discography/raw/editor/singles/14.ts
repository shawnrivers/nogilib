import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FOURTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ハルジオンが咲く頃',
  number: '14',
  release: '2016-03-23',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['ハルジオンが咲く頃'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['遥かなるブータン'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['強がる蕾'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['急斜面'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['釣り堀'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['不等号'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['憂鬱と風船ガム'].title,
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
