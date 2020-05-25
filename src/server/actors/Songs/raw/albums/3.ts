import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const THIRD_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Skydiving,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["菅井達司"],
      arrange: ["菅井達司"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NishinoNanase,
        MemberName.HiguchiHina,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kimigaaoidekureta,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中山聡", "足立優"],
      arrange: ['野中"まさ"雄一'],
    },
    formations: {
      firstRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.NoujouAmi,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.OmoideFirst,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ミサマサカリヲ"],
      arrange: ["遠藤ナオキ"],
    },
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
        MemberName.MukaiHazuki,
        MemberName.YamashitaMizuki,
        MemberName.YoshidaAyanoChristie,
        MemberName.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Setteiondo,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["石井亮輔"],
      arrange: ["APAZZI"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NishinoNanase,
        MemberName.HiguchiHina,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
      secondRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.NoujouAmi,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
      ],
      thirdRow: [
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
        MemberName.UmezawaMinami,
        MemberName.OozonoMomoko,
        MemberName.KuboShiori,
        MemberName.SakaguchiTamami,
        MemberName.SatouKaede,
        MemberName.NakamuraReno,
        MemberName.MukaiHazuki,
        MemberName.YamashitaMizuki,
        MemberName.YoshidaAyanoChristie,
        MemberName.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.RewindAnohi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["藤木テツ"],
      arrange: ["佐々木裕"],
    },
    formations: {
      firstRow: [
        MemberName.SakuraiReika,
        MemberName.NishinoNanase,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.GomenneSmoothie,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["YASUSHI WATANABE"],
      arrange: ["YASUSHI WATANABE"],
    },
    formations: {
      firstRow: [
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.NakamotoHimeka,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Minikuiwatashi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["外山大輔"],
      arrange: ["APAZZI"],
    },
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.SaitouYuuri,
        MemberName.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kataikaranoyounidakishimetai,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "三谷秀甫", "谷地学"],
    },
    solo: MemberName.SaitouAsuka,
  }),
  createSongRaw({
    title: SongTitle.Mangetsugakieta,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["SaSA"],
      arrange: ["SaSA"],
    },
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.HoshinoMinami,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Watabokori,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ハサミマン"],
      arrange: ["ハサミマン"],
    },
    formations: {
      firstRow: [
        MemberName.KitanoHinako,
        MemberName.TeradaRanze,
        MemberName.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.RyuuseiDiscotic,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Masayoshi Kawabata"],
      arrange: ["Masayoshi Kawabata"],
    },
    formations: {
      firstRow: [MemberName.ShiraishiMai, MemberName.MatsumuraSayuri],
    },
  }),
  createSongRaw({
    title: SongTitle.Boukyakutobigaku,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["早川博隆"],
      arrange: ["早川博隆"],
    },
    formations: {
      firstRow: [MemberName.AkimotoManatsu, MemberName.TakayamaKazumi],
    },
  }),
];
