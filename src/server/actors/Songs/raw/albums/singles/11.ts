import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const ELEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Inochihautsukushii,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Hiroki Sagawa"],
      arrange: ["Hiroki Sagawa"],
      direct: ["井上強"],
    },
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.MatsuiRena,
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.IkutaErika,
      ],
      secondRow: [
        MemberName.WakatsukiYumi,
        MemberName.AkimotoManatsu,
        MemberName.IkomaRina,
        MemberName.SakuraiReika,
        MemberName.FukagawaMai,
      ],
      thirdRow: [
        MemberName.MatsumuraSayuri,
        MemberName.SagaraIori,
        MemberName.SaitouAsuka,
        MemberName.ItouMarika,
        MemberName.HoriMiona,
        MemberName.HoshinoMinami,
        MemberName.EtouMisa,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kimihabokutotoawanaihougayokattanokana,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "ha-j"],
      arrange: ["Akira Sunset", "ha-j"],
      direct: ["山田篤宏"],
    },
    center: [MemberName.NakamotoHimeka],
    formations: {
      firstRow: [
        MemberName.SaitouYuuri,
        MemberName.NakamotoHimeka,
        MemberName.InoueSayuri,
      ],
      secondRow: [
        MemberName.NoujouAmi,
        MemberName.NagashimaSeira,
        MemberName.NakadaKana,
        MemberName.ShinuchiMai,
      ],
      thirdRow: [
        MemberName.KawamuraMahiro,
        MemberName.KitanoHinako,
        MemberName.KawagoHina,
        MemberName.HiguchiHina,
        MemberName.ItouKarin,
        MemberName.WadaMaaya,
        MemberName.SaitouChiharu,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.ArakajimekatarareruRomance,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["SoichiroK", "Nozomu.S"],
      arrange: ["SoichiroK", "Nozomu.S"],
      direct: ["岡川太郎"],
    },
    center: [MemberName.SaitouAsuka, MemberName.HoshinoMinami],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.SaitouAsuka,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Tachinaorichuu,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["福田貴史"],
      arrange: ["TATOO"],
      direct: ["湯浅弘章"],
    },
    center: [MemberName.ShiraishiMai],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.EtouMisa,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.GomenneZutto,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山田智和"],
      arrange: ["住谷翔平"],
      direct: ["山戸結希"],
    },
    solo: MemberName.NishinoNanase,
  }),
  createSongRaw({
    title: SongTitle.Border,
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中土智博"],
      arrange: ["中土智博"],
    },
    center: [MemberName.TeradaRanze],
    formations: {
      firstRow: [
        MemberName.ItouJunna,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
      ],
    },
  }),
];
