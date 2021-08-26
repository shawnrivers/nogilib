import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const SIXTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ガールズルール',
  number: '6',
  release: '2013-07-03',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'ガールズルール',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '世界で一番 孤独なLover',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'コウモリよ',
      inCdType: ['A'],
    },
    {
      title: '扇風機',
      inCdType: ['B'],
    },
    {
      title: '他の星から',
      inCdType: ['C'],
    },
    {
      title: '人間という楽器',
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
