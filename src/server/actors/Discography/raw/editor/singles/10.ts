import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '何度目の青空か?',
  number: '10',
  release: '2014-10-08',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: SONGS['何度目の青空か?'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['遠回りの愛情'].title,
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: SONGS['転がった鐘を鳴らせ!'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['私、起きる。'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['あの日 僕は咄嗟に嘘をついた'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['Tender days'].title,
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
