import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/actors/Songs/constants/songType";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const THIRD_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["スカイダイビング"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["菅井達司"],
      arrange: ["菅井達司"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HiguchiHina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["君が扇いでくれた"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中山聡", "足立優"],
      arrange: ['野中"まさ"雄一'],
    },
    formations: {
      firstRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.NoujouAmi,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["思い出ファースト"].title,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ミサマサカリヲ"],
      arrange: ["遠藤ナオキ"],
    },
    formations: {
      firstRow: [
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["設定温度"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["石井亮輔"],
      arrange: ["APAZZI"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HiguchiHina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
      secondRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.NoujouAmi,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
      thirdRow: [
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["Rewindあの日"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["藤木テツ"],
      arrange: ["佐々木裕"],
    },
    formations: {
      firstRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.NishinoNanase,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["ごめんね、スムージー"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["YASUSHI WATANABE"],
      arrange: ["YASUSHI WATANABE"],
    },
    formations: {
      firstRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.NakamotoHimeka,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["醜い私"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["外山大輔"],
      arrange: ["APAZZI"],
    },
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["硬い殻のように抱きしめたい"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "三谷秀甫", "谷地学"],
    },
    solo: MemberNameKey.SaitouAsuka,
  }),
  createSongRaw({
    title: SONGS["満月が消えた"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["SaSA"],
      arrange: ["SaSA"],
    },
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["ワタボコリ"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ハサミマン"],
      arrange: ["ハサミマン"],
    },
    formations: {
      firstRow: [
        MemberNameKey.KitanoHinako,
        MemberNameKey.TeradaRanze,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["流星ディスコティック"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Masayoshi Kawabata"],
      arrange: ["Masayoshi Kawabata"],
    },
    formations: {
      firstRow: [MemberNameKey.ShiraishiMai, MemberNameKey.MatsumuraSayuri],
    },
  }),
  createSongRaw({
    title: SONGS["忘却と美学"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["早川博隆"],
      arrange: ["早川博隆"],
    },
    formations: {
      firstRow: [MemberNameKey.AkimotoManatsu, MemberNameKey.TakayamaKazumi],
    },
  }),
];
