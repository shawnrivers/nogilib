import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/actors/Songs/constants/songType";
import { FukujinType } from "server/actors/Cds/Singles/constants/fukujinType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SONGS } from "server/actors/Songs/constants/songTitle";
import { UNIT_NAMES } from "server/actors/Units/constants/unitName";

export const SEVENTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["インフルエンサー"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["すみだしんや"],
      arrange: ["APAZZI"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.NishinoNanase, MemberNameKey.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoriMiona,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.EtouMisa,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.IkomaRina,
        MemberNameKey.IkutaErika,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.InoueSayuri,
        MemberNameKey.TeradaRanze,
        MemberNameKey.KitanoHinako,
        MemberNameKey.ItouMarika,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["風船は生きている"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["泉佳伸", "三好翔太"],
      arrange: ["早川博隆", "三好翔太"],
      direct: ["多田卓也"],
    },
    center: [MemberNameKey.WatanabeMiria],
    formations: {
      firstRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
      ],
      secondRow: [
        MemberNameKey.SaitouChiharu,
        MemberNameKey.ItouKarin,
        MemberNameKey.NoujouAmi,
        MemberNameKey.SagaraIori,
      ],
      thirdRow: [
        MemberNameKey.KawagoHina,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.WadaMaaya,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawamuraMahiro,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["人生を考えたくなる"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["片桐周太郎"],
      arrange: ["片桐周太郎"],
    },
    unit: UNIT_NAMES["女子校カルテット"].name,
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["意外BREAK"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["すみだしんや"],
      arrange: ["華原大輔"],
      direct: ["伊藤衆人"],
    },
    unit: UNIT_NAMES["姉御坂"].name,
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["Another Ghost"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["前迫潤哉", "Yasutaka.Ishio"],
      arrange: ["Yasutaka.Ishio"],
      direct: ["井上強"],
    },
    unit: UNIT_NAMES["ナスカ"].name,
    formations: {
      firstRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.NishinoNanase,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["三番目の風"].title,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["丸谷マナブ"],
      arrange: ["丸谷マナブ"],
      direct: ["岡川太郎"],
    },
    center: [MemberNameKey.OozonoMomoko],
    formations: {
      firstRow: [
        MemberNameKey.KuboShiori,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.YamashitaMizuki,
      ],
      secondRow: [
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.YodaYuuki,
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
      ],
      thirdRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.NakamuraReno,
        MemberNameKey.SatouKaede,
        MemberNameKey.YoshidaAyanoChristie,
      ],
      fourthRow: [],
    },
  }),
  createSongRaw({
    title: SONGS["当たり障りのない話"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小網準"],
      arrange: ['野中"まさ"雄一'],
    },
    unit: UNIT_NAMES["かすみ草"].name,
    formations: {
      firstRow: [
        MemberNameKey.IkomaRina,
        MemberNameKey.InoueSayuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
      ],
      fourthRow: [],
    },
  }),
];
