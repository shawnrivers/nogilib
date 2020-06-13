import { MemberNameKey } from "server/actors/Songs/constants";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { SONGS } from "server/constants/songs";

export const FOURTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["ハルジオンが咲く頃"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "APAZZI"],
      arrange: ["Akira Sunset", "APAZZI"],
      direct: ["山戸結希"],
    },
    center: [MemberNameKey.FukagawaMai],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.HashimotoNanami,
        MemberNameKey.NishinoNanase,
        MemberNameKey.FukagawaMai,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.IkutaErika,
      ],
      secondRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.EtouMisa,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoshinoMinami,
      ],
      thirdRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["不等号"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["福田貴史"],
      arrange: ["福田貴史"],
      direct: ["池田千尋"],
    },
    center: [MemberNameKey.NakamotoHimeka],
    formations: {
      firstRow: [
        MemberNameKey.SaitouYuuri,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.KitanoHinako,
        MemberNameKey.HiguchiHina,
      ],
      secondRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.KawagoHina,
        MemberNameKey.NakadaKana,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.NoujouAmi,
      ],
      thirdRow: [
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
    },
  }),
  createSongRaw({
    title: SONGS["遥かなるブータン"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ツキダタダシ"],
      arrange: ["ha-j"],
    },
    center: [MemberNameKey.IkutaErika],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.ItouMarika,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoriMiona,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["強がる蕾"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["大貫和紀", "河原レオ", "高木龍一"],
      arrange: ["Carlos K."],
      direct: ["真壁幸紀"],
    },
    solo: MemberNameKey.FukagawaMai,
  }),
  createSongRaw({
    title: SONGS["急斜面"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["FURUTA", "Yasutaka Ishio"],
      arrange: ["重永亮介"],
      direct: ["番場秀一"],
    },
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["釣り堀"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Bush-I"],
      arrange: ["APAZZI"],
      direct: ["永田琴"],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
  createSongRaw({
    title: SONGS["憂鬱と風船ガム"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["HIROTOMO", "Dr.Lilcom"],
      arrange: ["APAZZI"],
    },
    center: [MemberNameKey.HoshinoMinami],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkomaRina,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
      ],
    },
  }),
];
