import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const SEVENTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Influencer,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["すみだしんや"],
      arrange: ["APAZZI"],
      direct: ["丸山健志"],
    },
    center: [MemberName.NishinoNanase, MemberName.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.HoriMiona,
        MemberName.NishinoNanase,
        MemberName.ShiraishiMai,
        MemberName.SaitouAsuka,
        MemberName.EtouMisa,
      ],
      secondRow: [
        MemberName.WakatsukiYumi,
        MemberName.TakayamaKazumi,
        MemberName.IkomaRina,
        MemberName.IkutaErika,
        MemberName.MatsumuraSayuri,
        MemberName.SakuraiReika,
      ],
      thirdRow: [
        MemberName.ShinuchiMai,
        MemberName.InoueSayuri,
        MemberName.TeradaRanze,
        MemberName.KitanoHinako,
        MemberName.ItouMarika,
        MemberName.HoshinoMinami,
        MemberName.SaitouYuuri,
        MemberName.HiguchiHina,
        MemberName.NakadaKana,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Fusuenhaikiteiru,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["泉佳伸", "三好翔太"],
      arrange: ["早川博隆", "三好翔太"],
      direct: ["多田卓也"],
    },
    center: [MemberName.WatanabeMiria],
    formations: {
      firstRow: [
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.SuzukiAyane,
      ],
      secondRow: [
        MemberName.SaitouChiharu,
        MemberName.ItouKarin,
        MemberName.NoujouAmi,
        MemberName.SagaraIori,
      ],
      thirdRow: [
        MemberName.KawagoHina,
        MemberName.SasakiKotoko,
        MemberName.WadaMaaya,
        MemberName.ItouJunna,
        MemberName.KawamuraMahiro,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Jinseiwokangaetakunaru,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["片桐周太郎"],
      arrange: ["片桐周太郎"],
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
    title: SongTitle.IgaiBreak,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["すみだしんや"],
      arrange: ["華原大輔"],
      direct: ["伊藤衆人"],
    },
    unit: "姉御坂",
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.AnotherGhost,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["前迫潤哉", "Yasutaka.Ishio"],
      arrange: ["Yasutaka.Ishio"],
      direct: ["井上強"],
    },
    unit: "ナスカ",
    formations: {
      firstRow: [
        MemberName.ItouMarika,
        MemberName.SaitouAsuka,
        MemberName.NishinoNanase,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Sanbanmenokaze,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["丸谷マナブ"],
      arrange: ["丸谷マナブ"],
      direct: ["岡川太郎"],
    },
    center: [MemberName.OozonoMomoko],
    formations: {
      firstRow: [
        MemberName.KuboShiori,
        MemberName.OozonoMomoko,
        MemberName.YamashitaMizuki,
      ],
      secondRow: [
        MemberName.SakaguchiTamami,
        MemberName.YodaYuuki,
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
      ],
      thirdRow: [
        MemberName.UmezawaMinami,
        MemberName.MukaiHazuki,
        MemberName.NakamuraReno,
        MemberName.SatouKaede,
        MemberName.YoshidaAyanoChristie,
      ],
      fourthRow: [],
    },
  }),
  createSongRaw({
    title: SongTitle.Atarisawarinonaihanashi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小網準"],
      arrange: ['野中"まさ"雄一'],
    },
    unit: "かすみ草",
    formations: {
      firstRow: [
        MemberName.IkomaRina,
        MemberName.InoueSayuri,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
      ],
      fourthRow: [],
    },
  }),
];
