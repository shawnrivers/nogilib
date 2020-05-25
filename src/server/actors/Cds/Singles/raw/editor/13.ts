import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const THIRTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.ImaHanashitaidarekagairu,
  number: "13",
  release: "2015-10-28",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["今、話したい誰かがいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["ポピパッパパー"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["大人への近道"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["悲しみの忘れ方"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["隙間"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.KitanoHinako,
    MemberName.HoriMiona,
    MemberName.NakamotoHimeka,
    MemberName.TeradaRanze,
    MemberName.NakadaKana,
    MemberName.ShinuchiMai,
    MemberName.KawamuraMahiro,
    MemberName.NagashimaSeira,
    MemberName.NoujouAmi,
    MemberName.HiguchiHina,
    MemberName.SaitouChiharu,
    MemberName.SaitouYuuri,
    MemberName.KawagoHina,
    MemberName.WatanabeMiria,
    MemberName.YamazakiRena,
    MemberName.SasakiKotoko,
    MemberName.SagaraIori,
    MemberName.ItouJunna,
    MemberName.SuzukiAyane,
    MemberName.ItouKarin,
    MemberName.WadaMaaya,
  ],
});
