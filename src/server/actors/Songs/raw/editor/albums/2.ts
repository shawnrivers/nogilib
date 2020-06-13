import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
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
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
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
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
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
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.WadaMaaya,
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
        MemberNameKey.EtouMisa,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
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
    solo: MemberNameKey.NishinoNanase,
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
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
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
    solo: MemberNameKey.IkutaErika,
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
      firstRow: [MemberNameKey.NakamotoHimeka, MemberNameKey.NoujouAmi],
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
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SagaraIori,
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
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
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
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
