import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Kiminonahakibou,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
      direct: ["山下敦弘"],
    },
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.HoshinoMinami,
      ],
      secondRow: [
        MemberName.SakuraiReika,
        MemberName.HashimotoNanami,
        MemberName.ShiraishiMai,
        MemberName.MatsumuraSayuri,
        MemberName.AkimotoManatsu,
      ],
      thirdRow: [
        MemberName.ItouNene,
        MemberName.NakadaKana,
        MemberName.InoueSayuri,
        MemberName.NishinoNanase,
        MemberName.WakatsukiYumi,
        MemberName.FukagawaMai,
        MemberName.NagashimaSeira,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Jyuusannichinokinyoubi,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["網本ナオノブ"],
      arrange: ["湯浅篤"],
      direct: ["山田篤宏"],
    },
    center: [MemberName.SaitouYuuri],
    formations: {
      firstRow: [
        MemberName.ItouMarika,
        MemberName.SaitouYuuri,
        MemberName.SaitouAsuka,
      ],
      secondRow: [
        MemberName.KawamuraMahiro,
        MemberName.EtouMisa,
        MemberName.NoujouAmi,
        MemberName.IchikiRena,
      ],
      thirdRow: [
        MemberName.YamatoRina,
        MemberName.WadaMaaya,
        MemberName.NakamotoHimeka,
        MemberName.SaitouChiharu,
        MemberName.KashiwaYukina,
        MemberName.AndouMikumo,
        MemberName.HatanakaSeira,
        MemberName.HiguchiHina,
        MemberName.KawagoHina,
        MemberName.MiyazawaSeira,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Shakism,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["岡本健介"],
      arrange: ["岡本健介"],
      direct: ["柳沢翔"],
    },
    center: [MemberName.IkomaRina, MemberName.HoshinoMinami],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouNene,
        MemberName.InoueSayuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
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
    title: SongTitle.RomanticIkayaki,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["横健介"],
      arrange: ["重永亮介"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouNene,
        MemberName.InoueSayuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
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
    title: SongTitle.Dekopin,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中土智博"],
      arrange: ["中土智博"],
      direct: ["中村太洸"],
    },
    formations: {
      firstRow: [
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.PsychokinesesNokanousei,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中土智博"],
      arrange: ["中土智博"],
      direct: ["中村太洸"],
    },
    center: [MemberName.SakuraiReika, MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.ItouNene,
        MemberName.InoueSayuri,
        MemberName.SakuraiReika,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
        MemberName.NishinoNanase,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
