import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const SEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Valletta,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["サイトウヨシヒロ"],
      arrange: ["若田部誠"],
      direct: ["江湖広二"],
    },
    center: [MemberName.HoriMiona],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.NishinoNanase,
        MemberName.ShiraishiMai,
        MemberName.HoriMiona,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
      secondRow: [
        MemberName.SakuraiReika,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.WakatsukiYumi,
      ],
      thirdRow: [
        MemberName.ItouMarika,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.AkimotoManatsu,
        MemberName.FukagawaMai,
        MemberName.NakamotoHimeka,
        MemberName.KawagoHina,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Hatsukoinohitowoimademo,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["古川貴浩"],
      arrange: ["古川貴浩"],
      direct: ["田所貴司"],
    },
    center: [MemberName.HoshinoMinami],
    formations: {
      firstRow: [
        MemberName.InoueSayuri,
        MemberName.HoshinoMinami,
        MemberName.SaitouYuuri,
      ],
      secondRow: [
        MemberName.NoujouAmi,
        MemberName.HiguchiHina,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
        MemberName.KawamuraMahiro,
      ],
      thirdRow: [
        MemberName.SaitouChiharu,
        MemberName.HatanakaSeira,
        MemberName.YamatoRina,
        MemberName.ItouNene,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Tsukinoookisa,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["古川貴浩"],
      arrange: ["古川貴浩"],
      direct: ["大久保拓朗"],
    },
    center: [MemberName.HoriMiona],
    formations: {
      firstRow: [
        MemberName.NishinoNanase,
        MemberName.ShiraishiMai,
        MemberName.HoriMiona,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
      secondRow: [
        MemberName.SakuraiReika,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.WakatsukiYumi,
      ],
      thirdRow: [
        MemberName.ItouMarika,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.AkimotoManatsu,
        MemberName.FukagawaMai,
        MemberName.NakamotoHimeka,
        MemberName.KawagoHina,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.WatashinotameniDarekanotameni,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
    },
    center: [MemberName.ShiraishiMai],
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.KawamuraMahiro,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Sonnabakana,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["Akira Sunset"],
      direct: ["丸山健志"],
    },
    center: [MemberName.HoriMiona],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.KawagoHina,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakadaKana,
        MemberName.NakamotoHimeka,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.HiguchiHina,
        MemberName.FukagawaMai,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Yasashisatoha,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["古川貴浩"],
      arrange: ["古川貴浩"],
    },
    center: [MemberName.HashimotoNanami],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.NakamotoHimeka,
        MemberName.NishinoNanase,
        MemberName.NoujouAmi,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
