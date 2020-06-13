import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const TENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Nandomenoaozoraka,
  number: "10",
  release: "2014-10-08",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["何度目の青空か?"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["遠回りの愛情"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["転がった鐘を鳴らせ!"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["私、起きる。"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["Tender days"].title,
      inCdType: [CdType.T],
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
