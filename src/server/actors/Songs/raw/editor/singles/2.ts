import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const SECOND_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["おいでシャンプー"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小田切大"],
      arrange: ["TATOO"],
      direct: ["高橋栄樹"],
    },
    center: [MemberNameKey.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.IkomaRina,
        MemberNameKey.NakadaKana,
      ],
      secondRow: [
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
      ],
      thirdRow: [
        MemberNameKey.IwaseYumiko,
        MemberNameKey.IchikiRena,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.IkutaErika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.MiyazawaSeira,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["狼に口笛を"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["シライシ紗トリ"],
      direct: ["福居英晃"],
    },
    center: [MemberNameKey.ItouMarika],
    formations: {
      firstRow: [
        MemberNameKey.FukagawaMai,
        MemberNameKey.ItouMarika,
        MemberNameKey.WakatsukiYumi,
      ],
      secondRow: [
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.NagashimaSeira,
      ],
      thirdRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.ItouNene,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.HiguchiHina,
      ],
      fourthRow: [
        MemberNameKey.KashiwaYukina,
        MemberNameKey.AndouMikumo,
        MemberNameKey.YamatoRina,
        MemberNameKey.NoujouAmi,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["心の薬"].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["MIKOTO"],
      arrange: ["木之下慶行"],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.IchikiRena,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.IwaseYumiko,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.MiyazawaSeira,
        MemberNameKey.YamatoRina,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["偶然を言い訳にして"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["坂部大介"],
      arrange: ["中土智博"],
      direct: ["中村太洸"],
    },
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["水玉模様"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["若田部誠"],
      arrange: ["若田部誠"],
      direct: ["丸山健志"],
    },
    solo: MemberNameKey.IkomaRina,
  }),
  createSongRaw({
    title: SONGS["ハウス!"].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["y@suo ohtani"],
      arrange: ["y@suo ohtani"],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.IchikiRena,
        MemberNameKey.InoueSayuri,
        MemberNameKey.IwaseYumiko,
        MemberNameKey.EtouMisa,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.MiyazawaSeira,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
