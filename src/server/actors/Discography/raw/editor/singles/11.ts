import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const ELEVENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '命は美しい',
  number: '11',
  release: '2015-03-18',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '命は美しい',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: 'あらかじめ語られるロマンス',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '立ち直り中',
      inCdType: ['A'],
    },
    {
      title: 'ごめんね ずっと…',
      inCdType: ['B'],
    },
    {
      title: '君は僕と会わない方がよかったのかな',
      inCdType: ['C'],
    },
    {
      title: 'ボーダー',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.InoueSayuri,
    MemberNameKey.NoujouAmi,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakadaKana,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.KitanoHinako,
    MemberNameKey.KawagoHina,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouKarin,
    MemberNameKey.WadaMaaya,
    MemberNameKey.SaitouChiharu,
  ],
  trainees: [
    MemberNameKey.ItouJunna,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
  ],
});
