import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const TWENTY_FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Shiawasenohogoshoku,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["MASANORI URA"],
      arrange: ["武藤星児"],
      direct: ["池田一真"],
    },
    center: [MemberName.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.SaitouAsuka,
        MemberName.IkutaErika,
        MemberName.ShiraishiMai,
        MemberName.MatsumuraSayuri,
        MemberName.HoshinoMinami,
      ],
      secondRow: [
        MemberName.InoueSayuri,
        MemberName.WadaMaaya,
        MemberName.TakayamaKazumi,
        MemberName.AkimotoManatsu,
        MemberName.HiguchiHina,
        MemberName.NakadaKana,
      ],
      thirdRow: [
        MemberName.KakiHaruka,
        MemberName.ShinuchiMai,
        MemberName.YamashitaMizuki,
        MemberName.KuboShiori,
        MemberName.HoriMiona,
        MemberName.OozonoMomoko,
        MemberName.EndouSakura,
        MemberName.IwamotoRenka,
        MemberName.YodaYuuki,
        MemberName.KitanoHinako,
        MemberName.UmezawaMinami,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.SayonaraStayWithMe,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["シライシ紗トリ"],
      arrange: ["シライシ紗トリ"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.SaitouAsuka,
        MemberName.MatsumuraSayuri,
        MemberName.KuboShiori,
        MemberName.YodaYuuki,
        MemberName.EndouSakura,
        MemberName.KakiHaruka,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Jaane,
    type: SongType.Solo,
    creators: {
      lyrics: ["白石麻衣"],
      compose: ["浦島健太", "H.Shing"],
      arrange: ["菊池博人"],
      direct: ["湯浅弘章"],
    },
    solo: MemberName.ShiraishiMai,
  }),
  createSongRaw({
    title: SongTitle.Anastasia,
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中村泰輔"],
      arrange: ["中村泰輔"],
      direct: ["伊藤衆人"],
    },
    formations: {
      firstRow: [
        MemberName.ItouJunna,
        MemberName.KitanoHinako,
        MemberName.SasakiKotoko,
        MemberName.ShinuchiMai,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.HoriMiona,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.MainichigaBrandNewDay,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["APAZZI"],
      arrange: ["APAZZI"],
      direct: ["横堀光範"],
    },
    formations: {
      firstRow: [
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
        MemberName.UmezawaMinami,
        MemberName.OozonoMomoko,
        MemberName.KuboShiori,
        MemberName.SakaguchiTamami,
        MemberName.SatouKaede,
        MemberName.NakamuraReno,
        MemberName.MukaiHazuki,
        MemberName.YamashitaMizuki,
        MemberName.YoshidaAyanoChristie,
        MemberName.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.ISee,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["youth case"],
      arrange: ["佐々木博史"],
      direct: ["神谷雄貴"],
    },
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
    title: SongTitle.FantasticSanshokupan,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ジンツチハシ"],
      arrange: ["ジンツチハシ"],
    },
    formations: {
      firstRow: [
        MemberName.SaitouAsuka,
        MemberName.UmezawaMinami,
        MemberName.YamashitaMizuki,
      ],
    },
  }),
];
