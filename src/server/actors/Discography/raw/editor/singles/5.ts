import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FIFTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '君の名は希望',
  number: '5',
  release: '2013-03-31',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['君の名は希望'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['シャキイズム'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['ロマンティックいか焼き'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['13日の金曜日'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['でこぴん'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['サイコキネシスの可能性'].title,
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
