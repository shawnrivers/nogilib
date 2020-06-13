import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const TENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["何度目の青空か?"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["川浦正大"],
      arrange: ["百石元"],
      direct: ["内田けんじ"],
    },
    center: [MemberNameKey.IkutaErika],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.MatsuiRena,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.IkutaErika,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
      ],
      secondRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkomaRina,
        MemberNameKey.SakuraiReika,
        MemberNameKey.FukagawaMai,
      ],
      thirdRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.HoriMiona,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.SaitouChiharu,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["三輪智也"],
      arrange: ["京田誠一"],
      direct: ["湯浅弘章"],
    },
    center: [MemberNameKey.InoueSayuri],
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.InoueSayuri,
        MemberNameKey.ItouMarika,
      ],
      secondRow: [
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.NakadaKana,
        MemberNameKey.NoujouAmi,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.WadaMaaya,
        MemberNameKey.HiguchiHina,
        MemberNameKey.ItouKarin,
        MemberNameKey.KawagoHina,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.KitanoHinako,
        MemberNameKey.YamatoRina,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["遠回りの愛情"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Noda Akiko"],
      arrange: ['野中"まさ"雄一'],
    },
    center: [MemberNameKey.NagashimaSeira, MemberNameKey.SakuraiReika],
    formations: {
      firstRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.YamatoRina,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["転がった鐘を鳴らせ!"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中山英二"],
      arrange: ["田上陽一"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.IkutaErika],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsuiRena,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["私、起きる。"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "ZERO"],
      arrange: ["Akira Sunset", "ZERO"],
      direct: ["柳沢翔"],
    },
    center: [MemberNameKey.IkutaErika],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.KawagoHina,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.HiguchiHina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["Tender days"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["SoichiroK", "Nozomu.S"],
      arrange: ["Soulife"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
];
