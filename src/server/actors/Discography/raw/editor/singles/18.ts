import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const EIGHTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '逃げ水',
  number: '18',
  release: '2017-08-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['逃げ水'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['女は一人じゃ眠れない'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['ひと夏の長さより…'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['泣いたっていいじゃないか?'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['アンダー'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['ライブ神'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['未来の答え'].title,
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.KitanoHinako,
    MemberNameKey.TeradaRanze,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakadaKana,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.ItouRiria,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.UmezawaMinami,
    MemberNameKey.KuboShiori,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SatouKaede,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamashitaMizuki,
    MemberNameKey.YoshidaAyanoChristie,
  ],
});
