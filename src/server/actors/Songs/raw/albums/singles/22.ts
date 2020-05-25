import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const TWENTY_SECOND_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Kaerimichihatoomawarishitakunaru,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["渡邉俊彦"],
      arrange: ["渡邉俊彦", "早川博隆"],
      direct: ["関和亮"],
    },
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.UmezawaMinami,
        MemberName.YamashitaMizuki,
        MemberName.SaitouAsuka,
        MemberName.NishinoNanase,
        MemberName.ShiraishiMai,
        MemberName.IkutaErika,
        MemberName.YodaYuuki,
      ],
      secondRow: [
        MemberName.EtouMisa,
        MemberName.AkimotoManatsu,
        MemberName.HoriMiona,
        MemberName.WakatsukiYumi,
        MemberName.HoshinoMinami,
        MemberName.SakuraiReika,
        MemberName.MatsumuraSayuri,
      ],
      thirdRow: [
        MemberName.SaitouYuuri,
        MemberName.InoueSayuri,
        MemberName.SatouKaede,
        MemberName.OozonoMomoko,
        MemberName.ItouRiria,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Nichijou,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "野口大志"],
      arrange: ["Akira Sunset", "野口大志"],
      direct: ["今泉力哉"],
    },
    center: [MemberName.KitanoHinako],
    formations: {
      firstRow: [
        MemberName.SuzukiAyane,
        MemberName.HiguchiHina,
        MemberName.KitanoHinako,
        MemberName.TeradaRanze,
        MemberName.IwamotoRenka,
      ],
      secondRow: [
        MemberName.SakaguchiTamami,
        MemberName.YamazakiRena,
        MemberName.KuboShiori,
        MemberName.NakadaKana,
        MemberName.WatanabeMiria,
        MemberName.MukaiHazuki,
      ],
      thirdRow: [
        MemberName.ItouJunna,
        MemberName.WadaMaaya,
        MemberName.NakamuraReno,
        MemberName.KawagoHina,
        MemberName.ItouKarin,
        MemberName.SasakiKotoko,
        MemberName.YoshidaAyanoChristie,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.CaravanHanemuranai,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["CottON"],
      arrange: ["CottON"],
      direct: ["横堀光範"],
    },
    center: [MemberName.SaitouAsuka],
    formations: {
      firstRow: [
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
        MemberName.UmezawaMinami,
        MemberName.OozonoMomoko,
        MemberName.KitanoHinako,
        MemberName.KuboShiori,
        MemberName.SaitouAsuka,
        MemberName.SatouKaede,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.HiguchiHina,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.YamashitaMizuki,
        MemberName.YodaYuuki,
        MemberName.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Tsuduku,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["若田部誠"],
      arrange: ["若田部誠"],
      direct: ["湯浅弘章"],
    },
    solo: MemberName.NishinoNanase,
  }),
  createSongRaw({
    title: SongTitle.Kokuhakunojunban,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["安部純"],
      arrange: ["安部純"],
      direct: ["荒船泰廣"],
    },
    unit: "女子校カルテット",
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.SakuraiReika,
        MemberName.NakadaKana,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.ChopinNousotsuki,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山本加津彦"],
      arrange: ["山本加津彦"],
    },
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.ShiraishiMai,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Shiritaikoto,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["佐々木裕"],
      arrange: ["佐々木裕"],
    },
    formations: {
      firstRow: [
        MemberName.SaitouAsuka,
        MemberName.HoshinoMinami,
        MemberName.YamashitaMizuki,
        MemberName.YodaYuuki,
      ],
      fourthRow: [],
    },
  }),
];
