import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const TWENTY_FOURTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Yoakemadetsuyogaranakutemoii,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山田裕介"],
      arrange: ["APAZZI"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.EndouSakura],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.KakiHaruka,
        MemberNameKey.EndouSakura,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.YodaYuuki,
      ],
      thirdRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KuboShiori,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bokunokotoshitteru,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中村泰輔"],
      arrange: ["中村泰輔"],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.HoriMiona,
        MemberNameKey.IkutaErika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.YodaYuuki,
      ],
      secondRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KuboShiori,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.ItouRiria,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Romendenshanomachi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "谷地学"],
      direct: ["山岸聖太"],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamashitaMizuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Toshoshitsunokimihe,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["若田部誠"],
      direct: ["伊藤衆人"],
    },
    center: [MemberNameKey.KakehashiSayaka],
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
    title: SongTitle.Tokidokiomoidashitekudasai,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "谷地学"],
      direct: ["頃安祐良"],
    },
    solo: MemberNameKey.SakuraiReika,
  }),

  createSongRaw({
    title: SongTitle.DoMyBestJaimiganai,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["浦島健太", "APAZZI"],
      arrange: ["浦島健太", "APAZZI"],
      direct: ["maxilla"],
    },
    center: [MemberNameKey.IwamotoRenka],
    formations: {
      firstRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamuraReno,
        MemberNameKey.HiguchiHina,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamazakiRena,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bokunoomoikomi,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["野中“まさ”雄一"],
    },
    center: [MemberNameKey.EndouSakura],
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.KakiHaruka,
        MemberNameKey.EndouSakura,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.YodaYuuki,
      ],
      thirdRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KuboShiori,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
];
