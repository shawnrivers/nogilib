import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitle";
import { CdType } from "server/actors/Cds/constants/cdType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const FOURTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["ハルジオンが咲く頃"].title,
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
    MemberNameKey.SaitouYuuri,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.KitanoHinako,
    MemberNameKey.HiguchiHina,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.NakadaKana,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouJunna,
  ],
});
