import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.NatsunoFreeAndEasy,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["井上トモノリ"],
      arrange: ["橋本幸太"],
      direct: ["丸山健志"],
    },
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.MatsuiRena,
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
      secondRow: [
        MemberName.WakatsukiYumi,
        MemberName.AkimotoManatsu,
        MemberName.SakuraiReika,
        MemberName.FukagawaMai,
        MemberName.IkomaRina,
      ],
      thirdRow: [
        MemberName.EtouMisa,
        MemberName.InoueSayuri,
        MemberName.SaitouYuuri,
        MemberName.HoshinoMinami,
        MemberName.YamatoRina,
        MemberName.HoriMiona,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kokoniiruriyuu,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["長谷川湊"],
      arrange: ["Carlos K."],
      direct: ["近藤大介"],
    },
    center: [MemberName.ItouMarika],
    formations: {
      firstRow: [
        MemberName.KawagoHina,
        MemberName.SaitouAsuka,
        MemberName.ItouMarika,
        MemberName.HiguchiHina,
        MemberName.WadaMaaya,
      ],
      secondRow: [
        MemberName.NagashimaSeira,
        MemberName.NakadaKana,
        MemberName.NoujouAmi,
        MemberName.NakamotoHimeka,
        MemberName.KawamuraMahiro,
      ],
      thirdRow: [
        MemberName.SaitouChiharu,
        MemberName.KitanoHinako,
        MemberName.HatanakaSeira,
        MemberName.ItouNene,
        MemberName.IchikiRena,
        MemberName.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Nanimodekizunisobaniiru,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["角野寿和"],
      arrange: ["京田誠一"],
    },
    center: [MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.MatsuiRena,
        MemberName.ShiraishiMai,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
      secondRow: [
        MemberName.WakatsukiYumi,
        MemberName.AkimotoManatsu,
        MemberName.SakuraiReika,
        MemberName.FukagawaMai,
        MemberName.IkomaRina,
      ],
      thirdRow: [
        MemberName.EtouMisa,
        MemberName.InoueSayuri,
        MemberName.SaitouYuuri,
        MemberName.HoshinoMinami,
        MemberName.YamatoRina,
        MemberName.HoriMiona,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Sonosakinodeguchi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Carlos K."],
      arrange: ["Carlos K."],
      direct: ["中村太洸"],
    },
    center: [MemberName.ShiraishiMai],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.EtouMisa,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.MatsuiRena,
        MemberName.MatsumuraSayuri,
        MemberName.FukagawaMai,
        MemberName.YamatoRina,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.MukuchinaLion,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Shusui", "ヒロイズム"],
      arrange: ["Shusui", "ヒロイズム"],
      direct: ["湯浅弘章"],
    },
    center: [MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.IkomaRina,
        MemberName.InoueSayuri,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.NishinoNanase,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bokugaikanakyadaregaikunda,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中土智博"],
      arrange: ["中土智博"],
    },
    center: [MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.NakadaKana,
        MemberName.NishinoNanase,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
