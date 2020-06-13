import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/actors/Songs/constants/songType";
import { FukujinType } from "server/actors/Cds/Singles/constants/fukujinType";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SongTitle, SONGS } from "server/actors/Songs/constants/songTitle";

export const TWENTY_FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["しあわせの保護色"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["MASANORI URA"],
      arrange: ["武藤星児"],
      direct: ["池田一真"],
    },
    center: [MemberNameKey.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.HoshinoMinami,
      ],
      secondRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.WadaMaaya,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
      ],
      thirdRow: [
        MemberNameKey.KakiHaruka,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.HoriMiona,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.EndouSakura,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.YodaYuuki,
        MemberNameKey.KitanoHinako,
        MemberNameKey.UmezawaMinami,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["サヨナラ Stay with me"].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["シライシ紗トリ"],
      arrange: ["シライシ紗トリ"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.KuboShiori,
        MemberNameKey.YodaYuuki,
        MemberNameKey.EndouSakura,
        MemberNameKey.KakiHaruka,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["じゃあね。"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["白石麻衣"],
      compose: ["浦島健太", "H.Shing"],
      arrange: ["菊池博人"],
      direct: ["湯浅弘章"],
    },
    solo: MemberNameKey.ShiraishiMai,
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
        MemberNameKey.ItouJunna,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["毎日がBrand new day"].title,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["APAZZI"],
      arrange: ["APAZZI"],
      direct: ["横堀光範"],
    },
    formations: {
      firstRow: [
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["I see…"].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["youth case"],
      arrange: ["佐々木博史"],
      direct: ["神谷雄貴"],
    },
    formations: {
      firstRow: [
        MemberNameKey.EndouSakura,
        MemberNameKey.KakiHaruka,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.KanagawaSaya,
        MemberNameKey.KitagawaYuri,
        MemberNameKey.ShibataYuna,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TamuraMayu,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.YakuboMio,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["ファンタスティック三色パン"].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ジンツチハシ"],
      arrange: ["ジンツチハシ"],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
      ],
    },
  }),
];
