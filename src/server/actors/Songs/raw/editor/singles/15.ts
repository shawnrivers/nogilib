import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
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
    center: [MemberNameKey.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.HashimotoNanami,
        MemberNameKey.NishinoNanase,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.IkutaErika,
      ],
      secondRow: [
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.EtouMisa,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.KitanoHinako,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoriMiona,
        MemberNameKey.NakamotoHimeka,
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
    center: [MemberNameKey.HiguchiHina],
    formations: {
      firstRow: [
        MemberNameKey.TeradaRanze,
        MemberNameKey.ItouMarika,
        MemberNameKey.HiguchiHina,
        MemberNameKey.InoueSayuri,
        MemberNameKey.WatanabeMiria,
      ],
      secondRow: [
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.NakadaKana,
        MemberNameKey.NoujouAmi,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.YamazakiRena,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.WadaMaaya,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.ItouKarin,
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
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.EtouMisa,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
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
    solo: MemberNameKey.ShiraishiMai,
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
    solo: MemberNameKey.IkutaErika,
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
      firstRow: [MemberNameKey.MatsumuraSayuri],
      secondRow: [
        MemberNameKey.SasakiKotoko,
        MemberNameKey.ItouKarin,
        MemberNameKey.TeradaRanze,
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
      firstRow: [MemberNameKey.ItouMarika, MemberNameKey.InoueSayuri],
    },
  }),
];
