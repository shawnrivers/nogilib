import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FIFTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.HadashideSummer,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["福森秀敏"],
      arrange: ["APAZZI"],
      direct: ["丸山健志"],
    },
    center: [MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.HashimotoNanami,
        MemberName.NishinoNanase,
        MemberName.SaitouAsuka,
        MemberName.ShiraishiMai,
        MemberName.IkutaErika,
      ],
      secondRow: [
        MemberName.TakayamaKazumi,
        MemberName.EtouMisa,
        MemberName.MatsumuraSayuri,
        MemberName.AkimotoManatsu,
        MemberName.SakuraiReika,
      ],
      thirdRow: [
        MemberName.KitanoHinako,
        MemberName.HoshinoMinami,
        MemberName.WakatsukiYumi,
        MemberName.IkomaRina,
        MemberName.HoriMiona,
        MemberName.NakamotoHimeka,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.SecretGravity,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ツキダタダシ"],
      arrange: ["ツキダタダシ"],
      direct: ["山岸聖太"],
    },
    center: [MemberName.HiguchiHina],
    formations: {
      firstRow: [
        MemberName.TeradaRanze,
        MemberName.ItouMarika,
        MemberName.HiguchiHina,
        MemberName.InoueSayuri,
        MemberName.WatanabeMiria,
      ],
      secondRow: [
        MemberName.SaitouChiharu,
        MemberName.SaitouYuuri,
        MemberName.ShinuchiMai,
        MemberName.NakadaKana,
        MemberName.NoujouAmi,
      ],
      thirdRow: [
        MemberName.KawamuraMahiro,
        MemberName.YamazakiRena,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.SuzukiAyane,
        MemberName.WadaMaaya,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.ItouKarin,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bokudakenohikari,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Hiro Hoashi"],
      arrange: ["Hiro Hoashi"],
    },
    center: [MemberName.SaitouAsuka],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.EtouMisa,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakamotoHimeka,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.OffshoreGirl,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "ha-j"],
      arrange: ["Akira Sunset", "ha-j"],
      direct: ["井上強"],
    },
    solo: MemberName.ShiraishiMai,
  }),
  createSongRaw({
    title: SongTitle.Inochinoshinjitsu,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["NA.ZU.NA"],
      arrange: ["NA.ZU.NA"],
      direct: ["中村太洸"],
    },
    solo: MemberName.IkutaErika,
  }),
  createSongRaw({
    title: SongTitle.Hakumaisama,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Ruby"],
      arrange: ["あらケン"],
      direct: ["伊藤衆人"],
    },
    unit: "さゆりんご軍団",
    formations: {
      firstRow: [MemberName.MatsumuraSayuri],
      secondRow: [
        MemberName.SasakiKotoko,
        MemberName.ItouKarin,
        MemberName.TeradaRanze,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Ikuatenonaibokutachi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["大橋莉子"],
      arrange: ["佐々木裕"],
    },
    formations: {
      firstRow: [MemberName.ItouMarika, MemberName.InoueSayuri],
    },
  }),
];
