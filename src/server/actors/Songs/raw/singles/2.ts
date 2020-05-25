import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const SECOND_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Oideshampo,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小田切大"],
      arrange: ["TATOO"],
      direct: ["高橋栄樹"],
    },
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.SakuraiReika,
        MemberName.IkomaRina,
        MemberName.NakadaKana,
      ],
      secondRow: [
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
      ],
      thirdRow: [
        MemberName.IwaseYumiko,
        MemberName.IchikiRena,
        MemberName.SaitouYuuri,
        MemberName.IkutaErika,
        MemberName.InoueSayuri,
        MemberName.HoshinoMinami,
        MemberName.NishinoNanase,
        MemberName.HatanakaSeira,
        MemberName.MiyazawaSeira,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Ookaminikuchibuewo,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["シライシ紗トリ"],
      direct: ["福居英晃"],
    },
    center: [MemberName.ItouMarika],
    formations: {
      firstRow: [
        MemberName.FukagawaMai,
        MemberName.ItouMarika,
        MemberName.WakatsukiYumi,
      ],
      secondRow: [
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.NagashimaSeira,
      ],
      thirdRow: [
        MemberName.EtouMisa,
        MemberName.ItouNene,
        MemberName.SaitouAsuka,
        MemberName.NakamotoHimeka,
        MemberName.HiguchiHina,
      ],
      fourthRow: [
        MemberName.KashiwaYukina,
        MemberName.AndouMikumo,
        MemberName.YamatoRina,
        MemberName.NoujouAmi,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kokoronokusuri,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["MIKOTO"],
      arrange: ["木之下慶行"],
    },
    center: [MemberName.IkomaRina],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.IchikiRena,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.IwaseYumiko,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.HatanakaSeira,
        MemberName.FukagawaMai,
        MemberName.HoshinoMinami,
        MemberName.MatsumuraSayuri,
        MemberName.MiyazawaSeira,
        MemberName.YamatoRina,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Guuzenwoiiwakenishite,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["坂部大介"],
      arrange: ["中土智博"],
      direct: ["中村太洸"],
    },
    formations: {
      firstRow: [
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Mizutamamoyou,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["若田部誠"],
      arrange: ["若田部誠"],
      direct: ["丸山健志"],
    },
    solo: MemberName.IkomaRina,
  }),
  createSongRaw({
    title: SongTitle.House,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["y@suo ohtani"],
      arrange: ["y@suo ohtani"],
    },
    center: [MemberName.IkomaRina],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.IchikiRena,
        MemberName.InoueSayuri,
        MemberName.IwaseYumiko,
        MemberName.EtouMisa,
        MemberName.KawamuraMahiro,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakadaKana,
        MemberName.NishinoNanase,
        MemberName.NoujouAmi,
        MemberName.HashimotoNanami,
        MemberName.HatanakaSeira,
        MemberName.HoshinoMinami,
        MemberName.MatsumuraSayuri,
        MemberName.MiyazawaSeira,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
