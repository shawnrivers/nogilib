import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SEVENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Valletta,
  number: "7",
  release: "2013-11-27",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["バレッタ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["月の大きさ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["私のために 誰かのために"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["そんなバカな…"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["初恋の人を今でも"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["やさしさとは"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberName.InoueSayuri,
    MemberName.HoshinoMinami,
    MemberName.SaitouYuuri,
    MemberName.NoujouAmi,
    MemberName.HiguchiHina,
    MemberName.NakadaKana,
    MemberName.NagashimaSeira,
    MemberName.KawamuraMahiro,
    MemberName.SaitouChiharu,
    MemberName.HatanakaSeira,
    MemberName.YamatoRina,
    MemberName.ItouNene,
    MemberName.WadaMaaya,
  ],
  trainees: [
    MemberName.ItouKarin,
    MemberName.ItouJunna,
    MemberName.KitanoHinako,
    MemberName.SasakiKotoko,
    MemberName.ShinuchiMai,
    MemberName.SuzukiAyane,
    MemberName.TeradaRanze,
    MemberName.YamazakiRena,
    MemberName.WatanabeMiria,
    MemberName.YonetokuKyouka,
    MemberName.YadaRisako,
    MemberName.NishikawaNanami,
  ],
  skips: [MemberName.IchikiRena, MemberName.SagaraIori],
});
