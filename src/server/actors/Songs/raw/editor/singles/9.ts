import { MemberNameKey } from "server/actors/Songs/constants";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { SONGS } from "server/constants/songs";

export const NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["夏のFree&Easy"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["井上トモノリ"],
      arrange: ["橋本幸太"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.MatsuiRena,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.FukagawaMai,
        MemberNameKey.IkomaRina,
      ],
      thirdRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.YamatoRina,
        MemberNameKey.HoriMiona,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["ここにいる理由"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["長谷川湊"],
      arrange: ["Carlos K."],
      direct: ["近藤大介"],
    },
    center: [MemberNameKey.ItouMarika],
    formations: {
      firstRow: [
        MemberNameKey.KawagoHina,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ItouMarika,
        MemberNameKey.HiguchiHina,
        MemberNameKey.WadaMaaya,
      ],
      secondRow: [
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NakadaKana,
        MemberNameKey.NoujouAmi,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.KawamuraMahiro,
      ],
      thirdRow: [
        MemberNameKey.SaitouChiharu,
        MemberNameKey.KitanoHinako,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.ItouNene,
        MemberNameKey.IchikiRena,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["何もできずにそばにいる"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["角野寿和"],
      arrange: ["京田誠一"],
    },
    center: [MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.MatsuiRena,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.FukagawaMai,
        MemberNameKey.IkomaRina,
      ],
      thirdRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.YamatoRina,
        MemberNameKey.HoriMiona,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["その先の出口!"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Carlos K."],
      arrange: ["Carlos K."],
      direct: ["中村太洸"],
    },
    center: [MemberNameKey.ShiraishiMai],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.EtouMisa,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsuiRena,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.FukagawaMai,
        MemberNameKey.YamatoRina,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["無口なライオン"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Shusui", "ヒロイズム"],
      arrange: ["Shusui", "ヒロイズム"],
      direct: ["湯浅弘章"],
    },
    center: [MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.IkomaRina,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["僕が行かなきゃ誰が行くんだ?"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中土智博"],
      arrange: ["中土智博"],
    },
    center: [MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
