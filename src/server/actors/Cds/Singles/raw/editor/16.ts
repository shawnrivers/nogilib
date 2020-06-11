import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SIXTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Sayonaranoimi,
  number: "16",
  release: "2016-11-09",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["サヨナラの意味"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["孤独な青空"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["あの教室"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["2度目のキスから"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["君に贈る花がない"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["ないものねだり"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.KawamuraMahiro,
    MemberName.HiguchiHina,
    MemberName.TeradaRanze,
    MemberName.NakadaKana,
    MemberName.NoujouAmi,
    MemberName.SaitouYuuri,
    MemberName.YamazakiRena,
    MemberName.WatanabeMiria,
    MemberName.SuzukiAyane,
    MemberName.SaitouChiharu,
    MemberName.ItouJunna,
    MemberName.WadaMaaya,
    MemberName.ItouKarin,
    MemberName.KawagoHina,
    MemberName.SasakiKotoko,
    MemberName.SagaraIori,
  ],
});
