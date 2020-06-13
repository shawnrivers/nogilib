import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/actors/Songs/constants/songType";
import { SONGS } from "server/actors/Songs/constants/songTitle";
import { UNIT_NAMES } from "server/actors/Units/constants/unitName";

export const SECOND_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["きっかけ"].title,
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
    title: SONGS["太陽に口説かれて"].title,
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
    title: SONGS["欲望のリインカーネーション"].title,
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
    title: SONGS["空気感"].title,
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
    title: SONGS["光合成希望"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["吉田博"],
      arrange: ['野中"まさ"雄一'],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
  createSongRaw({
    title: SONGS["Threefold choice"].title,
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
    title: SONGS["低体温のキス"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["中谷あつこ"],
      arrange: ["田上陽一"],
    },
    solo: MemberNameKey.IkutaErika,
  }),
  createSongRaw({
    title: SONGS["失恋したら、顔を洗え!"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["さいとうくにあき"],
      arrange: ["内田充"],
    },
    unit: UNIT_NAMES["乃木團"].name,
    formations: {
      firstRow: [MemberNameKey.NakamotoHimeka, MemberNameKey.NoujouAmi],
    },
  }),
  createSongRaw({
    title: SONGS["かき氷の片想い"].title,
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
    title: SONGS["環状六号線"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["サイトウリョースケ"],
      arrange: ["サイトウリョースケ"],
    },
    unit: UNIT_NAMES["犬メン"].name,
    formations: {
      firstRow: [
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["口約束"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Amber"],
      arrange: ["若田部誠"],
    },
    unit: UNIT_NAMES["女子校カルテット"].name,
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
