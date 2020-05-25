import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
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
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.HoshinoMinami,
      ],
      secondRow: [
        MemberName.ShiraishiMai,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
        MemberName.SakuraiReika,
        MemberName.AkimotoManatsu,
      ],
      thirdRow: [
        MemberName.NoujouAmi,
        MemberName.SaitouAsuka,
        MemberName.WakatsukiYumi,
        MemberName.InoueSayuri,
        MemberName.FukagawaMai,
        MemberName.IchikiRena,
        MemberName.NishinoNanase,
        MemberName.TakayamaKazumi,
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
    center: [MemberName.NakadaKana],
    formations: {
      firstRow: [
        MemberName.SaitouYuuri,
        MemberName.NakadaKana,
        MemberName.EtouMisa,
      ],
      secondRow: [
        MemberName.ItouMarika,
        MemberName.KawagoHina,
        MemberName.HiguchiHina,
        MemberName.ItouNene,
      ],
      thirdRow: [
        MemberName.KawamuraMahiro,
        MemberName.NakamotoHimeka,
        MemberName.HatanakaSeira,
        MemberName.NagashimaSeira,
      ],
      fourthRow: [
        MemberName.MiyazawaSeira,
        MemberName.YamatoRina,
        MemberName.AndouMikumo,
        MemberName.WadaMaaya,
        MemberName.SaitouChiharu,
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
    center: [MemberName.IkomaRina],
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.HoshinoMinami,
      ],
      secondRow: [
        MemberName.ShiraishiMai,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
        MemberName.SakuraiReika,
        MemberName.AkimotoManatsu,
      ],
      thirdRow: [
        MemberName.NoujouAmi,
        MemberName.SaitouAsuka,
        MemberName.WakatsukiYumi,
        MemberName.InoueSayuri,
        MemberName.FukagawaMai,
        MemberName.IchikiRena,
        MemberName.NishinoNanase,
        MemberName.TakayamaKazumi,
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
    center: [MemberName.TakayamaKazumi, MemberName.NoujouAmi],
    formations: {
      firstRow: [
        MemberName.IchikiRena,
        MemberName.InoueSayuri,
        MemberName.SaitouAsuka,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.NoujouAmi,
        MemberName.FukagawaMai,
        MemberName.WakatsukiYumi,
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
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.HoshinoMinami,
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
      firstRow: [MemberName.ShiraishiMai, MemberName.TakayamaKazumi],
    },
  }),
];
