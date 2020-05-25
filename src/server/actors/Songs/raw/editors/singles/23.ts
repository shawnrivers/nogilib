import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const TWENTY_THIRD_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.SingOut,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Ryota Saito", "TETTA"],
      arrange: ["野中“まさ”雄一"],
      direct: ["池田一真"],
    },
    center: [MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.OozonoMomoko,
        MemberName.HoriMiona,
        MemberName.IkutaErika,
        MemberName.SaitouAsuka,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.YodaYuuki,
      ],
      secondRow: [
        MemberName.UmezawaMinami,
        MemberName.KitanoHinako,
        MemberName.AkimotoManatsu,
        MemberName.KuboShiori,
        MemberName.MatsumuraSayuri,
        MemberName.HoshinoMinami,
        MemberName.SakuraiReika,
      ],
      thirdRow: [
        MemberName.InoueSayuri,
        MemberName.SatouKaede,
        MemberName.SuzukiAyane,
        MemberName.IwamotoRenka,
        MemberName.SakaguchiTamami,
        MemberName.WatanabeMiria,
        MemberName.ItouRiria,
        MemberName.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kassouro,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["CHOCOLATE MIX"],
      arrange: ["CHOCOLATE MIX"],
      direct: ["maxilla"],
    },
    center: [MemberName.TeradaRanze],
    formations: {
      firstRow: [
        MemberName.ItouJunna,
        MemberName.SasakiKotoko,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NakamuraReno,
        MemberName.HiguchiHina,
        MemberName.MukaiHazuki,
        MemberName.YamazakiRena,
        MemberName.YoshidaAyanoChristie,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Noyounasonzai,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "APAZZI"],
      arrange: ["Akira Sunset", "APAZZI"],
      direct: ["伊藤衆人"],
    },
    formations: {
      firstRow: [MemberName.SaitouAsuka, MemberName.ShiraishiMai],
    },
  }),
  createSongRaw({
    title: SongTitle.AmILoving,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山田智和"],
      arrange: ["APAZZI"],
      direct: [],
    },
    formations: {
      firstRow: [
        MemberName.KitanoHinako,
        MemberName.SuzukiAyane,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Heikousen,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["近藤圭一"],
      arrange: ["近藤圭一"],
      direct: ["泉田岳"],
    },
    formations: {
      firstRow: [
        MemberName.IwamotoRenka,
        MemberName.OozonoMomoko,
        MemberName.KuboShiori,
        MemberName.SakaguchiTamami,
        MemberName.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Yonbanmenohikari,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "谷地学"],
      direct: ["月田茂"],
    },
    center: [MemberName.EndouSakura],
    formations: {
      firstRow: [
        MemberName.EndouSakura,
        MemberName.KakiHaruka,
        MemberName.KakehashiSayaka,
        MemberName.KanagawaSaya,
        MemberName.KitagawaYuri,
        MemberName.ShibataYuna,
        MemberName.SeimiyaRei,
        MemberName.TamuraMayu,
        MemberName.TsutsuiAyame,
        MemberName.HayakawaSeira,
        MemberName.YakuboMio,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Aimai,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["doubleglass"],
      arrange: ["doubleglass"],
    },
    unit: "からあげ姉妹",
    formations: {
      firstRow: [MemberName.IkutaErika, MemberName.MatsumuraSayuri],
    },
  }),
];
