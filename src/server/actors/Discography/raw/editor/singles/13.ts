import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const THIRTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '今、話したい誰かがいる',
  number: '13',
  release: '2015-10-28',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['今、話したい誰かがいる'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['嫉妬の権利'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['ポピパッパパー'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['大人への近道'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['悲しみの忘れ方'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['隙間'].title,
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
