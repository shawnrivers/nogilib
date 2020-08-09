import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SIXTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ガールズルール',
  number: '6',
  release: '2013-07-03',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['ガールズルール'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['世界で一番 孤独なLover'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['コウモリよ'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['扇風機'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['他の星から'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['人間という楽器'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.NoujouAmi,
    MemberNameKey.EtouMisa,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.ItouNene,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.IchikiRena,
    MemberNameKey.YamatoRina,
    MemberNameKey.KawagoHina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.MiyazawaSeira,
  ],
});
