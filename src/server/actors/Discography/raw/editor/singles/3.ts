import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const THIRD_SINGLE: DiscographyRaw = createSingleRaw({
  title: '走れ!Bicycle',
  number: '3',
  release: '2012-08-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['走れ!Bicycle'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['せっかちなかたつむり'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['涙がまだ悲しみだった頃'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['人はなぜ走るのか?'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['音が出ないギター'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['海流の島よ'].title,
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
