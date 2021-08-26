import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const THIRD_SINGLE: DiscographyRaw = createSingleRaw({
  title: '走れ!Bicycle',
  number: '3',
  release: '2012-08-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '走れ!Bicycle',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'せっかちなかたつむり',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '涙がまだ悲しみだった頃',
      inCdType: ['A'],
    },
    {
      title: '人はなぜ走るのか?',
      inCdType: ['B'],
    },
    {
      title: '音が出ないギター',
      inCdType: ['C'],
    },
    {
      title: '海流の島よ',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouNene,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.EtouMisa,
    MemberNameKey.NoujouAmi,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.YamatoRina,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.MiyazawaSeira,
    MemberNameKey.AndouMikumo,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.IwaseYumiko,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
  ],
  skips: [MemberNameKey.AkimotoManatsu],
});
