import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FIRST_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ぐるぐるカーテン',
  number: '1',
  release: '2012-02-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['ぐるぐるカーテン'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['左胸の勇気'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['乃木坂の詩'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['会いたかったかもしれない'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['失いたくないから'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['白い雲にのって'].title,
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
