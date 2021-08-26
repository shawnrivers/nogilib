import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const EIGHTEENTH_SINGLE: DiscographyRaw = createSingleRaw({
  title: '逃げ水',
  number: '18',
  release: '2017-08-09',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '逃げ水',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '女は一人じゃ眠れない',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'ひと夏の長さより…',
      inCdType: ['A'],
    },
    {
      title: '泣いたっていいじゃないか?',
      inCdType: ['B'],
    },
    {
      title: 'アンダー',
      inCdType: ['C'],
    },
    {
      title: 'ライブ神',
      inCdType: ['D'],
    },
    {
      title: '未来の答え',
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
