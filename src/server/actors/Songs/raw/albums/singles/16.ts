import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const SIXTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Sayonaranoimi,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["若田部誠"],
      direct: ["柳沢翔"],
    },
    center: [MemberName.HashimotoNanami],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.ShiraishiMai,
        MemberName.IkutaErika,
      ],
      secondRow: [
        MemberName.WakatsukiYumi,
        MemberName.MatsumuraSayuri,
        MemberName.HoriMiona,
        MemberName.SaitouAsuka,
        MemberName.EtouMisa,
        MemberName.AkimotoManatsu,
      ],
      thirdRow: [
        MemberName.NakamotoHimeka,
        MemberName.InoueSayuri,
        MemberName.ShinuchiMai,
        MemberName.SakuraiReika,
        MemberName.IkomaRina,
        MemberName.HoshinoMinami,
        MemberName.KitanoHinako,
        MemberName.ItouMarika,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Bulanko,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Hiro Hoashi"],
      arrange: ["Hiro Hoashi"],
      direct: ["伊藤衆人"],
    },
    center: [MemberName.TeradaRanze],
    formations: {
      firstRow: [
        MemberName.KawamuraMahiro,
        MemberName.HiguchiHina,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NoujouAmi,
      ],
      secondRow: [
        MemberName.SaitouYuuri,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.SuzukiAyane,
        MemberName.SaitouChiharu,
      ],
      thirdRow: [
        MemberName.ItouJunna,
        MemberName.WadaMaaya,
        MemberName.ItouKarin,
        MemberName.KawagoHina,
        MemberName.SasakiKotoko,
        MemberName.SagaraIori,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kodokunaaozora,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["aokado"],
      arrange: ["aokado"],
    },
    center: [MemberName.HashimotoNanami],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.KitanoHinako,
        MemberName.SaitouAsuka,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
        MemberName.NakamotoHimeka,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.HoshinoMinami,
        MemberName.HoriMiona,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Anokyoushitsu,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["カワノミチオ"],
      arrange: ["カワノミチオ"],
      direct: ["山岸聖太"],
    },
    formations: {
      firstRow: [MemberName.SaitouAsuka, MemberName.HoriMiona],
    },
  }),
  createSongRaw({
    title: SongTitle.Nidomenokisskara,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "APAZZI"],
      arrange: ["Akira Sunset", "APAZZI"],
      direct: ["中村太洸"],
    },
    unit: "真夏さんリスペクト軍団",
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.SagaraIori,
        MemberName.SuzukiAyane,
        MemberName.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kiminiokuruhanaganai,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Rizz"],
      arrange: ["山田竜平"],
      direct: ["東市篤憲"],
    },
    unit: "サンクエトワール",
    formations: {
      firstRow: [
        MemberName.KitanoHinako,
        MemberName.TeradaRanze,
        MemberName.NakadaKana,
        MemberName.NakamotoHimeka,
        MemberName.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Naimononedari,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["丸谷マナブ"],
      arrange: ["丸谷マナブ", "福田貴史"],
      direct: ["山岸聖太"],
    },
    solo: MemberName.HashimotoNanami,
  }),
];
