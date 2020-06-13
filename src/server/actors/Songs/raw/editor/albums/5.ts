import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
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
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.ItouRiria,
        MemberNameKey.InoueSayuri,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.SatouKaede,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YodaYuuki,
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
    solo: MemberNameKey.EtouMisa,
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
    title: SongTitle.Hoozuewotsuitehanemurenai,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Super Mahirock"],
      arrange: ["Huge M"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
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
        MemberNameKey.IkutaErika,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakuraiReika,
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
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ItouKarin,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.TeradaRanze,
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
        MemberNameKey.KitanoHinako,
        MemberNameKey.HoriMiona,
        MemberNameKey.WatanabeMiria,
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
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakamuraReno,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
];
