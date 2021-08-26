import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '何度目の青空か?',
  number: '10',
  release: '2014-10-08',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: '何度目の青空か?',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '遠回りの愛情',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '転がった鐘を鳴らせ!',
      inCdType: ['A'],
    },
    {
      title: '私、起きる。',
      inCdType: ['B'],
    },
    {
      title: 'あの日 僕は咄嗟に嘘をついた',
      inCdType: ['C'],
    },
    {
      title: 'Tender days',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.SaitouAsuka,
    MemberNameKey.InoueSayuri,
    MemberNameKey.ItouMarika,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakadaKana,
    MemberNameKey.NoujouAmi,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.WadaMaaya,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.KitanoHinako,
    MemberNameKey.YamatoRina,
    MemberNameKey.ShinuchiMai,
  ],
  trainees: [
    MemberNameKey.ItouJunna,
    MemberNameKey.SagaraIori,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
  ],
});
