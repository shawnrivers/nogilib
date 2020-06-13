import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FOURTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.SeifukunoMannequin,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["百石元"],
      direct: ["池田一真"],
    },
    center: [MemberNameKey.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
      ],
      secondRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.InoueSayuri,
        MemberNameKey.FukagawaMai,
        MemberNameKey.IchikiRena,
        MemberNameKey.NishinoNanase,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.HarunoMelody,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["フジノタカフミ"],
      arrange: ["湯浅篤"],
      direct: ["柿本ケンサク"],
    },
    center: [MemberNameKey.NakadaKana],
    formations: {
      firstRow: [
        MemberNameKey.SaitouYuuri,
        MemberNameKey.NakadaKana,
        MemberNameKey.EtouMisa,
      ],
      secondRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.KawagoHina,
        MemberNameKey.HiguchiHina,
        MemberNameKey.ItouNene,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.NagashimaSeira,
      ],
      fourthRow: [
        MemberNameKey.MiyazawaSeira,
        MemberNameKey.YamatoRina,
        MemberNameKey.AndouMikumo,
        MemberNameKey.WadaMaaya,
        MemberNameKey.SaitouChiharu,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Yubibouenkyou,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["北室龍馬"],
      arrange: ["木村有希"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
      ],
      secondRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.InoueSayuri,
        MemberNameKey.FukagawaMai,
        MemberNameKey.IchikiRena,
        MemberNameKey.NishinoNanase,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Yasashisanaramaniatteiru,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["松田純一"],
      arrange: ["清水武仁"],
    },
    center: [MemberNameKey.TakayamaKazumi, MemberNameKey.NoujouAmi],
    formations: {
      firstRow: [
        MemberNameKey.IchikiRena,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.FukagawaMai,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kokojanaidokoka,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["大藤史"],
      arrange: ["京田誠一"],
      direct: ["岡川太郎"],
    },
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.ShibuyaBlues,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["佐藤嘉風"],
      arrange: ["佐藤嘉風"],
      direct: ["丸山健志"],
    },
    unit: "WHITE HIGH",
    formations: {
      firstRow: [MemberNameKey.ShiraishiMai, MemberNameKey.TakayamaKazumi],
    },
  }),
];
