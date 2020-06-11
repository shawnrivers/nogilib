import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FIFTH_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Arigachinarenai,
    type: SongType.Lead,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ['野中"まさ"雄一'],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.ItouRiria,
        MemberName.InoueSayuri,
        MemberName.UmezawaMinami,
        MemberName.OozonoMomoko,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.SatouKaede,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.YamashitaMizuki,
        MemberName.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Moshikimigainakereba,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
      direct: [],
    },
    solo: MemberName.EtouMisa,
  }),
  createSongRaw({
    title: SongTitle.KissNoshuriken,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山田智和"],
      arrange: ["住谷翔平"],
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
    title: SongTitle.Hoozuewotsuitehanemurenai,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Super Mahirock"],
      arrange: ["Huge M"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.SaitouYuuri,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bocchitou,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["庄司裕"],
      arrange: ["庄司裕"],
    },
    formations: {
      firstRow: [
        MemberName.IkutaErika,
        MemberName.KuboShiori,
        MemberName.SakuraiReika,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Sayuringoboshuuchuu,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["浦島健太", "菊池博人"],
      arrange: ["浦島健太", "菊池博人"],
    },
    unit: "さゆりんご軍団",
    formations: {
      firstRow: [
        MemberName.MatsumuraSayuri,
        MemberName.ItouKarin,
        MemberName.SasakiKotoko,
        MemberName.TeradaRanze,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Gorugonzora,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["BASEMINT"],
      arrange: ["BASEMINT"],
    },
    formations: {
      firstRow: [
        MemberName.KitanoHinako,
        MemberName.HoriMiona,
        MemberName.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.MousuguZambidensetsu,
    type: SongType.Special,
    creators: {
      lyrics: ["秋元康"],
      compose: ["渡辺剛"],
      arrange: ["渡辺剛"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.ItouJunna,
        MemberName.ItouRiria,
        MemberName.IwamotoRenka,
        MemberName.UmezawaMinami,
        MemberName.OozonoMomoko,
        MemberName.KuboShiori,
        MemberName.SaitouAsuka,
        MemberName.SakaguchiTamami,
        MemberName.SatouKaede,
        MemberName.ShinuchiMai,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NakamuraReno,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MukaiHazuki,
        MemberName.YamashitaMizuki,
        MemberName.YoshidaAyanoChristie,
        MemberName.YodaYuuki,
        MemberName.WatanabeMiria,
      ],
    },
  }),
];
