import { DiscographyRaw } from 'server/actors/Discography/models';
import { createSingleRaw } from 'server/actors/Discography/raw/creators';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_SECOND_SINGLE: DiscographyRaw = createSingleRaw({
  title: '帰り道は遠回りしたくなる',
  number: '22',
  release: '2018-11-14',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['帰り道は遠回りしたくなる'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['キャラバンは眠らない'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['つづく'].title,
      inCdType: ['A'],
    },
    {
      title: SONGS['日常'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['告白の順番'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['ショパンの嘘つき'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['知りたいこと'].title,
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
