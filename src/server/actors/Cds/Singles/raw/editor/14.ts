import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const FOURTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Harujiongasakugoro,
  number: "14",
  release: "2016-03-23",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["ハルジオンが咲く頃"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["遥かなるブータン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["強がる蕾"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["急斜面"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["釣り堀"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["不等号"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["憂鬱と風船ガム"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.SaitouYuuri,
    MemberName.TeradaRanze,
    MemberName.NakamotoHimeka,
    MemberName.KitanoHinako,
    MemberName.HiguchiHina,
    MemberName.ItouKarin,
    MemberName.KawagoHina,
    MemberName.NakadaKana,
    MemberName.ShinuchiMai,
    MemberName.NoujouAmi,
    MemberName.SaitouChiharu,
    MemberName.WatanabeMiria,
    MemberName.SuzukiAyane,
    MemberName.YamazakiRena,
    MemberName.SasakiKotoko,
    MemberName.SagaraIori,
    MemberName.KawagoHina,
    MemberName.WadaMaaya,
    MemberName.ItouJunna,
  ],
});
