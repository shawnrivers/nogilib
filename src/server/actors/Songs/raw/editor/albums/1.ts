import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FIRST_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Darekahamikata,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["宮坂聡彦"],
      arrange: ["佐々木裕"],
    },
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.SakuraiReika,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kakumeinouma,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["伊勢佳史"],
      arrange: ["伊勢佳史"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bokugairubasho,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
    },
    center: [MemberName.IkutaErika],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.EtouMisa,
        MemberName.SaitouChiharu,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.HoriMiona,
        MemberName.HoshinoMinami,
        MemberName.MatsuiRena,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Anatanotamenihikitai,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["近藤圭一"],
      arrange: ["樫原伸彦"],
    },
    solo: MemberName.IkutaErika,
  }),
  createSongRaw({
    title: SongTitle.Keishasuru,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["須藤哲平", "長谷川湊"],
      arrange: ["佐々木裕"],
    },
    center: [MemberName.KojimaHaruna],
    unit: "こじ坂46",
    formations: {
      firstRow: [
        MemberName.KojimaHaruna,
        MemberName.IkomaRina,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouYuuri,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
        MemberName.NoujouAmi,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Nazonorakugaki,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["片桐周太郎"],
      arrange: ['野中"まさ"雄一'],
    },
    formations: {
      firstRow: [
        MemberName.SaitouAsuka,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Jiyuunokanata,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山田智和"],
      arrange: ["住谷翔平"],
    },
    center: [MemberName.InoueSayuri],
    formations: {
      firstRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.KawamuraMahiro,
        MemberName.KawagoHina,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.ShinuchiMai,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NagashimaSeira,
        MemberName.NakamotoHimeka,
        MemberName.NoujouAmi,
        MemberName.HatanakaSeira,
        MemberName.HiguchiHina,
        MemberName.YamazakiRena,
        MemberName.YamatoRina,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Hitoriyogari,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
    },
    solo: MemberName.NishinoNanase,
  }),
];
