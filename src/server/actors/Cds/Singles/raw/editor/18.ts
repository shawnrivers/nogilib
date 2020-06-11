import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const EIGHTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Nigemizu,
  number: "18",
  release: "2017-08-09",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["逃げ水"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["女は一人じゃ眠れない"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["ひと夏の長さより…"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["泣いたっていいじゃないか?"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["アンダー"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ライブ神"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["未来の答え"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.HiguchiHina,
    MemberName.WatanabeMiria,
    MemberName.NakamotoHimeka,
    MemberName.KitanoHinako,
    MemberName.TeradaRanze,
    MemberName.SaitouYuuri,
    MemberName.NakadaKana,
    MemberName.YamazakiRena,
    MemberName.SuzukiAyane,
    MemberName.ItouKarin,
    MemberName.ItouJunna,
    MemberName.SaitouChiharu,
    MemberName.NoujouAmi,
    MemberName.SagaraIori,
    MemberName.KawagoHina,
    MemberName.KawamuraMahiro,
    MemberName.SasakiKotoko,
    MemberName.WadaMaaya,
  ],
  trainees: [
    MemberName.ItouRiria,
    MemberName.IwamotoRenka,
    MemberName.UmezawaMinami,
    MemberName.KuboShiori,
    MemberName.SakaguchiTamami,
    MemberName.SatouKaede,
    MemberName.NakamuraReno,
    MemberName.MukaiHazuki,
    MemberName.YamashitaMizuki,
    MemberName.YoshidaAyanoChristie,
  ],
});
