import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const TWELFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.TaiyouKnock,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["黒須克彦"],
      arrange: ["長田直之"],
      direct: ["三石直和"],
    },
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.IkomaRina,
        MemberName.IkutaErika,
        MemberName.HashimotoNanami,
      ],
      secondRow: [
        MemberName.TakayamaKazumi,
        MemberName.WakatsukiYumi,
        MemberName.SakuraiReika,
        MemberName.AkimotoManatsu,
        MemberName.FukagawaMai,
      ],
      thirdRow: [
        MemberName.MatsumuraSayuri,
        MemberName.SaitouYuuri,
        MemberName.HoshinoMinami,
        MemberName.SaitouAsuka,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.ShinuchiMai,
        MemberName.EtouMisa,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.WakaregiwaMottosukininaru,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "ha-j"],
      arrange: ["Akira Sunset", "ha-j"],
      direct: ["山岸聖太"],
    },
    center: [MemberName.HoriMiona],
    formations: {
      firstRow: [
        MemberName.KawamuraMahiro,
        MemberName.KitanoHinako,
        MemberName.HoriMiona,
        MemberName.NakamotoHimeka,
        MemberName.NakadaKana,
      ],
      secondRow: [
        MemberName.SagaraIori,
        MemberName.KawagoHina,
        MemberName.NagashimaSeira,
        MemberName.NoujouAmi,
        MemberName.SaitouChiharu,
      ],
      thirdRow: [
        MemberName.WadaMaaya,
        MemberName.SasakiKotoko,
        MemberName.TeradaRanze,
        MemberName.ItouKarin,
        MemberName.WatanabeMiria,
        MemberName.SuzukiAyane,
        MemberName.ItouJunna,
        MemberName.HiguchiHina,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Mousukoshinoyume,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["丸谷マナブ"],
      arrange: ['野中"まさ"雄一'],
    },
    solo: MemberName.NishinoNanase,
  }),
  createSongRaw({
    title: SongTitle.SakanatachinoLoveSong,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["渡辺拓也"],
      arrange: ["渡辺拓也"],
      direct: ["中村太洸"],
    },
    formations: {
      firstRow: [
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Muhyoujyou,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["Akira Sunset"],
      direct: ["月田茂", "山本篤彦", "柴谷麻以"],
    },
    unit: "からあげ姉妹",
    formations: {
      firstRow: [MemberName.IkutaErika, MemberName.MatsumuraSayuri],
    },
  }),
  createSongRaw({
    title: SongTitle.Hanenokioku,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
      direct: ["岡川太郎"],
    },
    center: [MemberName.IkomaRina],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShinuchiMai,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.HoshinoMinami,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Seifukuwonuidesayonarawo,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["古川貴浩"],
      arrange: ["古川貴浩"],
    },
    formations: {
      firstRow: [MemberName.SaitouAsuka, MemberName.HoshinoMinami],
    },
  }),
];
