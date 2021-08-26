import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const FOURTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '制服のマネキン',
  number: '4',
  release: '2012-12-19',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '制服のマネキン',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '指望遠鏡',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'やさしさなら間に合ってる',
      inCdType: ['A'],
    },
    {
      title: 'ここじゃないどこか',
      inCdType: ['B'],
    },
    {
      title: '春のメロディー',
      inCdType: ['C'],
    },
    {
      title: '渋谷ブルース',
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
