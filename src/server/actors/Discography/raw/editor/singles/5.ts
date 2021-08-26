import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const FIFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '君の名は希望',
  number: '5',
  release: '2013-03-31',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '君の名は希望',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'シャキイズム',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'ロマンティックいか焼き',
      inCdType: ['A'],
    },
    {
      title: '13日の金曜日',
      inCdType: ['B'],
    },
    {
      title: 'でこぴん',
      inCdType: ['C'],
    },
    {
      title: 'サイコキネシスの可能性',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.ItouMarika,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.EtouMisa,
    MemberNameKey.NoujouAmi,
    MemberNameKey.IchikiRena,
    MemberNameKey.YamatoRina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.AndouMikumo,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KawagoHina,
    MemberNameKey.MiyazawaSeira,
  ],
});
