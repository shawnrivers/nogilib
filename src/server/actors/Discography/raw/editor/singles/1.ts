import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const FIRST_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ぐるぐるカーテン',
  number: '1',
  release: '2012-02-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'ぐるぐるカーテン',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '左胸の勇気',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '乃木坂の詩',
      inCdType: ['A'],
    },
    {
      title: '会いたかったかもしれない',
      inCdType: ['B'],
    },
    {
      title: '失いたくないから',
      inCdType: ['C'],
    },
    {
      title: '白い雲にのって',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.AndouMikumo,
    MemberNameKey.IwaseYumiko,
    MemberNameKey.ItouNene,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.ItouMarika,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.YamatoRina,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KawagoHina,
    MemberNameKey.WakatsukiYumi,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.EtouMisa,
    MemberNameKey.FukagawaMai,
    MemberNameKey.MiyazawaSeira,
  ],
  skips: [MemberNameKey.AkimotoManatsu],
});
