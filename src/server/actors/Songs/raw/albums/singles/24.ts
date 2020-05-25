import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
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
    center: [MemberName.EndouSakura],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.HoriMiona,
        MemberName.KakiHaruka,
        MemberName.EndouSakura,
        MemberName.TsutsuiAyame,
        MemberName.SaitouAsuka,
      ],
      secondRow: [
        MemberName.YamashitaMizuki,
        MemberName.IkutaErika,
        MemberName.ShiraishiMai,
        MemberName.MatsumuraSayuri,
        MemberName.SakuraiReika,
        MemberName.YodaYuuki,
      ],
      thirdRow: [
        MemberName.UmezawaMinami,
        MemberName.KitanoHinako,
        MemberName.AkimotoManatsu,
        MemberName.KuboShiori,
        MemberName.TakayamaKazumi,
        MemberName.HoshinoMinami,
        MemberName.ShinuchiMai,
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
    center: [MemberName.SaitouAsuka],
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
        MemberName.SaitouAsuka,
        MemberName.HoriMiona,
        MemberName.YamashitaMizuki,
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
    center: [MemberName.KakehashiSayaka],
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
    title: SongTitle.Tokidokiomoidashitekudasai,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "谷地学"],
      direct: ["頃安祐良"],
    },
    solo: MemberName.SakuraiReika,
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
    center: [MemberName.IwamotoRenka],
    formations: {
      firstRow: [
        MemberName.ItouJunna,
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
        MemberName.SakaguchiTamami,
        MemberName.SasakiKotoko,
        MemberName.SatouKaede,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NakamuraReno,
        MemberName.HiguchiHina,
        MemberName.MukaiHazuki,
        MemberName.YamazakiRena,
        MemberName.YoshidaAyanoChristie,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
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
    center: [MemberName.EndouSakura],
    formations: {
      firstRow: [
        MemberName.HoriMiona,
        MemberName.KakiHaruka,
        MemberName.EndouSakura,
        MemberName.TsutsuiAyame,
        MemberName.SaitouAsuka,
      ],
      secondRow: [
        MemberName.YamashitaMizuki,
        MemberName.IkutaErika,
        MemberName.ShiraishiMai,
        MemberName.MatsumuraSayuri,
        MemberName.SakuraiReika,
        MemberName.YodaYuuki,
      ],
      thirdRow: [
        MemberName.UmezawaMinami,
        MemberName.KitanoHinako,
        MemberName.AkimotoManatsu,
        MemberName.KuboShiori,
        MemberName.TakayamaKazumi,
        MemberName.HoshinoMinami,
        MemberName.ShinuchiMai,
      ],
    },
  }),
];
