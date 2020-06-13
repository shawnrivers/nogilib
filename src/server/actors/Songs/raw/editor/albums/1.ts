import { MemberNameKey } from "server/actors/Songs/constants";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { SONGS } from "server/constants/songs";

export const FIRST_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["誰かは味方"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["宮坂聡彦"],
      arrange: ["佐々木裕"],
    },
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["革命の馬"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["伊勢佳史"],
      arrange: ["伊勢佳史"],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["僕がいる場所"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
    },
    center: [MemberNameKey.IkutaErika],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsuiRena,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["あなたのために弾きたい"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["近藤圭一"],
      arrange: ["樫原伸彦"],
    },
    solo: MemberNameKey.IkutaErika,
  }),
  createSongRaw({
    title: SONGS["傾斜する"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["須藤哲平", "長谷川湊"],
      arrange: ["佐々木裕"],
    },
    center: [MemberNameKey.KojimaHaruna],
    unit: "こじ坂46",
    formations: {
      firstRow: [
        MemberNameKey.KojimaHaruna,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NoujouAmi,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["なぞの落書き"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["片桐周太郎"],
      arrange: ['野中"まさ"雄一'],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["自由の彼方"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山田智和"],
      arrange: ["住谷翔平"],
    },
    center: [MemberNameKey.InoueSayuri],
    formations: {
      firstRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KawagoHina,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.HiguchiHina,
        MemberNameKey.YamazakiRena,
        MemberNameKey.YamatoRina,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["ひとりよがり"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
];
