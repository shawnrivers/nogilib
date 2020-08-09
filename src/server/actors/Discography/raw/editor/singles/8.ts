import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const EIGHTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '気づいたら片想い',
  number: '8',
  release: '2014-04-02',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['気づいたら片想い'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['ロマンスのスタート'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['吐息のメソッド'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['孤独兄弟'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['生まれたままで'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['ダンケシェーン'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.InoueSayuri,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.ItouMarika,
    MemberNameKey.HoshinoMinami,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakadaKana,
    MemberNameKey.EtouMisa,
    MemberNameKey.KawagoHina,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.ItouNene,
    MemberNameKey.IchikiRena,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.YamatoRina,
    MemberNameKey.NoujouAmi,
  ],
  trainees: [
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YonetokuKyouka,
    MemberNameKey.YadaRisako,
  ],
  skips: [MemberNameKey.SagaraIori],
});
