import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const SECOND_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Kikkake,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["杉山勝彦"],
      arrange: ["杉山勝彦", "有木竜郎"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
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
    title: SongTitle.Taiyounikudokarete,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["フジノタカフミ"],
      arrange: ["フジノタカフミ"],
    },
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.IkutaErika,
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
        MemberName.EtouMisa,
        MemberName.SaitouAsuka,
        MemberName.SakuraiReika,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
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
    title: SongTitle.YokubouReincarnation,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康", "本山清治"],
      compose: ["渡辺未来"],
      arrange: ["渡辺未来"],
    },
    formations: {
      firstRow: [
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.SaitouYuuri,
        MemberName.NakadaKana,
        MemberName.NakamotoHimeka,
        MemberName.NoujouAmi,
        MemberName.HiguchiHina,
        MemberName.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kuukikann,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["DR QUEENBEE"],
      arrange: ["DR QUEENBEE"],
    },
    formations: {
      firstRow: [
        MemberName.EtouMisa,
        MemberName.ShiraishiMai,
        MemberName.TakayamaKazumi,
        MemberName.HashimotoNanami,
        MemberName.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kougouseikibou,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["吉田博"],
      arrange: ['野中"まさ"雄一'],
    },
    solo: MemberName.NishinoNanase,
  }),
  createSongRaw({
    title: SongTitle.ThreefoldChoice,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["古川貴浩"],
      arrange: ["古川貴浩"],
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
    title: SongTitle.TeitaionnoKiss,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中谷あつこ"],
      arrange: ["田上陽一"],
    },
    solo: MemberName.IkutaErika,
  }),
  createSongRaw({
    title: SongTitle.ShitsurenshitaraKaowoarae,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["さいとうくにあき"],
      arrange: ["内田充"],
    },
    unit: "乃木團",
    formations: {
      firstRow: [MemberName.NakamotoHimeka, MemberName.NoujouAmi],
    },
  }),
  createSongRaw({
    title: SongTitle.Kakigoorinokataomoi,
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["白須賀悟"],
      arrange: ["白須賀悟"],
    },
    formations: {
      firstRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.KitanoHinako,
        MemberName.SagaraIori,
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
    title: SongTitle.Kanjyourokugousen,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["サイトウリョースケ"],
      arrange: ["サイトウリョースケ"],
    },
    unit: "犬メン",
    formations: {
      firstRow: [
        MemberName.IkomaRina,
        MemberName.ItouMarika,
        MemberName.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Kuchiyakusoku,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Amber"],
      arrange: ["若田部誠"],
    },
    unit: "女子校カルテット",
    formations: {
      firstRow: [
        MemberName.AkimotoManatsu,
        MemberName.SakuraiReika,
        MemberName.NakadaKana,
        MemberName.WakatsukiYumi,
      ],
    },
  }),
];
