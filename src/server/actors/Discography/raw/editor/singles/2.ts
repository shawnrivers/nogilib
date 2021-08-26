import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const SECOND_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'おいでシャンプー',
  number: '2',
  release: '2012-05-02',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'おいでシャンプー',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '心の薬',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '偶然を言い訳にして',
      inCdType: ['A'],
    },
    {
      title: '水玉模様',
      inCdType: ['B'],
    },
    {
      title: '狼に口笛を',
      inCdType: ['C'],
    },
    {
      title: 'ハウス!',
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
