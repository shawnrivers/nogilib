import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const NINETEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Itsukadekirukarakyoudekiru,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "京田誠一"],
      arrange: ["Akira Sunset", "京田誠一"],
      direct: ["高橋栄樹"],
    },
    center: [MemberName.NishinoNanase, MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.HoriMiona,
        MemberName.NishinoNanase,
        MemberName.SaitouAsuka,
        MemberName.ShiraishiMai,
      ],
      secondRow: [
        MemberName.WakatsukiYumi,
        MemberName.InoueSayuri,
        MemberName.MatsumuraSayuri,
        MemberName.IkutaErika,
        MemberName.ItouMarika,
        MemberName.SakuraiReika,
        MemberName.EtouMisa,
      ],
      thirdRow: [
        MemberName.ShinuchiMai,
        MemberName.SaitouYuuri,
        MemberName.HoshinoMinami,
        MemberName.IkomaRina,
        MemberName.AkimotoManatsu,
        MemberName.KitanoHinako,
        MemberName.NakadaKana,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.MyRule,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["藤田卓也"],
      arrange: ["藤田卓也"],
      direct: ["林希", "古屋蔵人"],
    },
    center: [MemberName.HiguchiHina],
    formations: {
      firstRow: [
        MemberName.WatanabeMiria,
        MemberName.HiguchiHina,
        MemberName.TeradaRanze,
      ],
      secondRow: [
        MemberName.NoujouAmi,
        MemberName.SuzukiAyane,
        MemberName.YamazakiRena,
        MemberName.SaitouChiharu,
      ],
      thirdRow: [
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.ItouKarin,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.WadaMaaya,
        MemberName.ItouJunna,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Fumenshou,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["大貫和紀", "河原レオ", "高木龍一"],
      arrange: ["大貫和紀", "河原レオ", "高木龍一"],
    },
    center: [MemberName.KuboShiori, MemberName.YamashitaMizuki],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.OozonoMomoko,
        MemberName.KuboShiori,
        MemberName.SaitouAsuka,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.YamashitaMizuki,
        MemberName.YodaYuuki,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Maaiika,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["HRK"],
      arrange: ["原広明"],
      direct: ["中村太洸"],
    },
    formations: {
      firstRow: [MemberName.AkimotoManatsu, MemberName.ShiraishiMai],
    },
  }),
  createSongRaw({
    title: SongTitle.Shitsurenosoujinin,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
      arrange: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
      direct: ["伊藤衆人"],
    },
    unit: "若様軍団",
    formations: {
      firstRow: [
        MemberName.UmezawaMinami,
        MemberName.SakaguchiTamami,
        MemberName.YamashitaMizuki,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bokunoshoudou,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["石井伸昂"],
      arrange: ["石井伸昂"],
      direct: ["荒船泰廣"],
    },
    center: [MemberName.ItouRiria],
    formations: {
      firstRow: [
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
        MemberName.UmezawaMinami,
        MemberName.OozonoMomoko,
        MemberName.KuboShiori,
        MemberName.SakaguchiTamami,
        MemberName.SatouKaede,
        MemberName.NakamuraReno,
        MemberName.YamashitaMizuki,
        MemberName.YoshidaAyanoChristie,
        MemberName.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Atarashiikafun,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["新田目翔"],
      arrange: ["若田部誠"],
      direct: ["荒船泰廣"],
    },
    formations: {
      firstRow: [MemberName.IkutaErika, MemberName.KuboShiori],
    },
  }),
];
