import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const EIGHTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Kiduitarakataomoi,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["湯浅篤"],
      direct: ["柳沢翔"],
    },
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOne,
    formations: {
      firstRow: [
        MemberName.HoriMiona,
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.IkomaRina,
      ],
      secondRow: [
        MemberName.SakuraiReika,
        MemberName.WakatsukiYumi,
        MemberName.IkutaErika,
        MemberName.MatsumuraSayuri,
        MemberName.FukagawaMai,
      ],
      thirdRow: [
        MemberName.KawamuraMahiro,
        MemberName.KitanoHinako,
        MemberName.HiguchiHina,
        MemberName.AkimotoManatsu,
        MemberName.WadaMaaya,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Umaretamamade,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["田中俊亮"],
      arrange: ["鈴木裕明"],
      direct: ["久保茂昭"],
    },
    center: [MemberName.ItouMarika],
    formations: {
      firstRow: [
        MemberName.InoueSayuri,
        MemberName.SaitouAsuka,
        MemberName.ItouMarika,
        MemberName.HoshinoMinami,
        MemberName.SaitouYuuri,
      ],
      secondRow: [
        MemberName.NagashimaSeira,
        MemberName.NakadaKana,
        MemberName.EtouMisa,
        MemberName.KawagoHina,
        MemberName.NakamotoHimeka,
      ],
      thirdRow: [
        MemberName.SaitouChiharu,
        MemberName.ItouNene,
        MemberName.IchikiRena,
        MemberName.ShinuchiMai,
        MemberName.HatanakaSeira,
        MemberName.YamatoRina,
        MemberName.NoujouAmi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.RomanceNoStart,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["押田誠"],
      arrange: ["佐々木聡作", "押田誠"],
      direct: ["丸山健志"],
    },
    center: [MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.HoriMiona,
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.IkomaRina,
      ],
      secondRow: [
        MemberName.SakuraiReika,
        MemberName.WakatsukiYumi,
        MemberName.IkomaRina,
        MemberName.MatsumuraSayuri,
        MemberName.FukagawaMai,
      ],
      thirdRow: [
        MemberName.KawamuraMahiro,
        MemberName.KitanoHinako,
        MemberName.HiguchiHina,
        MemberName.AkimotoManatsu,
        MemberName.WadaMaaya,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.ToikiMethod,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["田中明仁"],
      arrange: ["TATOO"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.KawamuraMahiro,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.HiguchiHina,
        MemberName.FukagawaMai,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kodokukyoudai,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Soulife"],
      arrange: ["Soulife"],
      direct: ["池田一真"],
    },
    unit: "孤独兄弟",
    formations: {
      firstRow: [MemberName.ShiraishiMai, MemberName.HashimotoNanami],
    },
  }),
  createSongRaw({
    title: SongTitle.Dankeschan,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "C#"],
      arrange: ["Akira Sunset", "C#"],
    },
    center: [MemberName.IkutaErika],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.SakuraiReika,
        MemberName.NishinoNanase,
        MemberName.FukagawaMai,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
