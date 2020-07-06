import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SECOND_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'おいでシャンプー',
  number: '2',
  release: '2012-05-02',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['おいでシャンプー'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['心の薬'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['偶然を言い訳にして'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['水玉模様'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['狼に口笛を'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['ハウス!'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.FukagawaMai,
    MemberNameKey.ItouMarika,
    MemberNameKey.WakatsukiYumi,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.EtouMisa,
    MemberNameKey.ItouNene,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.AndouMikumo,
    MemberNameKey.YamatoRina,
    MemberNameKey.NoujouAmi,
    MemberNameKey.WadaMaaya,
  ],
  skips: [MemberNameKey.AkimotoManatsu],
});
