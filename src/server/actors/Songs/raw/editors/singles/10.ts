import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const TENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Nandomenoaozoraka,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["川浦正大"],
      arrange: ["百石元"],
      direct: ["内田けんじ"],
    },
    center: [MemberName.IkutaErika],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.MatsuiRena,
        MemberName.ShiraishiMai,
        MemberName.IkutaErika,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
      ],
      secondRow: [
        MemberName.MatsumuraSayuri,
        MemberName.AkimotoManatsu,
        MemberName.IkomaRina,
        MemberName.SakuraiReika,
        MemberName.FukagawaMai,
      ],
      thirdRow: [
        MemberName.EtouMisa,
        MemberName.WakatsukiYumi,
        MemberName.HoriMiona,
        MemberName.HoshinoMinami,
        MemberName.TakayamaKazumi,
        MemberName.SaitouChiharu,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Anohibokuhausowotsuita,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["三輪智也"],
      arrange: ["京田誠一"],
      direct: ["湯浅弘章"],
    },
    center: [MemberName.InoueSayuri],
    formations: {
      firstRow: [
        MemberName.SaitouAsuka,
        MemberName.InoueSayuri,
        MemberName.ItouMarika,
      ],
      secondRow: [
        MemberName.NagashimaSeira,
        MemberName.NakamotoHimeka,
        MemberName.SaitouYuuri,
        MemberName.NakadaKana,
        MemberName.NoujouAmi,
      ],
      thirdRow: [
        MemberName.KawamuraMahiro,
        MemberName.WadaMaaya,
        MemberName.HiguchiHina,
        MemberName.ItouKarin,
        MemberName.KawagoHina,
        MemberName.HatanakaSeira,
        MemberName.KitanoHinako,
        MemberName.YamatoRina,
        MemberName.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Toomawarinoaijou,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Noda Akiko"],
      arrange: ['野中"まさ"雄一'],
    },
    center: [MemberName.NagashimaSeira, MemberName.SakuraiReika],
    formations: {
      firstRow: [
        MemberName.InoueSayuri,
        MemberName.SakuraiReika,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
        MemberName.NishinoNanase,
        MemberName.NoujouAmi,
        MemberName.YamatoRina,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Korogattakanewonarase,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中山英二"],
      arrange: ["田上陽一"],
      direct: ["丸山健志"],
    },
    center: [MemberName.IkutaErika],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.EtouMisa,
        MemberName.SaitouChiharu,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsuiRena,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Watashiokiru,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "ZERO"],
      arrange: ["Akira Sunset", "ZERO"],
      direct: ["柳沢翔"],
    },
    center: [MemberName.IkutaErika],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.KawagoHina,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SaitouChiharu,
        MemberName.NakamotoHimeka,
        MemberName.HiguchiHina,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.TenderDays,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["SoichiroK", "Nozomu.S"],
      arrange: ["Soulife"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
];
