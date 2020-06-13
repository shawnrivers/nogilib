import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/actors/Cds/Singles/constants/singleTitles";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const SEVENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["バレッタ"].title,
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
    MemberNameKey.InoueSayuri,
    MemberNameKey.HoshinoMinami,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NoujouAmi,
    MemberNameKey.HiguchiHina,
    MemberNameKey.NakadaKana,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.HatanakaSeira,
    MemberNameKey.YamatoRina,
    MemberNameKey.ItouNene,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.KitanoHinako,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.TeradaRanze,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YonetokuKyouka,
    MemberNameKey.YadaRisako,
    MemberNameKey.NishikawaNanami,
  ],
  skips: [MemberNameKey.IchikiRena, MemberNameKey.SagaraIori],
});
