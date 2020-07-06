import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const ELEVENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '命は美しい',
  number: '11',
  release: '2015-03-18',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['命は美しい'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['あらかじめ語られるロマンス'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['立ち直り中'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['ごめんね ずっと…'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['君は僕と会わない方がよかったのかな'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['ボーダー'].title,
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
