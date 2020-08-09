import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FOURTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '制服のマネキン',
  number: '4',
  release: '2012-12-19',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['制服のマネキン'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['指望遠鏡'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['やさしさなら間に合ってる'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['ここじゃないどこか'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['春のメロディー'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['渋谷ブルース'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakadaKana,
    MemberNameKey.EtouMisa,
    MemberNameKey.ItouMarika,
    MemberNameKey.KawagoHina,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouNene,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.MiyazawaSeira,
    MemberNameKey.YamatoRina,
    MemberNameKey.AndouMikumo,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SaitouChiharu,
  ],
  skips: [MemberNameKey.KashiwaYukina],
});
