import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FOURTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Harujiongasakugoro,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "APAZZI"],
      arrange: ["Akira Sunset", "APAZZI"],
      direct: ["山戸結希"],
    },
    center: [MemberName.FukagawaMai],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.HashimotoNanami,
        MemberName.NishinoNanase,
        MemberName.FukagawaMai,
        MemberName.ShiraishiMai,
        MemberName.IkutaErika,
      ],
      secondRow: [
        MemberName.SaitouAsuka,
        MemberName.TakayamaKazumi,
        MemberName.EtouMisa,
        MemberName.AkimotoManatsu,
        MemberName.HoshinoMinami,
      ],
      thirdRow: [
        MemberName.SakuraiReika,
        MemberName.WakatsukiYumi,
        MemberName.MatsumuraSayuri,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Futoogo,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["福田貴史"],
      arrange: ["福田貴史"],
      direct: ["池田千尋"],
    },
    center: [MemberName.NakamotoHimeka],
    formations: {
      firstRow: [
        MemberName.SaitouYuuri,
        MemberName.TeradaRanze,
        MemberName.NakamotoHimeka,
        MemberName.KitanoHinako,
        MemberName.HiguchiHina,
      ],
      secondRow: [
        MemberName.ItouKarin,
        MemberName.KawagoHina,
        MemberName.NakadaKana,
        MemberName.ShinuchiMai,
        MemberName.NoujouAmi,
      ],
      thirdRow: [
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
    },
  }),
  createSongRaw({
    title: SongTitle.HarukanaruBhutan,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ツキダタダシ"],
      arrange: ["ha-j"],
    },
    center: [MemberName.IkutaErika],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.ItouMarika,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.HoriMiona,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Tsuyogarutsubomi,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["大貫和紀", "河原レオ", "高木龍一"],
      arrange: ["Carlos K."],
      direct: ["真壁幸紀"],
    },
    solo: MemberName.FukagawaMai,
  }),
  createSongRaw({
    title: SongTitle.Kyuushamen,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["FURUTA", "Yasutaka Ishio"],
      arrange: ["重永亮介"],
      direct: ["番場秀一"],
    },
    formations: {
      firstRow: [
        MemberName.ShiraishiMai,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Tsuribori,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Bush-I"],
      arrange: ["APAZZI"],
      direct: ["永田琴"],
    },
    solo: MemberName.NishinoNanase,
  }),
  createSongRaw({
    title: SongTitle.Yuuutsutofuusengamu,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["HIROTOMO", "Dr.Lilcom"],
      arrange: ["APAZZI"],
    },
    center: [MemberName.HoshinoMinami],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkomaRina,
        MemberName.InoueSayuri,
        MemberName.SakuraiReika,
        MemberName.TakayamaKazumi,
        MemberName.HoshinoMinami,
      ],
    },
  }),
];
