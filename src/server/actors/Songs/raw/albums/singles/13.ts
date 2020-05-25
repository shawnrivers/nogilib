import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const THIRTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.ImaHanashitaidarekagairu,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "APAZZI"],
      arrange: ["Akira Sunset", "APAZZI"],
      direct: ["萩原健太郎"],
    },
    center: [MemberName.ShiraishiMai, MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.NishinoNanase,
        MemberName.ShiraishiMai,
        MemberName.FukagawaMai,
      ],
      secondRow: [
        MemberName.SaitouAsuka,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.IkutaErika,
        MemberName.AkimotoManatsu,
        MemberName.HoshinoMinami,
      ],
      thirdRow: [
        MemberName.SakuraiReika,
        MemberName.WakatsukiYumi,
        MemberName.IkomaRina,
        MemberName.MatsumuraSayuri,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Shittonokenri,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["丸山真由子"],
      arrange: ["丸山真由子"],
      direct: ["井上強"],
    },
    center: [MemberName.HoriMiona, MemberName.NakamotoHimeka],
    formations: {
      firstRow: [
        MemberName.KitanoHinako,
        MemberName.HoriMiona,
        MemberName.NakamotoHimeka,
        MemberName.TeradaRanze,
      ],
      secondRow: [
        MemberName.NakadaKana,
        MemberName.ShinuchiMai,
        MemberName.KawamuraMahiro,
        MemberName.NagashimaSeira,
        MemberName.NoujouAmi,
        MemberName.HiguchiHina,
        MemberName.SaitouChiharu,
        MemberName.SaitouYuuri,
      ],
      thirdRow: [
        MemberName.KawagoHina,
        MemberName.WatanabeMiria,
        MemberName.YamazakiRena,
        MemberName.SasakiKotoko,
        MemberName.SagaraIori,
        MemberName.ItouJunna,
        MemberName.SuzukiAyane,
        MemberName.ItouKarin,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Popipappappa,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "ha-j"],
      arrange: ["Akira Sunset", "ha-j"],
      direct: ["丸山健志"],
    },
    center: [MemberName.ShiraishiMai, MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.NishinoNanase,
        MemberName.ShiraishiMai,
        MemberName.FukagawaMai,
      ],
      secondRow: [
        MemberName.SaitouAsuka,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.IkutaErika,
        MemberName.AkimotoManatsu,
        MemberName.HoshinoMinami,
      ],
      thirdRow: [
        MemberName.SakuraiReika,
        MemberName.WakatsukiYumi,
        MemberName.IkomaRina,
        MemberName.MatsumuraSayuri,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Otonahenochikamichi,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["古川貴浩"],
      arrange: ["古川貴浩"],
      direct: ["湯浅弘章"],
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
    title: SongTitle.Kanashiminowasurekata,
    type: SongType.Selected12,
    creators: {
      lyrics: ["秋元康"],
      compose: ["近藤圭一"],
      arrange: ["久下真音"],
      direct: ["丸山健志"],
    },
    center: [MemberName.IkomaRina],
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.ShinuchiMai,
        MemberName.TakayamaKazumi,
        MemberName.NishinoNanase,
        MemberName.HashimotoNanami,
        MemberName.FukagawaMai,
        MemberName.HoshinoMinami,
        MemberName.MatsumuraSayuri,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Sukima,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset", "Carlos K."],
      arrange: ["Akira Sunset", "Carlos K."],
    },
    center: [MemberName.NishinoNanase],
    formations: {
      firstRow: [
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.SaitouYuuri,
        MemberName.SakuraiReika,
        MemberName.NakadaKana,
        MemberName.NishinoNanase,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
