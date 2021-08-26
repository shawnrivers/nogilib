import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_SECOND_SINGLE: DiscographyRaw = createSingleRaw({
  title: '帰り道は遠回りしたくなる',
  number: '22',
  release: '2018-11-14',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '帰り道は遠回りしたくなる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'キャラバンは眠らない',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'つづく',
      inCdType: ['A'],
    },
    {
      title: '日常',
      inCdType: ['B'],
    },
    {
      title: '告白の順番',
      inCdType: ['C'],
    },
    {
      title: 'ショパンの嘘つき',
      inCdType: ['D'],
    },
    {
      title: '知りたいこと',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    MemberNameKey.SuzukiAyane,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KitanoHinako,
    MemberNameKey.TeradaRanze,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.YamazakiRena,
    MemberNameKey.KuboShiori,
    MemberNameKey.NakadaKana,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.ItouJunna,
    MemberNameKey.WadaMaaya,
    MemberNameKey.NakamuraReno,
    MemberNameKey.KawagoHina,
    MemberNameKey.ItouKarin,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.YoshidaAyanoChristie,
  ],
});
