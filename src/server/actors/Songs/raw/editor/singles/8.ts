import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const EIGHTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["気づいたら片想い"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["湯浅篤"],
      direct: ["柳沢翔"],
    },
    center: [MemberNameKey.NishinoNanase],
    fukujin: FukujinType.RowOne,
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.IkomaRina,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.IkutaErika,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.FukagawaMai,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KitanoHinako,
        MemberNameKey.HiguchiHina,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.WadaMaaya,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["生まれたままで"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["田中俊亮"],
      arrange: ["鈴木裕明"],
      direct: ["久保茂昭"],
    },
    center: [MemberNameKey.ItouMarika],
    formations: {
      firstRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ItouMarika,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SaitouYuuri,
      ],
      secondRow: [
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NakadaKana,
        MemberNameKey.EtouMisa,
        MemberNameKey.KawagoHina,
        MemberNameKey.NakamotoHimeka,
      ],
      thirdRow: [
        MemberNameKey.SaitouChiharu,
        MemberNameKey.ItouNene,
        MemberNameKey.IchikiRena,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.YamatoRina,
        MemberNameKey.NoujouAmi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["ロマンスのスタート"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["押田誠"],
      arrange: ["佐々木聡作", "押田誠"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.IkomaRina,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.IkomaRina,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.FukagawaMai,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KitanoHinako,
        MemberNameKey.HiguchiHina,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.WadaMaaya,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["吐息のメソッド"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["田中明仁"],
      arrange: ["TATOO"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HiguchiHina,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["孤独兄弟"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Soulife"],
      arrange: ["Soulife"],
      direct: ["池田一真"],
    },
    unit: "孤独兄弟",
    formations: {
      firstRow: [MemberNameKey.ShiraishiMai, MemberNameKey.HashimotoNanami],
    },
  }),
  createSongRaw({
    title: SONGS["ダンケシェーン"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "C#"],
      arrange: ["Akira Sunset", "C#"],
    },
    center: [MemberNameKey.IkutaErika],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NishinoNanase,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
