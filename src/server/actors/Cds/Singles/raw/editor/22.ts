import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TWENTY_SECOND_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Kaerimichihatoomawarishitakunaru,
  number: "22",
  release: "2018-11-14",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["帰り道は遠回りしたくなる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["キャラバンは眠らない"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["つづく"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["日常"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["告白の順番"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ショパンの嘘つき"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["知りたいこと"].title,
      inCdType: [CdType.T],
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
