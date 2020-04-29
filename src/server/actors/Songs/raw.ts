import { SongRaw, SongsRawArray } from "server/actors/Songs/models";
import { SONGS } from "server/constants/titles";
import { SongType, FukujinType } from "server/utils/constants";
import { MemberName } from "server/constants/names";

// SINGLE SONGS

// 25th single
const hogoshoku: SongRaw = {
  title: SONGS["しあわせの保護色"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["MASANORI URA"],
    arrange: ["武藤星児"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.IkutaErika,
      MemberName.ShiraishiMai,
      MemberName.MatsumuraSayuri,
      MemberName.HoshinoMinami,
    ],
    secondRow: [
      MemberName.InoueSayuri,
      MemberName.WadaMaaya,
      MemberName.TakayamaKazumi,
      MemberName.AkimotoManatsu,
      MemberName.HiguchiHina,
      MemberName.NakadaKana,
    ],
    thirdRow: [
      MemberName.KakiHaruka,
      MemberName.ShinuchiMai,
      MemberName.YamashitaMizuki,
      MemberName.KuboShiori,
      MemberName.HoriMiona,
      MemberName.OozonoMomoko,
      MemberName.EndouSakura,
      MemberName.IwamotoRenka,
      MemberName.YodaYuuki,
      MemberName.KitanoHinako,
      MemberName.UmezawaMinami,
    ],
    fourthRow: [],
  },
};

const staywithme: SongRaw = {
  title: SONGS["サヨナラ Stay with me"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.SaitouAsuka,
      MemberName.MatsumuraSayuri,
      MemberName.KuboShiori,
      MemberName.YodaYuuki,
      MemberName.EndouSakura,
      MemberName.KakiHaruka,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const jaane: SongRaw = {
  title: SONGS["じゃあね。"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["白石麻衣"],
    compose: ["浦島健太", "H.Shing"],
    arrange: ["菊池博人"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const anastasia: SongRaw = {
  title: SONGS["アナスターシャ"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中村泰輔"],
    arrange: ["中村泰輔"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouJunna,
      MemberName.KitanoHinako,
      MemberName.SasakiKotoko,
      MemberName.ShinuchiMai,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.HoriMiona,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const brandnewday: SongRaw = {
  title: SONGS["毎日がBrand new day"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["APAZZI"],
    arrange: ["APAZZI"],
    direct: ["横堀光範"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SakaguchiTamami,
      MemberName.SatouKaede,
      MemberName.NakamuraReno,
      MemberName.MukaiHazuki,
      MemberName.YamashitaMizuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const isee: SongRaw = {
  title: SONGS["I see…"].title,
  musicVideo: "",
  type: SongType.FourthGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["youth case"],
    arrange: ["佐々木博史"],
    direct: ["神谷雄貴"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const fantastic: SongRaw = {
  title: SONGS["ファンタスティック三色パン"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ジンツチハシ"],
    arrange: ["ジンツチハシ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.UmezawaMinami,
      MemberName.YamashitaMizuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 24th single

const yoakemade: SongRaw = {
  title: SONGS["夜明けまで強がらなくてもいい"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田裕介"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.EndouSakura],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const bokunokoto: SongRaw = {
  title: SONGS["僕のこと、知ってる?"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中村泰輔"],
    arrange: ["中村泰輔"],
    direct: [],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const romendensha: SongRaw = {
  title: SONGS["路面電車の街"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "谷地学"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.HoriMiona,
      MemberName.YamashitaMizuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const toshoshitsu: SongRaw = {
  title: SONGS["図書室の君へ"].title,
  musicVideo: "",
  type: SongType.FourthGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["若田部誠"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberName.KakehashiSayaka],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const tokidokiomoidashite: SongRaw = {
  title: SONGS["時々 思い出してください"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "谷地学"],
    direct: ["頃安祐良"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.SakuraiReika,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.SakuraiReika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const domybest: SongRaw = {
  title: SONGS["～Do my best～じゃ意味はない"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["浦島健太", "APAZZI"],
    arrange: ["浦島健太", "APAZZI"],
    direct: ["maxilla"],
  },
  performers: {
    center: [MemberName.IwamotoRenka],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const bokunoomoikomi: SongRaw = {
  title: SONGS["僕の思い込み"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["野中“まさ”雄一"],
    direct: [],
  },
  performers: {
    center: [MemberName.EndouSakura],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

// 23rd single

const singout: SongRaw = {
  title: SONGS["Sing Out!"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ryota Saito", "TETTA"],
    arrange: ["野中“まさ”雄一"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const kassouro: SongRaw = {
  title: SONGS["滑走路"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["CHOCOLATE MIX"],
    arrange: ["CHOCOLATE MIX"],
    direct: ["maxilla"],
  },
  performers: {
    center: [MemberName.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouJunna,
      MemberName.SasakiKotoko,
      MemberName.TeradaRanze,
      MemberName.NakadaKana,
      MemberName.NakamuraReno,
      MemberName.HiguchiHina,
      MemberName.MukaiHazuki,
      MemberName.YamazakiRena,
      MemberName.YoshidaAyanoChristie,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const noyounasonzai: SongRaw = {
  title: SONGS["のような存在"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.SaitouAsuka, MemberName.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const amiloving: SongRaw = {
  title: SONGS["Am I Loving?"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.KitanoHinako,
      MemberName.SuzukiAyane,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const heikousen: SongRaw = {
  title: SONGS["平行線"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["近藤圭一"],
    direct: ["泉田岳"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IwamotoRenka,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SakaguchiTamami,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const yonbanmenohikari: SongRaw = {
  title: SONGS["4番目の光"].title,
  musicVideo: "",
  type: SongType.FourthGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "谷地学"],
    direct: ["月田茂"],
  },
  performers: {
    center: [MemberName.EndouSakura],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const aimai: SongRaw = {
  title: SONGS["曖昧"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["doubleglass"],
    arrange: ["doubleglass"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "からあげ姉妹",
  },
  formations: {
    firstRow: [MemberName.IkutaErika, MemberName.MatsumuraSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 22nd single

const songKaerimichi: SongRaw = {
  title: SONGS["帰り道は遠回りしたくなる"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡邉俊彦"],
    arrange: ["渡邉俊彦", "早川博隆"],
    direct: ["関和亮"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.UmezawaMinami,
      MemberName.YamashitaMizuki,
      MemberName.SaitouAsuka,
      MemberName.NishinoNanase,
      MemberName.ShiraishiMai,
      MemberName.IkutaErika,
      MemberName.YodaYuuki,
    ],
    secondRow: [
      MemberName.EtouMisa,
      MemberName.AkimotoManatsu,
      MemberName.HoriMiona,
      MemberName.WakatsukiYumi,
      MemberName.HoshinoMinami,
      MemberName.SakuraiReika,
      MemberName.MatsumuraSayuri,
    ],
    thirdRow: [
      MemberName.SaitouYuuri,
      MemberName.InoueSayuri,
      MemberName.SatouKaede,
      MemberName.OozonoMomoko,
      MemberName.ItouRiria,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songNichijo: SongRaw = {
  title: SONGS["日常"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "野口大志"],
    arrange: ["Akira Sunset", "野口大志"],
    direct: ["今泉力哉"],
  },
  performers: {
    center: [MemberName.KitanoHinako],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SuzukiAyane,
      MemberName.HiguchiHina,
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.IwamotoRenka,
    ],
    secondRow: [
      MemberName.SakaguchiTamami,
      MemberName.YamazakiRena,
      MemberName.KuboShiori,
      MemberName.NakadaKana,
      MemberName.WatanabeMiria,
      MemberName.MukaiHazuki,
    ],
    thirdRow: [
      MemberName.ItouJunna,
      MemberName.WadaMaaya,
      MemberName.NakamuraReno,
      MemberName.KawagoHina,
      MemberName.ItouKarin,
      MemberName.SasakiKotoko,
      MemberName.YoshidaAyanoChristie,
    ],
    fourthRow: [],
  },
};

const songKyaraban: SongRaw = {
  title: SONGS["キャラバンは眠らない"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["CottON"],
    arrange: ["CottON"],
    direct: ["横堀光範"],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.KitanoHinako,
      MemberName.KuboShiori,
      MemberName.SaitouAsuka,
      MemberName.SatouKaede,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.HiguchiHina,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTsuduku: SongRaw = {
  title: SONGS["つづく"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["若田部誠"],
    arrange: ["若田部誠"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKokuhakunojunban: SongRaw = {
  title: SONGS["告白の順番"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["安部純"],
    arrange: ["安部純"],
    direct: ["荒船泰廣"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "女子校カルテット",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
      MemberName.NakadaKana,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songChopinnousotsuki: SongRaw = {
  title: SONGS["ショパンの嘘つき"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山本加津彦"],
    arrange: ["山本加津彦"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.ShiraishiMai,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShiritaikoto: SongRaw = {
  title: SONGS["知りたいこと"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["佐々木裕"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.HoshinoMinami,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 21st single

const songJikochu: SongRaw = {
  title: SONGS["ジコチューで行こう!"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ナスカ"],
    arrange: ['野中"まさ"雄一'],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.YodaYuuki,
      MemberName.NishinoNanase,
      MemberName.SaitouAsuka,
      MemberName.ShiraishiMai,
      MemberName.HoriMiona,
      MemberName.YamashitaMizuki,
    ],
    secondRow: [
      MemberName.AkimotoManatsu,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.UmezawaMinami,
      MemberName.IwamotoRenka,
      MemberName.MatsumuraSayuri,
      MemberName.SakuraiReika,
    ],
    thirdRow: [
      MemberName.TakayamaKazumi,
      MemberName.SaitouYuuri,
      MemberName.WakatsukiYumi,
      MemberName.SuzukiAyane,
      MemberName.HoshinoMinami,
      MemberName.ShinuchiMai,
      MemberName.InoueSayuri,
    ],
    fourthRow: [],
  },
};

const songSankakunoakichi: SongRaw = {
  title: SONGS["三角の空き地"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiroki"],
    arrange: ["Yasutaka.Ishio"],
    direct: ["月田茂"],
  },
  performers: {
    center: [MemberName.NakadaKana],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HiguchiHina,
      MemberName.NakadaKana,
      MemberName.ItouRiria,
    ],
    secondRow: [
      MemberName.YamazakiRena,
      MemberName.SakaguchiTamami,
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.WatanabeMiria,
      MemberName.SatouKaede,
    ],
    thirdRow: [
      MemberName.YoshidaAyanoChristie,
      MemberName.WadaMaaya,
      MemberName.KawagoHina,
      MemberName.NoujouAmi,
      MemberName.NakamuraReno,
      MemberName.ItouKarin,
      MemberName.SasakiKotoko,
      MemberName.MukaiHazuki,
      MemberName.ItouJunna,
    ],
    fourthRow: [],
  },
};

const songSoratobira: SongRaw = {
  title: SONGS["空扉"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["FURUTA", "Dr.Lilcom"],
    arrange: ["Dr.Lilcom"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberName.UmezawaMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.InoueSayuri,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.SaitouYuuri,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.SuzukiAyane,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songJibunjanaikanji: SongRaw = {
  title: SONGS["自分じゃない感じ"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: [],
  },
  performers: {
    center: [MemberName.YamashitaMizuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.SakaguchiTamami,
      MemberName.SatouKaede,
      MemberName.NakamuraReno,
      MemberName.MukaiHazuki,
      MemberName.YamashitaMizuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKokoronomonologue: SongRaw = {
  title: SONGS["心のモノローグ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: ["英勉"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.ShiraishiMai, MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songChikyugamaruinara: SongRaw = {
  title: SONGS["地球が丸いなら"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山下孝之"],
    arrange: ["山下孝之"],
    direct: ["沖田修一"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.OozonoMomoko,
      MemberName.SaitouAsuka,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnnanisukidattanoni: SongRaw = {
  title: SONGS["あんなに好きだったのに..."].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["木下めろん"],
    arrange: ["木下めろん"],
    direct: [],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.InoueSayuri,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.SaitouAsuka,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.SuzukiAyane,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 20th single

const songSyncronicity: SongRaw = {
  title: SONGS["シンクロニシティ"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.YamashitaMizuki,
      MemberName.HoriMiona,
      MemberName.IkutaErika,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.SaitouAsuka,
      MemberName.YodaYuuki,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.MatsumuraSayuri,
      MemberName.KuboShiori,
      MemberName.IkomaRina,
      MemberName.OozonoMomoko,
      MemberName.EtouMisa,
      MemberName.AkimotoManatsu,
    ],
    thirdRow: [
      MemberName.InoueSayuri,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.HoshinoMinami,
      MemberName.WakatsukiYumi,
      MemberName.HiguchiHina,
      MemberName.TeradaRanze,
    ],
    fourthRow: [],
  },
};

const songAtarashiisekai: SongRaw = {
  title: SONGS["新しい世界"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["横堀光範"],
  },
  performers: {
    center: [MemberName.SuzukiAyane],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.UmezawaMinami,
      MemberName.WatanabeMiria,
      MemberName.NakadaKana,
      MemberName.SuzukiAyane,
      MemberName.SaitouYuuri,
      MemberName.YamazakiRena,
      MemberName.ItouRiria,
    ],
    secondRow: [
      MemberName.MukaiHazuki,
      MemberName.ItouKarin,
      MemberName.IwamotoRenka,
      MemberName.ItouJunna,
      MemberName.SakaguchiTamami,
      MemberName.SaitouChiharu,
      MemberName.SatouKaede,
    ],
    thirdRow: [
      MemberName.NoujouAmi,
      MemberName.KawagoHina,
      MemberName.YoshidaAyanoChristie,
      MemberName.SasakiKotoko,
      MemberName.NakamuraReno,
      MemberName.WadaMaaya,
      MemberName.SagaraIori,
    ],
    fourthRow: [],
  },
};

const songAgainst: SongRaw = {
  title: SONGS["Against"].title,
  musicVideo: "",
  type: SongType.FirstGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.KawagoHina,
      MemberName.SaitouAsuka,
      MemberName.SaitouChiharu,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HiguchiHina,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKumoninarebaii: SongRaw = {
  title: SONGS["雲になればいい"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "藤桜梨",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.EtouMisa,
      MemberName.SakuraiReika,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songScoutman: SongRaw = {
  title: SONGS["スカウトマン"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberName.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.ShinuchiMai,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.HoriMiona,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTokitokimekimeki: SongRaw = {
  title: SONGS["トキトキメキメキ"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山聡", "足立優"],
    arrange: ["中山聡", "足立優"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberName.IwamotoRenka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SakaguchiTamami,
      MemberName.SatouKaede,
      MemberName.NakamuraReno,
      MemberName.MukaiHazuki,
      MemberName.YamashitaMizuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKotodamaho: SongRaw = {
  title: SONGS["言霊砲"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ryota Saito", "TomoLow"],
    arrange: ["Ryota Saito", "TomoLow"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "いもうと坂",
  },
  formations: {
    firstRow: [
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 19th single

const songItsukadekirukara: SongRaw = {
  title: SONGS["いつかできるから今日できる"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "京田誠一"],
    arrange: ["Akira Sunset", "京田誠一"],
    direct: ["高橋栄樹"],
  },
  performers: {
    center: [MemberName.NishinoNanase, MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HoriMiona,
      MemberName.NishinoNanase,
      MemberName.SaitouAsuka,
      MemberName.ShiraishiMai,
    ],
    secondRow: [
      MemberName.WakatsukiYumi,
      MemberName.InoueSayuri,
      MemberName.MatsumuraSayuri,
      MemberName.IkutaErika,
      MemberName.ItouMarika,
      MemberName.SakuraiReika,
      MemberName.EtouMisa,
    ],
    thirdRow: [
      MemberName.ShinuchiMai,
      MemberName.SaitouYuuri,
      MemberName.HoshinoMinami,
      MemberName.IkomaRina,
      MemberName.AkimotoManatsu,
      MemberName.KitanoHinako,
      MemberName.NakadaKana,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songMyrule: SongRaw = {
  title: SONGS["My rule"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["藤田卓也"],
    arrange: ["藤田卓也"],
    direct: ["林希", "古屋蔵人"],
  },
  performers: {
    center: [MemberName.HiguchiHina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.WatanabeMiria,
      MemberName.HiguchiHina,
      MemberName.TeradaRanze,
    ],
    secondRow: [
      MemberName.NoujouAmi,
      MemberName.SuzukiAyane,
      MemberName.YamazakiRena,
      MemberName.SaitouChiharu,
    ],
    thirdRow: [
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.ItouKarin,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.WadaMaaya,
      MemberName.ItouJunna,
    ],
    fourthRow: [],
  },
};

const songFumensho: SongRaw = {
  title: SONGS["不眠症"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大貫和紀", "河原レオ", "高木龍一"],
    arrange: ["大貫和紀", "河原レオ", "高木龍一"],
    direct: [],
  },
  performers: {
    center: [MemberName.KuboShiori, MemberName.YamashitaMizuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SaitouAsuka,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMaaiika: SongRaw = {
  title: SONGS["まあいいか?"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HRK"],
    arrange: ["原広明"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.AkimotoManatsu, MemberName.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShitsurenosojinin: SongRaw = {
  title: SONGS["失恋お掃除人"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
    arrange: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "若様軍団",
  },
  formations: {
    firstRow: [
      MemberName.UmezawaMinami,
      MemberName.SakaguchiTamami,
      MemberName.YamashitaMizuki,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokunoshodo: SongRaw = {
  title: SONGS["僕の衝動"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["石井伸昂"],
    arrange: ["石井伸昂"],
    direct: ["荒船泰廣"],
  },
  performers: {
    center: [MemberName.ItouRiria],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SakaguchiTamami,
      MemberName.SatouKaede,
      MemberName.NakamuraReno,
      MemberName.YamashitaMizuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAtarashiikafun: SongRaw = {
  title: SONGS["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["新田目翔"],
    arrange: ["若田部誠"],
    direct: ["荒船泰廣"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.IkutaErika, MemberName.KuboShiori],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 18th single

const songNigemizu: SongRaw = {
  title: SONGS["逃げ水"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["谷村庸平"],
    arrange: ["谷村庸平"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [MemberName.OozonoMomoko, MemberName.YodaYuuki],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.ShiraishiMai,
      MemberName.OozonoMomoko,
      MemberName.YodaYuuki,
      MemberName.NishinoNanase,
      MemberName.HoriMiona,
    ],
    secondRow: [
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.IkutaErika,
      MemberName.AkimotoManatsu,
      MemberName.EtouMisa,
      MemberName.TakayamaKazumi,
    ],
    thirdRow: [
      MemberName.ItouMarika,
      MemberName.ShinuchiMai,
      MemberName.IkomaRina,
      MemberName.SakuraiReika,
      MemberName.WakatsukiYumi,
      MemberName.InoueSayuri,
    ],
    fourthRow: [],
  },
};

const songUnder: SongRaw = {
  title: SONGS["アンダー"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["白土亨"],
    arrange: ["遠藤ナオキ"],
    direct: ["金森孝宏"],
  },
  performers: {
    center: [MemberName.NakamotoHimeka, MemberName.KitanoHinako],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HiguchiHina,
      MemberName.WatanabeMiria,
      MemberName.NakamotoHimeka,
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.SaitouYuuri,
    ],
    secondRow: [
      MemberName.NakadaKana,
      MemberName.YamazakiRena,
      MemberName.SuzukiAyane,
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.SaitouChiharu,
    ],
    thirdRow: [
      MemberName.NoujouAmi,
      MemberName.SagaraIori,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SasakiKotoko,
      MemberName.WadaMaaya,
    ],
    fourthRow: [],
  },
};

const songOnnahahitorija: SongRaw = {
  title: SONGS["女は一人じゃ眠れない"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小形誠"],
    arrange: ["高橋浩一郎"],
    direct: ["萩原健太郎"],
  },
  performers: {
    center: [MemberName.OozonoMomoko, MemberName.YodaYuuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.SaitouAsuka,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.YodaYuuki,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHitonatsu: SongRaw = {
  title: SONGS["ひと夏の長さより…"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["aokado"],
    arrange: ["aokado"],
    direct: [],
  },
  performers: {
    center: [MemberName.AkimotoManatsu, MemberName.MatsumuraSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.SaitouAsuka,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.YodaYuuki,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songLiveshin: SongRaw = {
  title: SONGS["ライブ神"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberName.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.TeradaRanze,
      MemberName.HoriMiona,
      MemberName.KitanoHinako,
    ],
    secondRow: [
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.SuzukiAyane,
      MemberName.ShinuchiMai,
    ],
    thirdRow: [
      MemberName.ItouJunna,
      MemberName.ItouKarin,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
    ],
    fourthRow: [],
  },
};

const songMirainokotae: SongRaw = {
  title: SONGS["未来の答え"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["板垣祐介"],
    arrange: ["板垣祐介"],
    direct: ["福島真希"],
  },
  performers: {
    center: [MemberName.KuboShiori, MemberName.YamashitaMizuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.UmezawaMinami,
      MemberName.YamashitaMizuki,
      MemberName.KuboShiori,
      MemberName.ItouRiria,
    ],
    secondRow: [
      MemberName.IwamotoRenka,
      MemberName.OozonoMomoko,
      MemberName.YodaYuuki,
      MemberName.SakaguchiTamami,
    ],
    thirdRow: [
      MemberName.NakamuraReno,
      MemberName.MukaiHazuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.SatouKaede,
    ],
    fourthRow: [],
  },
};

const songNaitatteii: SongRaw = {
  title: SONGS["泣いたっていいじゃないか?"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["K-WONDER", "SAS3"],
    arrange: ["遠藤ナオキ"],
    direct: [],
  },
  performers: {
    center: [MemberName.TakayamaKazumi],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.OozonoMomoko,
      MemberName.SaitouAsuka,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.YodaYuuki,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 17th single

const songInfluencer: SongRaw = {
  title: SONGS["インフルエンサー"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["すみだしんや"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.NishinoNanase, MemberName.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.HoriMiona,
      MemberName.NishinoNanase,
      MemberName.ShiraishiMai,
      MemberName.SaitouAsuka,
      MemberName.EtouMisa,
    ],
    secondRow: [
      MemberName.WakatsukiYumi,
      MemberName.TakayamaKazumi,
      MemberName.IkomaRina,
      MemberName.IkutaErika,
      MemberName.MatsumuraSayuri,
      MemberName.SakuraiReika,
    ],
    thirdRow: [
      MemberName.ShinuchiMai,
      MemberName.InoueSayuri,
      MemberName.TeradaRanze,
      MemberName.KitanoHinako,
      MemberName.ItouMarika,
      MemberName.HoshinoMinami,
      MemberName.SaitouYuuri,
      MemberName.HiguchiHina,
      MemberName.NakadaKana,
    ],
    fourthRow: [],
  },
};

const songFusenhaikiteiru: SongRaw = {
  title: SONGS["風船は生きている"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["泉佳伸", "三好翔太"],
    arrange: ["早川博隆", "三好翔太"],
    direct: ["多田卓也"],
  },
  performers: {
    center: [MemberName.WatanabeMiria],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.SuzukiAyane,
    ],
    secondRow: [
      MemberName.SaitouChiharu,
      MemberName.ItouKarin,
      MemberName.NoujouAmi,
      MemberName.SagaraIori,
    ],
    thirdRow: [
      MemberName.KawagoHina,
      MemberName.SasakiKotoko,
      MemberName.WadaMaaya,
      MemberName.ItouJunna,
      MemberName.KawamuraMahiro,
    ],
    fourthRow: [],
  },
};

const songJinseiwokangae: SongRaw = {
  title: SONGS["人生を考えたくなる"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["片桐周太郎"],
    arrange: ["片桐周太郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "女子校カルテット",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
      MemberName.NakadaKana,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songIgaibreak: SongRaw = {
  title: SONGS["意外BREAK"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["すみだしんや"],
    arrange: ["華原大輔"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "姉御坂",
  },
  formations: {
    firstRow: [
      MemberName.EtouMisa,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnotherghost: SongRaw = {
  title: SONGS["Another Ghost"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["前迫潤哉", "Yasutaka.Ishio"],
    arrange: ["Yasutaka.Ishio"],
    direct: ["井上強"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "ナスカ",
  },
  formations: {
    firstRow: [
      MemberName.ItouMarika,
      MemberName.SaitouAsuka,
      MemberName.NishinoNanase,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSanbanmenokaze: SongRaw = {
  title: SONGS["三番目の風"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberName.OozonoMomoko],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.KuboShiori,
      MemberName.OozonoMomoko,
      MemberName.YamashitaMizuki,
    ],
    secondRow: [
      MemberName.SakaguchiTamami,
      MemberName.YodaYuuki,
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
    ],
    thirdRow: [
      MemberName.UmezawaMinami,
      MemberName.MukaiHazuki,
      MemberName.NakamuraReno,
      MemberName.SatouKaede,
      MemberName.YoshidaAyanoChristie,
    ],
    fourthRow: [],
  },
};

const songAtarisawarinonai: SongRaw = {
  title: SONGS["当たり障りのない話"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小網準"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "かすみ草",
  },
  formations: {
    firstRow: [
      MemberName.IkomaRina,
      MemberName.InoueSayuri,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 16th single

const songSayonaranoimi: SongRaw = {
  title: SONGS["サヨナラの意味"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["若田部誠"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberName.HashimotoNanami],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const songBulanko: SongRaw = {
  title: SONGS["ブランコ"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiro Hoashi"],
    arrange: ["Hiro Hoashi"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberName.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const songKodokunaaozora: SongRaw = {
  title: SONGS["孤独な青空"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["aokado"],
    arrange: ["aokado"],
    direct: [],
  },
  performers: {
    center: [MemberName.HashimotoNanami],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnokyoshitsu: SongRaw = {
  title: SONGS["あの教室"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["カワノミチオ"],
    arrange: ["カワノミチオ"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.SaitouAsuka, MemberName.HoriMiona],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNidomenokisukara: SongRaw = {
  title: SONGS["2度目のキスから"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "真夏さんリスペクト軍団",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.SagaraIori,
      MemberName.SuzukiAyane,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKiminiokuruhana: SongRaw = {
  title: SONGS["君に贈る花がない"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Rizz"],
    arrange: ["山田竜平"],
    direct: ["東市篤憲"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "サンクエトワール",
  },
  formations: {
    firstRow: [
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.NakadaKana,
      MemberName.NakamotoHimeka,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNaimononetari: SongRaw = {
  title: SONGS["ないものねだり"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ", "福田貴史"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.HashimotoNanami,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.HashimotoNanami],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 15th single

const songHadashidesummer: SongRaw = {
  title: SONGS["裸足でSummer"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福森秀敏"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HashimotoNanami,
      MemberName.NishinoNanase,
      MemberName.SaitouAsuka,
      MemberName.ShiraishiMai,
      MemberName.IkutaErika,
    ],
    secondRow: [
      MemberName.TakayamaKazumi,
      MemberName.EtouMisa,
      MemberName.MatsumuraSayuri,
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
    ],
    thirdRow: [
      MemberName.KitanoHinako,
      MemberName.HoshinoMinami,
      MemberName.WakatsukiYumi,
      MemberName.IkomaRina,
      MemberName.HoriMiona,
      MemberName.NakamotoHimeka,
    ],
    fourthRow: [],
  },
};

const songSecretGravity: SongRaw = {
  title: SONGS["シークレットグラフィティー"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [MemberName.HiguchiHina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.TeradaRanze,
      MemberName.ItouMarika,
      MemberName.HiguchiHina,
      MemberName.InoueSayuri,
      MemberName.WatanabeMiria,
    ],
    secondRow: [
      MemberName.SaitouChiharu,
      MemberName.SaitouYuuri,
      MemberName.ShinuchiMai,
      MemberName.NakadaKana,
      MemberName.NoujouAmi,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.YamazakiRena,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.SuzukiAyane,
      MemberName.WadaMaaya,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.ItouKarin,
    ],
    fourthRow: [],
  },
};

const songBokudakenohikari: SongRaw = {
  title: SONGS["僕だけの光"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiro Hoashi"],
    arrange: ["Hiro Hoashi"],
    direct: [],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.EtouMisa,
      MemberName.KitanoHinako,
      MemberName.SaitouAsuka,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakamotoHimeka,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songOffshoregirl: SongRaw = {
  title: SONGS["オフショアガール"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["井上強"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.ShiraishiMai,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songInochinoshinjitsu: SongRaw = {
  title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["NA.ZU.NA"],
    arrange: ["NA.ZU.NA"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.IkutaErika,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHakumaisama: SongRaw = {
  title: SONGS["白米様"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ruby"],
    arrange: ["あらケン"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "さゆりんご軍団",
  },
  formations: {
    firstRow: [MemberName.MatsumuraSayuri],
    secondRow: [
      MemberName.SasakiKotoko,
      MemberName.ItouKarin,
      MemberName.TeradaRanze,
    ],
    thirdRow: [],
    fourthRow: [],
  },
};

const songIkuatenonaibokutachi: SongRaw = {
  title: SONGS["行くあてのない僕たち"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大橋莉子"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.ItouMarika, MemberName.InoueSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 14th single

const songHarujion: SongRaw = {
  title: SONGS["ハルジオンが咲く頃"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["山戸結希"],
  },
  performers: {
    center: [MemberName.FukagawaMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HashimotoNanami,
      MemberName.NishinoNanase,
      MemberName.FukagawaMai,
      MemberName.ShiraishiMai,
      MemberName.IkutaErika,
    ],
    secondRow: [
      MemberName.SaitouAsuka,
      MemberName.TakayamaKazumi,
      MemberName.EtouMisa,
      MemberName.AkimotoManatsu,
      MemberName.HoshinoMinami,
    ],
    thirdRow: [
      MemberName.SakuraiReika,
      MemberName.WakatsukiYumi,
      MemberName.MatsumuraSayuri,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.HoriMiona,
    ],
    fourthRow: [],
  },
};

const songFutogo: SongRaw = {
  title: SONGS["不等号"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福田貴史"],
    arrange: ["福田貴史"],
    direct: ["池田千尋"],
  },
  performers: {
    center: [MemberName.NakamotoHimeka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouYuuri,
      MemberName.TeradaRanze,
      MemberName.NakamotoHimeka,
      MemberName.KitanoHinako,
      MemberName.HiguchiHina,
    ],
    secondRow: [
      MemberName.ItouKarin,
      MemberName.KawagoHina,
      MemberName.NakadaKana,
      MemberName.ShinuchiMai,
      MemberName.NoujouAmi,
    ],
    thirdRow: [
      MemberName.SaitouChiharu,
      MemberName.WatanabeMiria,
      MemberName.SuzukiAyane,
      MemberName.YamazakiRena,
      MemberName.SasakiKotoko,
      MemberName.SagaraIori,
      MemberName.KawagoHina,
      MemberName.WadaMaaya,
      MemberName.ItouJunna,
    ],
    fourthRow: [],
  },
};

const songHarukanarubhutan: SongRaw = {
  title: SONGS["遥かなるブータン"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ha-j"],
    direct: [],
  },
  performers: {
    center: [MemberName.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.ItouMarika,
      MemberName.EtouMisa,
      MemberName.SaitouAsuka,
      MemberName.HoriMiona,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTsuyogarutsubomi: SongRaw = {
  title: SONGS["強がる蕾"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大貫和紀", "河原レオ", "高木龍一"],
    arrange: ["Carlos K."],
    direct: ["真壁幸紀"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.FukagawaMai,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.FukagawaMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKyushamen: SongRaw = {
  title: SONGS["急斜面"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["FURUTA", "Yasutaka Ishio"],
    arrange: ["重永亮介"],
    direct: ["番場秀一"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTsuribori: SongRaw = {
  title: SONGS["釣り堀"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Bush-I"],
    arrange: ["APAZZI"],
    direct: ["永田琴"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songYuutsutofusengamu: SongRaw = {
  title: SONGS["憂鬱と風船ガム"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HIROTOMO", "Dr.Lilcom"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [MemberName.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkomaRina,
      MemberName.InoueSayuri,
      MemberName.SakuraiReika,
      MemberName.TakayamaKazumi,
      MemberName.HoshinoMinami,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 13th single

const songHanashitaidarekagairu: SongRaw = {
  title: SONGS["今、話したい誰かがいる"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["萩原健太郎"],
  },
  performers: {
    center: [MemberName.ShiraishiMai, MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const songShittonokenri: SongRaw = {
  title: SONGS["嫉妬の権利"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸山真由子"],
    arrange: ["丸山真由子"],
    direct: ["井上強"],
  },
  performers: {
    center: [MemberName.HoriMiona, MemberName.NakamotoHimeka],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const songPopipappapa: SongRaw = {
  title: SONGS["ポピパッパパー"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.ShiraishiMai, MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    fourthRow: [],
  },
};

const songOtonahenochikamichi: SongRaw = {
  title: SONGS["大人への近道"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "サンクエトワール",
  },
  formations: {
    firstRow: [
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.NakadaKana,
      MemberName.NakamotoHimeka,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKanashiminowasurekata: SongRaw = {
  title: SONGS["悲しみの忘れ方"].title,
  musicVideo: "",
  type: SongType.Selected12,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["久下真音"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSukima: SongRaw = {
  title: SONGS["隙間"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "Carlos K."],
    arrange: ["Akira Sunset", "Carlos K."],
    direct: [],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 12th single

const songTaiyoknock: SongRaw = {
  title: SONGS["太陽ノック"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["黒須克彦"],
    arrange: ["長田直之"],
    direct: ["三石直和"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.IkomaRina,
      MemberName.IkutaErika,
      MemberName.HashimotoNanami,
    ],
    secondRow: [
      MemberName.TakayamaKazumi,
      MemberName.WakatsukiYumi,
      MemberName.SakuraiReika,
      MemberName.AkimotoManatsu,
      MemberName.FukagawaMai,
    ],
    thirdRow: [
      MemberName.MatsumuraSayuri,
      MemberName.SaitouYuuri,
      MemberName.HoshinoMinami,
      MemberName.SaitouAsuka,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.ShinuchiMai,
      MemberName.EtouMisa,
    ],
    fourthRow: [],
  },
};

const songWakaregiwa: SongRaw = {
  title: SONGS["別れ際、もっと好きになる"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [MemberName.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.KawamuraMahiro,
      MemberName.KitanoHinako,
      MemberName.HoriMiona,
      MemberName.NakamotoHimeka,
      MemberName.NakadaKana,
    ],
    secondRow: [
      MemberName.SagaraIori,
      MemberName.KawagoHina,
      MemberName.NagashimaSeira,
      MemberName.NoujouAmi,
      MemberName.SaitouChiharu,
    ],
    thirdRow: [
      MemberName.WadaMaaya,
      MemberName.SasakiKotoko,
      MemberName.TeradaRanze,
      MemberName.ItouKarin,
      MemberName.WatanabeMiria,
      MemberName.SuzukiAyane,
      MemberName.ItouJunna,
      MemberName.HiguchiHina,
    ],
    fourthRow: [],
  },
};

const songMosukoshinoyumewo: SongRaw = {
  title: SONGS["もう少しの夢"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSakanatachinolovesong: SongRaw = {
  title: SONGS["魚たちのLOVE SONG"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡辺拓也"],
    arrange: ["渡辺拓也"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMuhyojo: SongRaw = {
  title: SONGS["無表情"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["Akira Sunset"],
    direct: ["月田茂", "山本篤彦", "柴谷麻以"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "からあげ姉妹",
  },
  formations: {
    firstRow: [MemberName.IkutaErika, MemberName.MatsumuraSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHanenokioku: SongRaw = {
  title: SONGS["羽根の記憶"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
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
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShinuchiMai,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSeifukuwonuide: SongRaw = {
  title: SONGS["制服を脱いでサヨナラを…"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.SaitouAsuka, MemberName.HoshinoMinami],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 11th single

const songInochihautsukushii: SongRaw = {
  title: SONGS["命は美しい"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiroki Sagawa"],
    arrange: ["Hiroki Sagawa"],
    direct: ["井上強"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.MatsuiRena,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.IkutaErika,
    ],
    secondRow: [
      MemberName.WakatsukiYumi,
      MemberName.AkimotoManatsu,
      MemberName.IkomaRina,
      MemberName.SakuraiReika,
      MemberName.FukagawaMai,
    ],
    thirdRow: [
      MemberName.MatsumuraSayuri,
      MemberName.SagaraIori,
      MemberName.SaitouAsuka,
      MemberName.ItouMarika,
      MemberName.HoriMiona,
      MemberName.HoshinoMinami,
      MemberName.EtouMisa,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songKimihabokuto: SongRaw = {
  title: SONGS["君は僕と会わない方がよかったのかな"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["山田篤宏"],
  },
  performers: {
    center: [MemberName.NakamotoHimeka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouYuuri,
      MemberName.NakamotoHimeka,
      MemberName.InoueSayuri,
    ],
    secondRow: [
      MemberName.NoujouAmi,
      MemberName.NagashimaSeira,
      MemberName.NakadaKana,
      MemberName.ShinuchiMai,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.KitanoHinako,
      MemberName.KawagoHina,
      MemberName.HiguchiHina,
      MemberName.ItouKarin,
      MemberName.WadaMaaya,
      MemberName.SaitouChiharu,
    ],
    fourthRow: [],
  },
};

const songArakajimeromance: SongRaw = {
  title: SONGS["あらかじめ語られるロマンス"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SoichiroK", "Nozomu.S"],
    arrange: ["SoichiroK", "Nozomu.S"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberName.SaitouAsuka, MemberName.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.SaitouAsuka,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTachinaorichu: SongRaw = {
  title: SONGS["立ち直り中"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福田貴史"],
    arrange: ["TATOO"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.EtouMisa,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGomennezutto: SongRaw = {
  title: SONGS["ごめんね ずっと…"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: ["山戸結希"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBorder: SongRaw = {
  title: SONGS["ボーダー"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: [],
  },
  performers: {
    center: [MemberName.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouJunna,
      MemberName.SasakiKotoko,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 10th single

const songNandomenoaozoraka: SongRaw = {
  title: SONGS["何度目の青空か?"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["川浦正大"],
    arrange: ["百石元"],
    direct: ["内田けんじ"],
  },
  performers: {
    center: [MemberName.IkutaErika],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.MatsuiRena,
      MemberName.ShiraishiMai,
      MemberName.IkutaErika,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
    ],
    secondRow: [
      MemberName.MatsumuraSayuri,
      MemberName.AkimotoManatsu,
      MemberName.IkomaRina,
      MemberName.SakuraiReika,
      MemberName.FukagawaMai,
    ],
    thirdRow: [
      MemberName.EtouMisa,
      MemberName.WakatsukiYumi,
      MemberName.HoriMiona,
      MemberName.HoshinoMinami,
      MemberName.TakayamaKazumi,
      MemberName.SaitouChiharu,
    ],
    fourthRow: [],
  },
};

const songAnohibokuha: SongRaw = {
  title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["三輪智也"],
    arrange: ["京田誠一"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [MemberName.InoueSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.InoueSayuri,
      MemberName.ItouMarika,
    ],
    secondRow: [
      MemberName.NagashimaSeira,
      MemberName.NakamotoHimeka,
      MemberName.SaitouYuuri,
      MemberName.NakadaKana,
      MemberName.NoujouAmi,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.WadaMaaya,
      MemberName.HiguchiHina,
      MemberName.ItouKarin,
      MemberName.KawagoHina,
      MemberName.HatanakaSeira,
      MemberName.KitanoHinako,
      MemberName.YamatoRina,
      MemberName.ShinuchiMai,
    ],
    fourthRow: [],
  },
};

const songTomawarinoaijo: SongRaw = {
  title: SONGS["遠回りの愛情"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Noda Akiko"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [MemberName.NagashimaSeira, MemberName.SakuraiReika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.InoueSayuri,
      MemberName.SakuraiReika,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.YamatoRina,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKorogattakanewonarase: SongRaw = {
  title: SONGS["転がった鐘を鳴らせ!"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山英二"],
    arrange: ["田上陽一"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsuiRena,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songWatashiokiru: SongRaw = {
  title: SONGS["私、起きる。"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ZERO"],
    arrange: ["Akira Sunset", "ZERO"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberName.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.KawagoHina,
      MemberName.KitanoHinako,
      MemberName.SaitouAsuka,
      MemberName.SaitouChiharu,
      MemberName.NakamotoHimeka,
      MemberName.HiguchiHina,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTenderdays: SongRaw = {
  title: SONGS["Tender days"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SoichiroK", "Nozomu.S"],
    arrange: ["Soulife"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 9th single

const songNatsunofreeandeasy: SongRaw = {
  title: SONGS["夏のFree&Easy"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["井上トモノリ"],
    arrange: ["橋本幸太"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.MatsuiRena,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [
      MemberName.WakatsukiYumi,
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
      MemberName.FukagawaMai,
      MemberName.IkomaRina,
    ],
    thirdRow: [
      MemberName.EtouMisa,
      MemberName.InoueSayuri,
      MemberName.SaitouYuuri,
      MemberName.HoshinoMinami,
      MemberName.YamatoRina,
      MemberName.HoriMiona,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songKokoniiruriyu: SongRaw = {
  title: SONGS["ここにいる理由"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["長谷川湊"],
    arrange: ["Carlos K."],
    direct: ["近藤大介"],
  },
  performers: {
    center: [MemberName.ItouMarika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.KawagoHina,
      MemberName.SaitouAsuka,
      MemberName.ItouMarika,
      MemberName.HiguchiHina,
      MemberName.WadaMaaya,
    ],
    secondRow: [
      MemberName.NagashimaSeira,
      MemberName.NakadaKana,
      MemberName.NoujouAmi,
      MemberName.NakamotoHimeka,
      MemberName.KawamuraMahiro,
    ],
    thirdRow: [
      MemberName.SaitouChiharu,
      MemberName.KitanoHinako,
      MemberName.HatanakaSeira,
      MemberName.ItouNene,
      MemberName.IchikiRena,
      MemberName.ShinuchiMai,
    ],
    fourthRow: [],
  },
};

const songNanimodekizuni: SongRaw = {
  title: SONGS["何もできずにそばにいる"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["角野寿和"],
    arrange: ["京田誠一"],
    direct: [],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.MatsuiRena,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [
      MemberName.WakatsukiYumi,
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
      MemberName.FukagawaMai,
      MemberName.IkomaRina,
    ],
    thirdRow: [
      MemberName.EtouMisa,
      MemberName.InoueSayuri,
      MemberName.SaitouYuuri,
      MemberName.HoshinoMinami,
      MemberName.YamatoRina,
      MemberName.HoriMiona,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songSonosakinodeguchi: SongRaw = {
  title: SONGS["その先の出口!"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Carlos K."],
    arrange: ["Carlos K."],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.EtouMisa,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.HashimotoNanami,
      MemberName.MatsuiRena,
      MemberName.MatsumuraSayuri,
      MemberName.FukagawaMai,
      MemberName.YamatoRina,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMukuchinalion: SongRaw = {
  title: SONGS["無口なライオン"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Shusui", "ヒロイズム"],
    arrange: ["Shusui", "ヒロイズム"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkomaRina,
      MemberName.InoueSayuri,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.NishinoNanase,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokugaikanakya: SongRaw = {
  title: SONGS["僕が行かなきゃ誰が行くんだ?"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: [],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 8th single

const songKizuitarakataomoi: SongRaw = {
  title: SONGS["気づいたら片想い"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["湯浅篤"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: FukujinType.RowOne,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HoriMiona,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.IkomaRina,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.WakatsukiYumi,
      MemberName.IkutaErika,
      MemberName.MatsumuraSayuri,
      MemberName.FukagawaMai,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.KitanoHinako,
      MemberName.HiguchiHina,
      MemberName.AkimotoManatsu,
      MemberName.WadaMaaya,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songUmaretamamade: SongRaw = {
  title: SONGS["生まれたままで"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["田中俊亮"],
    arrange: ["鈴木裕明"],
    direct: ["久保茂昭"],
  },
  performers: {
    center: [MemberName.ItouMarika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.InoueSayuri,
      MemberName.SaitouAsuka,
      MemberName.ItouMarika,
      MemberName.HoshinoMinami,
      MemberName.SaitouYuuri,
    ],
    secondRow: [
      MemberName.NagashimaSeira,
      MemberName.NakadaKana,
      MemberName.EtouMisa,
      MemberName.KawagoHina,
      MemberName.NakamotoHimeka,
    ],
    thirdRow: [
      MemberName.SaitouChiharu,
      MemberName.ItouNene,
      MemberName.IchikiRena,
      MemberName.ShinuchiMai,
      MemberName.HatanakaSeira,
      MemberName.YamatoRina,
      MemberName.NoujouAmi,
    ],
    fourthRow: [],
  },
};

const songRomancenostart: SongRaw = {
  title: SONGS["ロマンスのスタート"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["押田誠"],
    arrange: ["佐々木聡作", "押田誠"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HoriMiona,
      MemberName.ShiraishiMai,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.IkomaRina,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.WakatsukiYumi,
      MemberName.IkomaRina,
      MemberName.MatsumuraSayuri,
      MemberName.FukagawaMai,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.KitanoHinako,
      MemberName.HiguchiHina,
      MemberName.AkimotoManatsu,
      MemberName.WadaMaaya,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songToikimethod: SongRaw = {
  title: SONGS["吐息のメソッド"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["田中明仁"],
    arrange: ["TATOO"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.KawamuraMahiro,
      MemberName.KitanoHinako,
      MemberName.SaitouAsuka,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.HiguchiHina,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKodokukyodai: SongRaw = {
  title: SONGS["孤独兄弟"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Soulife"],
    arrange: ["Soulife"],
    direct: ["池田一真"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "孤独兄弟",
  },
  formations: {
    firstRow: [MemberName.ShiraishiMai, MemberName.HashimotoNanami],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songDankeschon: SongRaw = {
  title: SONGS["ダンケシェーン"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "C#"],
    arrange: ["Akira Sunset", "C#"],
    direct: [],
  },
  performers: {
    center: [MemberName.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.SakuraiReika,
      MemberName.NishinoNanase,
      MemberName.FukagawaMai,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 7th single

const songValletta: SongRaw = {
  title: SONGS["バレッタ"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["サイトウヨシヒロ"],
    arrange: ["若田部誠"],
    direct: ["江湖広二"],
  },
  performers: {
    center: [MemberName.HoriMiona],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.NishinoNanase,
      MemberName.ShiraishiMai,
      MemberName.HoriMiona,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.WakatsukiYumi,
    ],
    thirdRow: [
      MemberName.ItouMarika,
      MemberName.EtouMisa,
      MemberName.SaitouAsuka,
      MemberName.AkimotoManatsu,
      MemberName.FukagawaMai,
      MemberName.NakamotoHimeka,
      MemberName.KawagoHina,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songHatsukoinohito: SongRaw = {
  title: SONGS["初恋の人を今でも"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["田所貴司"],
  },
  performers: {
    center: [MemberName.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.InoueSayuri,
      MemberName.HoshinoMinami,
      MemberName.SaitouYuuri,
    ],
    secondRow: [
      MemberName.NoujouAmi,
      MemberName.HiguchiHina,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.KawamuraMahiro,
    ],
    thirdRow: [
      MemberName.SaitouChiharu,
      MemberName.HatanakaSeira,
      MemberName.YamatoRina,
      MemberName.ItouNene,
      MemberName.WadaMaaya,
    ],
    fourthRow: [],
  },
};

const songTsukinookisa: SongRaw = {
  title: SONGS["月の大きさ"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["大久保拓朗"],
  },
  performers: {
    center: [MemberName.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.NishinoNanase,
      MemberName.ShiraishiMai,
      MemberName.HoriMiona,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.WakatsukiYumi,
    ],
    thirdRow: [
      MemberName.ItouMarika,
      MemberName.EtouMisa,
      MemberName.SaitouAsuka,
      MemberName.AkimotoManatsu,
      MemberName.FukagawaMai,
      MemberName.NakamotoHimeka,
      MemberName.KawagoHina,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songWatashinotameni: SongRaw = {
  title: SONGS["私のために 誰かのために"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.EtouMisa,
      MemberName.KawamuraMahiro,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSonnabakana: SongRaw = {
  title: SONGS["そんなバカな…"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["Akira Sunset"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.KawagoHina,
      MemberName.SaitouAsuka,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NakamotoHimeka,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.HiguchiHina,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songYasashisatoha: SongRaw = {
  title: SONGS["やさしさとは"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: [],
  },
  performers: {
    center: [MemberName.HashimotoNanami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.NakamotoHimeka,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 6th single

const songGirlsrule: SongRaw = {
  title: SONGS["ガールズルール"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["後藤康二"],
    arrange: ["後藤康二"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.MatsumuraSayuri,
      MemberName.ShiraishiMai,
      MemberName.HashimotoNanami,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.NishinoNanase,
      MemberName.TakayamaKazumi,
    ],
    thirdRow: [
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.NakadaKana,
      MemberName.WakatsukiYumi,
      MemberName.HoshinoMinami,
      MemberName.AkimotoManatsu,
      MemberName.FukagawaMai,
      MemberName.SaitouYuuri,
    ],
    fourthRow: [],
  },
};

const songSenpuki: SongRaw = {
  title: SONGS["扇風機"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["角野寿和"],
    arrange: ["野村陽一郎"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HiguchiHina,
      MemberName.SaitouAsuka,
      MemberName.NakamotoHimeka,
    ],
    secondRow: [
      MemberName.NoujouAmi,
      MemberName.EtouMisa,
      MemberName.KawamuraMahiro,
    ],
    thirdRow: [
      MemberName.ItouNene,
      MemberName.NagashimaSeira,
      MemberName.SaitouChiharu,
      MemberName.IchikiRena,
    ],
    fourthRow: [
      MemberName.YamatoRina,
      MemberName.KawagoHina,
      MemberName.WadaMaaya,
      MemberName.KashiwaYukina,
      MemberName.HatanakaSeira,
      MemberName.MiyazawaSeira,
    ],
  },
};

const songSekaideichiban: SongRaw = {
  title: SONGS["世界で一番 孤独なLover"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["河原嶺旭"],
    arrange: ["百石元"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.MatsumuraSayuri,
      MemberName.ShiraishiMai,
      MemberName.HashimotoNanami,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.NishinoNanase,
      MemberName.TakayamaKazumi,
    ],
    thirdRow: [
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.NakadaKana,
      MemberName.WakatsukiYumi,
      MemberName.HoshinoMinami,
      MemberName.AkimotoManatsu,
      MemberName.FukagawaMai,
      MemberName.SaitouYuuri,
    ],
    fourthRow: [],
  },
};

const songKomoriyo: SongRaw = {
  title: SONGS["コウモリよ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["南田健吾"],
    arrange: ["高梨康治"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.NakamotoHimeka,
      MemberName.NoujouAmi,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHokanohoshikara: SongRaw = {
  title: SONGS["他の星から"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Sugaya Bros.", "松村PONY"],
    arrange: ["Sugaya Bros."],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const sonNingentoiugaki: SongRaw = {
  title: SONGS["人間という楽器"].title,
  musicVideo: "",
  type: SongType.FirstGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["鐘撞行孝"],
    arrange: ["TATOO"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.ItouNene,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.KashiwaYukina,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouAsuka,
      MemberName.SaitouChiharu,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NakamotoHimeka,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.HatanakaSeira,
      MemberName.HiguchiHina,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.MiyazawaSeira,
      MemberName.YamatoRina,
      MemberName.WakatsukiYumi,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 5th single

const songKiminonahakibo: SongRaw = {
  title: SONGS["君の名は希望"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: ["山下敦弘"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
    ],
    secondRow: [
      MemberName.SakuraiReika,
      MemberName.HashimotoNanami,
      MemberName.ShiraishiMai,
      MemberName.MatsumuraSayuri,
      MemberName.AkimotoManatsu,
    ],
    thirdRow: [
      MemberName.ItouNene,
      MemberName.NakadaKana,
      MemberName.InoueSayuri,
      MemberName.NishinoNanase,
      MemberName.WakatsukiYumi,
      MemberName.FukagawaMai,
      MemberName.NagashimaSeira,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songjusannichinokiyobi: SongRaw = {
  title: SONGS["13日の金曜日"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["網本ナオノブ"],
    arrange: ["湯浅篤"],
    direct: ["山田篤宏"],
  },
  performers: {
    center: [MemberName.SaitouYuuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouMarika,
      MemberName.SaitouYuuri,
      MemberName.SaitouAsuka,
    ],
    secondRow: [
      MemberName.KawamuraMahiro,
      MemberName.EtouMisa,
      MemberName.NoujouAmi,
      MemberName.IchikiRena,
    ],
    thirdRow: [
      MemberName.YamatoRina,
      MemberName.WadaMaaya,
      MemberName.NakamotoHimeka,
      MemberName.SaitouChiharu,
      MemberName.KashiwaYukina,
      MemberName.AndouMikumo,
      MemberName.HatanakaSeira,
      MemberName.HiguchiHina,
      MemberName.KawagoHina,
      MemberName.MiyazawaSeira,
    ],
    fourthRow: [],
  },
};

const songShakism: SongRaw = {
  title: SONGS["シャキイズム"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["岡本健介"],
    arrange: ["岡本健介"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberName.IkomaRina, MemberName.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouNene,
      MemberName.InoueSayuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songRomanticIkayaki: SongRaw = {
  title: SONGS["ロマンティックいか焼き"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["横健介"],
    arrange: ["重永亮介"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.ItouNene,
      MemberName.InoueSayuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songDekopin: SongRaw = {
  title: SONGS["でこぴん"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songPsychokineses: SongRaw = {
  title: SONGS["サイコキネシスの可能性"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberName.SakuraiReika, MemberName.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.ItouNene,
      MemberName.InoueSayuri,
      MemberName.SakuraiReika,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 4th single

const songSeifukunomannequin: SongRaw = {
  title: SONGS["制服のマネキン"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["百石元"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
    ],
    secondRow: [
      MemberName.ShiraishiMai,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
      MemberName.SakuraiReika,
      MemberName.AkimotoManatsu,
    ],
    thirdRow: [
      MemberName.NoujouAmi,
      MemberName.SaitouAsuka,
      MemberName.WakatsukiYumi,
      MemberName.InoueSayuri,
      MemberName.FukagawaMai,
      MemberName.IchikiRena,
      MemberName.NishinoNanase,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songHarunomelody: SongRaw = {
  title: SONGS["春のメロディー"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["フジノタカフミ"],
    arrange: ["湯浅篤"],
    direct: ["柿本ケンサク"],
  },
  performers: {
    center: [MemberName.NakadaKana],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouYuuri,
      MemberName.NakadaKana,
      MemberName.EtouMisa,
    ],
    secondRow: [
      MemberName.ItouMarika,
      MemberName.KawagoHina,
      MemberName.HiguchiHina,
      MemberName.ItouNene,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.NakamotoHimeka,
      MemberName.HatanakaSeira,
      MemberName.NagashimaSeira,
    ],
    fourthRow: [
      MemberName.MiyazawaSeira,
      MemberName.YamatoRina,
      MemberName.AndouMikumo,
      MemberName.WadaMaaya,
      MemberName.SaitouChiharu,
    ],
  },
};

const songYubiboenkyo: SongRaw = {
  title: SONGS["指望遠鏡"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["北室龍馬"],
    arrange: ["木村有希"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
    ],
    secondRow: [
      MemberName.ShiraishiMai,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
      MemberName.SakuraiReika,
      MemberName.AkimotoManatsu,
    ],
    thirdRow: [
      MemberName.NoujouAmi,
      MemberName.SaitouAsuka,
      MemberName.WakatsukiYumi,
      MemberName.InoueSayuri,
      MemberName.FukagawaMai,
      MemberName.IchikiRena,
      MemberName.NishinoNanase,
      MemberName.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songYasashisanaramaniatteru: SongRaw = {
  title: SONGS["やさしさなら間に合ってる"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["松田純一"],
    arrange: ["清水武仁"],
    direct: [],
  },
  performers: {
    center: [MemberName.TakayamaKazumi, MemberName.NoujouAmi],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IchikiRena,
      MemberName.InoueSayuri,
      MemberName.SaitouAsuka,
      MemberName.TakayamaKazumi,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.FukagawaMai,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKokojanaidokoka: SongRaw = {
  title: SONGS["ここじゃないどこか"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大藤史"],
    arrange: ["京田誠一"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShibuyablues: SongRaw = {
  title: SONGS["渋谷ブルース"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["佐藤嘉風"],
    arrange: ["佐藤嘉風"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "WHITE HIGH",
  },
  formations: {
    firstRow: [MemberName.ShiraishiMai, MemberName.TakayamaKazumi],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 3rd single

const songHashirebicycle: SongRaw = {
  title: SONGS["走れ!Bicycle"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Shusui", "伊藤涼", "木村篤史", "ヒロイズム"],
    arrange: ["湯浅篤"],
    direct: ["中島哲也"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
      MemberName.HashimotoNanami,
      MemberName.ShiraishiMai,
      MemberName.MatsumuraSayuri,
      MemberName.NishinoNanase,
    ],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
      MemberName.SakuraiReika,
    ],
    secondRow: [
      MemberName.NakadaKana,
      MemberName.HashimotoNanami,
      MemberName.ShiraishiMai,
      MemberName.MatsumuraSayuri,
      MemberName.NishinoNanase,
      MemberName.TakayamaKazumi,
    ],
    thirdRow: [
      MemberName.SaitouYuuri,
      MemberName.WakatsukiYumi,
      MemberName.InoueSayuri,
      MemberName.IchikiRena,
      MemberName.ItouMarika,
      MemberName.FukagawaMai,
    ],
    fourthRow: [],
  },
};

const songNamidagamada: SongRaw = {
  title: SONGS["涙がまだ悲しみだった頃"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["内田智之"],
    arrange: ["TATOO"],
    direct: ["関和亮"],
  },
  performers: {
    center: [MemberName.ItouNene],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.HiguchiHina,
      MemberName.ItouNene,
      MemberName.SaitouAsuka,
    ],
    secondRow: [
      MemberName.EtouMisa,
      MemberName.NoujouAmi,
      MemberName.KawagoHina,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.KashiwaYukina,
      MemberName.YamatoRina,
      MemberName.NagashimaSeira,
    ],
    fourthRow: [
      MemberName.MiyazawaSeira,
      MemberName.AndouMikumo,
      MemberName.HatanakaSeira,
      MemberName.IwaseYumiko,
      MemberName.WadaMaaya,
      MemberName.NakamotoHimeka,
      MemberName.SaitouChiharu,
    ],
  },
};

const songSekkachinakatatsumuri: SongRaw = {
  title: SONGS["せっかちなかたつむり"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山本加津彦"],
    arrange: ["湯浅篤"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberName.MatsumuraSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHitohanazehashirunoka: SongRaw = {
  title: SONGS["人はなぜ走るのか?"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["キタムラタケシ", "田上陽一"],
    arrange: ["田上陽一"],
    direct: ["久保茂昭"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.KashiwaYukina,
      MemberName.SaitouChiharu,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.MiyazawaSeira,
      MemberName.YamatoRina,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songOtogadenaiguitar: SongRaw = {
  title: SONGS["音が出ないギター"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Jam9", "ArmySlick"],
    arrange: ["シライシ紗トリ"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.ItouNene,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.IwaseYumiko,
      MemberName.EtouMisa,
      MemberName.KawamuraMahiro,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKairyunoshimayo: SongRaw = {
  title: SONGS["海流の島よ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["京田誠一"],
    direct: [],
  },
  performers: {
    center: [MemberName.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AndouMikumo,
      MemberName.KawagoHina,
      MemberName.SaitouAsuka,
      MemberName.NakamotoHimeka,
      MemberName.HatanakaSeira,
      MemberName.HiguchiHina,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 2nd single

const songOideshampoo: SongRaw = {
  title: SONGS["おいでシャンプー"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小田切大"],
    arrange: ["TATOO"],
    direct: ["高橋栄樹"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SakuraiReika,
      MemberName.IkomaRina,
      MemberName.NakadaKana,
    ],
    secondRow: [
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
    ],
    thirdRow: [
      MemberName.IwaseYumiko,
      MemberName.IchikiRena,
      MemberName.SaitouYuuri,
      MemberName.IkutaErika,
      MemberName.InoueSayuri,
      MemberName.HoshinoMinami,
      MemberName.NishinoNanase,
      MemberName.HatanakaSeira,
      MemberName.MiyazawaSeira,
    ],
    fourthRow: [],
  },
};

const songOkaminikuchibuewo: SongRaw = {
  title: SONGS["狼に口笛を"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["シライシ紗トリ"],
    direct: ["福居英晃"],
  },
  performers: {
    center: [MemberName.ItouMarika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.FukagawaMai,
      MemberName.ItouMarika,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.NagashimaSeira,
    ],
    thirdRow: [
      MemberName.EtouMisa,
      MemberName.ItouNene,
      MemberName.SaitouAsuka,
      MemberName.NakamotoHimeka,
      MemberName.HiguchiHina,
    ],
    fourthRow: [
      MemberName.KashiwaYukina,
      MemberName.AndouMikumo,
      MemberName.YamatoRina,
      MemberName.NoujouAmi,
      MemberName.WadaMaaya,
    ],
  },
};

const songKokoronokusuri: SongRaw = {
  title: SONGS["心の薬"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["MIKOTO"],
    arrange: ["木之下慶行"],
    direct: [],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.IwaseYumiko,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NishinoNanase,
      MemberName.HashimotoNanami,
      MemberName.HatanakaSeira,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.MiyazawaSeira,
      MemberName.YamatoRina,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGuzenwoiiwakenishite: SongRaw = {
  title: SONGS["偶然を言い訳にして"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["坂部大介"],
    arrange: ["中土智博"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMizutamamoyo: SongRaw = {
  title: SONGS["水玉模様"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["若田部誠"],
    arrange: ["若田部誠"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.IkomaRina,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.IkomaRina],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHouse: SongRaw = {
  title: SONGS["ハウス!"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["y@suo ohtani"],
    arrange: ["y@suo ohtani"],
    direct: [],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.InoueSayuri,
      MemberName.IwaseYumiko,
      MemberName.EtouMisa,
      MemberName.KawamuraMahiro,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.HatanakaSeira,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.MiyazawaSeira,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 1st single

const songGurugurucurtain: SongRaw = {
  title: SONGS["ぐるぐるカーテン"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["黒須克彦"],
    arrange: ["湯浅篤"],
    direct: ["操上和美"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
    ],
    secondRow: [
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
    ],
    thirdRow: [
      MemberName.KawamuraMahiro,
      MemberName.NoujouAmi,
      MemberName.NishinoNanase,
      MemberName.SaitouAsuka,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.InoueSayuri,
      MemberName.NakadaKana,
      MemberName.IchikiRena,
    ],
    fourthRow: [],
  },
};

const songHidarimurenoyuki: SongRaw = {
  title: SONGS["左胸の勇気"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小内喜文"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [MemberName.HatanakaSeira],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AndouMikumo,
      MemberName.IwaseYumiko,
      MemberName.ItouNene,
      MemberName.HatanakaSeira,
      MemberName.ItouMarika,
      MemberName.WadaMaaya,
      MemberName.NakamotoHimeka,
    ],
    secondRow: [
      MemberName.SaitouChiharu,
      MemberName.YamatoRina,
      MemberName.NagashimaSeira,
      MemberName.HiguchiHina,
      MemberName.KawagoHina,
      MemberName.WakatsukiYumi,
      MemberName.KashiwaYukina,
      MemberName.EtouMisa,
      MemberName.FukagawaMai,
      MemberName.MiyazawaSeira,
    ],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNogizakanouta: SongRaw = {
  title: SONGS["乃木坂の詩"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["井手コウジ"],
    arrange: ["井手コウジ"],
    direct: ["南流石"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AndouMikumo,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.ItouNene,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.IwaseYumiko,
      MemberName.EtouMisa,
      MemberName.KashiwaYukina,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouAsuka,
      MemberName.SaitouChiharu,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NagashimaSeira,
      MemberName.NakadaKana,
      MemberName.NakamotoHimeka,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.HatanakaSeira,
      MemberName.HiguchiHina,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.MiyazawaSeira,
      MemberName.YamatoRina,
      MemberName.WakatsukiYumi,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAitakattakamoshirenai: SongRaw = {
  title: SONGS["会いたかったかもしれない"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["BOUNCEBACK", "MIKOTO"],
    arrange: ["野中雄一"],
    direct: ["久保茂昭"],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.ItouNene,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.EtouMisa,
      MemberName.KawamuraMahiro,
      MemberName.SaitouAsuka,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
      MemberName.MiyazawaSeira,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songUshinaitakunaikara: SongRaw = {
  title: SONGS["失いたくないから"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["蛯原ランス"],
    arrange: ["塩川満己"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberName.IkomaRina, MemberName.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.InoueSayuri,
      MemberName.KawamuraMahiro,
      MemberName.SaitouAsuka,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NagashimaSeira,
      MemberName.NakamotoHimeka,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.HatanakaSeira,
      MemberName.FukagawaMai,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShiroikumoninotte: SongRaw = {
  title: SONGS["白い雲にのって"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["太田美知彦"],
    arrange: ["太田美知彦"],
    direct: [],
  },
  performers: {
    center: [MemberName.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AndouMikumo,
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.IchikiRena,
      MemberName.InoueSayuri,
      MemberName.IwaseYumiko,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouAsuka,
      MemberName.SaitouChiharu,
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.NoujouAmi,
      MemberName.HashimotoNanami,
      MemberName.HoshinoMinami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

/**
 * ALBUM SONGS
 * NOTE: Songs below are album-only songs (which means the songs didn't appear in singles).
 */

// 5th album songs

const arigachinarenai: SongRaw = {
  title: SONGS["ありがちな恋愛"].title,
  musicVideo: "",
  type: SongType.Lead,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMoshikimigainakereba: SongRaw = {
  title: SONGS["もし君がいなければ"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.EtouMisa,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.EtouMisa],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKissnoshuriken: SongRaw = {
  title: SONGS["キスの手裏剣"].title,
  musicVideo: "",
  type: SongType.FourthGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHoozue: SongRaw = {
  title: SONGS["頬杖をついては眠れない"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Super Mahirock"],
    arrange: ["Huge M"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.SaitouYuuri,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songPocchito: SongRaw = {
  title: SONGS["ぼっち党"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["庄司裕"],
    arrange: ["庄司裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.KuboShiori,
      MemberName.SakuraiReika,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSayuringoboshuchu: SongRaw = {
  title: SONGS["さゆりんご募集中"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["浦島健太", "菊池博人"],
    arrange: ["浦島健太", "菊池博人"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "さゆりんご軍団",
  },
  formations: {
    firstRow: [
      MemberName.MatsumuraSayuri,
      MemberName.ItouKarin,
      MemberName.SasakiKotoko,
      MemberName.TeradaRanze,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGorugonzora: SongRaw = {
  title: SONGS["ゴルゴンゾーラ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["BASEMINT"],
    arrange: ["BASEMINT"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.KitanoHinako,
      MemberName.HoriMiona,
      MemberName.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songZambi: SongRaw = {
  title: SONGS["もうすぐ～ザンビ伝説～"].title,
  musicVideo: "",
  type: SongType.Special,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡辺剛"],
    arrange: ["渡辺剛"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 4th album songs

const songJibunnokoto: SongRaw = {
  title: SONGS["自分のこと"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小松清人"],
    arrange: ["小松清人"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NakamotoHimeka,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NakamotoHimeka],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songUnuborebeach: SongRaw = {
  title: SONGS["自惚れビーチ"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: [],
  },
  performers: {
    center: [MemberName.SuzukiAyane],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.NoujouAmi,
      MemberName.HiguchiHina,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSonohito: SongRaw = {
  title: SONGS["その女"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HRK"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [MemberName.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.NoujouAmi,
      MemberName.HiguchiHina,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songDareyorisobaniitai: SongRaw = {
  title: SONGS["誰よりそばにいたい"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["岩崎哲也"],
    arrange: ["関根佑樹"],
    direct: [],
  },
  performers: {
    center: [MemberName.HiguchiHina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.SuzukiAyane,
      MemberName.TeradaRanze,
      MemberName.NoujouAmi,
      MemberName.HiguchiHina,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 3rd album songs

const songSkydiving: SongRaw = {
  title: SONGS["スカイダイビング"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["菅井達司"],
    arrange: ["菅井達司"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.TeradaRanze,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.HiguchiHina,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKimigaaoidekureta: SongRaw = {
  title: SONGS["君が扇いでくれた"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山聡", "足立優"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.SuzukiAyane,
      MemberName.NoujouAmi,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songOmoidefirst: SongRaw = {
  title: SONGS["思い出ファースト"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ミサマサカリヲ"],
    arrange: ["遠藤ナオキ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SakaguchiTamami,
      MemberName.SatouKaede,
      MemberName.NakamuraReno,
      MemberName.MukaiHazuki,
      MemberName.YamashitaMizuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSetteiondo: SongRaw = {
  title: SONGS["設定温度"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["石井亮輔"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
      MemberName.SaitouYuuri,
      MemberName.SakuraiReika,
      MemberName.ShiraishiMai,
      MemberName.ShinuchiMai,
      MemberName.TakayamaKazumi,
      MemberName.TeradaRanze,
      MemberName.NakadaKana,
      MemberName.NishinoNanase,
      MemberName.HiguchiHina,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.SagaraIori,
      MemberName.SasakiKotoko,
      MemberName.SuzukiAyane,
      MemberName.NoujouAmi,
      MemberName.YamazakiRena,
      MemberName.WatanabeMiria,
      MemberName.WadaMaaya,
    ],
    thirdRow: [
      MemberName.ItouRiria,
      MemberName.IwamotoRenka,
      MemberName.UmezawaMinami,
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.SakaguchiTamami,
      MemberName.SatouKaede,
      MemberName.NakamuraReno,
      MemberName.MukaiHazuki,
      MemberName.YamashitaMizuki,
      MemberName.YoshidaAyanoChristie,
      MemberName.YodaYuuki,
    ],
    fourthRow: [],
  },
};

const songRewindanohi: SongRaw = {
  title: SONGS["Rewindあの日"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["藤木テツ"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SakuraiReika,
      MemberName.NishinoNanase,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGomensmoothie: SongRaw = {
  title: SONGS["ごめんね、スムージー"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["YASUSHI WATANABE"],
    arrange: ["YASUSHI WATANABE"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.NakamotoHimeka,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMinikuiwatashi: SongRaw = {
  title: SONGS["醜い私"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["外山大輔"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.EtouMisa,
      MemberName.SaitouYuuri,
      MemberName.ShinuchiMai,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKataikaranoyoni: SongRaw = {
  title: SONGS["硬い殻のように抱きしめたい"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "三谷秀甫", "谷地学"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.SaitouAsuka,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.SaitouAsuka],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMangetsugakieta: SongRaw = {
  title: SONGS["満月が消えた"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.IkutaErika,
      MemberName.IkomaRina,
      MemberName.HoshinoMinami,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songWatabokori: SongRaw = {
  title: SONGS["ワタボコリ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ハサミマン"],
    arrange: ["ハサミマン"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songRyuseidiscotic: SongRaw = {
  title: SONGS["流星ディスコティック"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Masayoshi Kawabata"],
    arrange: ["Masayoshi Kawabata"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.ShiraishiMai, MemberName.MatsumuraSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokyakutobigaku: SongRaw = {
  title: SONGS["忘却と美学"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["早川博隆"],
    arrange: ["早川博隆"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberName.AkimotoManatsu, MemberName.TakayamaKazumi],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 2nd album songs

const songKikkake: SongRaw = {
  title: SONGS["きっかけ"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTaiyonikudokarete: SongRaw = {
  title: SONGS["太陽に口説かれて"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["フジノタカフミ"],
    arrange: ["フジノタカフミ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songYokubonoReincarnation: SongRaw = {
  title: SONGS["欲望のリインカーネーション"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康", "本山清治"],
    compose: ["渡辺未来"],
    arrange: ["渡辺未来"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKukikan: SongRaw = {
  title: SONGS["空気感"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["DR QUEENBEE"],
    arrange: ["DR QUEENBEE"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.EtouMisa,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.HashimotoNanami,
      MemberName.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKogoseikibo: SongRaw = {
  title: SONGS["光合成希望"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["吉田博"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songThreefoldchoice: SongRaw = {
  title: SONGS["Threefold choice"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTeitaionnokisu: SongRaw = {
  title: SONGS["低体温のキス"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中谷あつこ"],
    arrange: ["田上陽一"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.IkutaErika,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShitsurenshitara: SongRaw = {
  title: SONGS["失恋したら、顔を洗え!"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["さいとうくにあき"],
    arrange: ["内田充"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "乃木團",
  },
  formations: {
    firstRow: [MemberName.NakamotoHimeka, MemberName.NoujouAmi],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKakigorinokataomoi: SongRaw = {
  title: SONGS["かき氷の片想い"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["白須賀悟"],
    arrange: ["白須賀悟"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKanjorokugosen: SongRaw = {
  title: SONGS["環状六号線"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["サイトウリョースケ"],
    arrange: ["サイトウリョースケ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "犬メン",
  },
  formations: {
    firstRow: [
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKuchiyakusoku: SongRaw = {
  title: SONGS["口約束"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Amber"],
    arrange: ["若田部誠"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "女子校カルテット",
  },
  formations: {
    firstRow: [
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
      MemberName.NakadaKana,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 1st album songs

const songDarekahamikata: SongRaw = {
  title: SONGS["誰かは味方"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["宮坂聡彦"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.EtouMisa,
      MemberName.SakuraiReika,
      MemberName.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKakumeinouma: SongRaw = {
  title: SONGS["革命の馬"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["伊勢佳史"],
    arrange: ["伊勢佳史"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokugairubasho: SongRaw = {
  title: SONGS["僕がいる場所"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [MemberName.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnatanotamenihikitai: SongRaw = {
  title: SONGS["あなたのために弾きたい"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["樫原伸彦"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.IkutaErika,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKeishasuru: SongRaw = {
  title: SONGS["傾斜する"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["須藤哲平", "長谷川湊"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [MemberName.KojimaHaruna],
    fukujin: [],
    solo: "",
    unit: "こじ坂46",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNazonorakugaki: SongRaw = {
  title: SONGS["なぞの落書き"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["片桐周太郎"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberName.SaitouAsuka,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songJiyunokanata: SongRaw = {
  title: SONGS["自由の彼方"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: [],
  },
  performers: {
    center: [MemberName.InoueSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHitoriyogari: SongRaw = {
  title: SONGS["ひとりよがり"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberName.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberName.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

export const rawSongs: SongsRawArray = [
  songKaerimichi,
  songJikochu,
  songSyncronicity,
  songItsukadekirukara,
  songNigemizu,
  songInfluencer,
  songSayonaranoimi,
  songHadashidesummer,
  songHarujion,
  songHanashitaidarekagairu,
  songTaiyoknock,
  songInochihautsukushii,
  songNandomenoaozoraka,
  songNatsunofreeandeasy,
  songKizuitarakataomoi,
  songValletta,
  songGirlsrule,
  songKiminonahakibo,
  songSeifukunomannequin,
  songHashirebicycle,
  songOideshampoo,
  songGurugurucurtain,
  songNichijo,
  songSankakunoakichi,
  songAtarashiisekai,
  songMyrule,
  songUnder,
  songFusenhaikiteiru,
  songBulanko,
  songSecretGravity,
  songFutogo,
  songShittonokenri,
  songWakaregiwa,
  songKimihabokuto,
  songAnohibokuha,
  songKokoniiruriyu,
  songUmaretamamade,
  songHatsukoinohito,
  songSenpuki,
  songjusannichinokiyobi,
  songHarunomelody,
  songNamidagamada,
  songOkaminikuchibuewo,
  songHidarimurenoyuki,
  songKyaraban,
  songTsuduku,
  songKokuhakunojunban,
  songChopinnousotsuki,
  songShiritaikoto,
  songSoratobira,
  songJibunjanaikanji,
  songKokoronomonologue,
  songChikyugamaruinara,
  songAnnanisukidattanoni,
  songAgainst,
  songKumoninarebaii,
  songScoutman,
  songTokitokimekimeki,
  songKotodamaho,
  songFumensho,
  songMaaiika,
  songShitsurenosojinin,
  songBokunoshodo,
  songAtarashiikafun,
  songOnnahahitorija,
  songHitonatsu,
  songNaitatteii,
  songLiveshin,
  songMirainokotae,
  songJinseiwokangae,
  songIgaibreak,
  songAnotherghost,
  songSanbanmenokaze,
  songAtarisawarinonai,
  songKodokunaaozora,
  songAnokyoshitsu,
  songNidomenokisukara,
  songKiminiokuruhana,
  songNaimononetari,
  songBokudakenohikari,
  songOffshoregirl,
  songInochinoshinjitsu,
  songHakumaisama,
  songIkuatenonaibokutachi,
  songHarukanarubhutan,
  songTsuyogarutsubomi,
  songKyushamen,
  songTsuribori,
  songYuutsutofusengamu,
  songPopipappapa,
  songOtonahenochikamichi,
  songKanashiminowasurekata,
  songSukima,
  songMosukoshinoyumewo,
  songSakanatachinolovesong,
  songMuhyojo,
  songHanenokioku,
  songSeifukuwonuide,
  songArakajimeromance,
  songTachinaorichu,
  songGomennezutto,
  songBorder,
  songTomawarinoaijo,
  songKorogattakanewonarase,
  songWatashiokiru,
  songTenderdays,
  songNanimodekizuni,
  songSonosakinodeguchi,
  songMukuchinalion,
  songBokugaikanakya,
  songRomancenostart,
  songToikimethod,
  songKodokukyodai,
  songDankeschon,
  songTsukinookisa,
  songWatashinotameni,
  songSonnabakana,
  songYasashisatoha,
  songSekaideichiban,
  songKomoriyo,
  songHokanohoshikara,
  sonNingentoiugaki,
  songShakism,
  songRomanticIkayaki,
  songDekopin,
  songPsychokineses,
  songYubiboenkyo,
  songYasashisanaramaniatteru,
  songKokojanaidokoka,
  songShibuyablues,
  songSekkachinakatatsumuri,
  songHitohanazehashirunoka,
  songOtogadenaiguitar,
  songKairyunoshimayo,
  songKokoronokusuri,
  songGuzenwoiiwakenishite,
  songMizutamamoyo,
  songHouse,
  songNogizakanouta,
  songAitakattakamoshirenai,
  songUshinaitakunaikara,
  songShiroikumoninotte,
  songDarekahamikata,
  songKakumeinouma,
  songBokugairubasho,
  songAnatanotamenihikitai,
  songKeishasuru,
  songNazonorakugaki,
  songJiyunokanata,
  songHitoriyogari,
  songKikkake,
  songTaiyonikudokarete,
  songYokubonoReincarnation,
  songKukikan,
  songKogoseikibo,
  songThreefoldchoice,
  songTeitaionnokisu,
  songShitsurenshitara,
  songKakigorinokataomoi,
  songKanjorokugosen,
  songKuchiyakusoku,
  songSkydiving,
  songKimigaaoidekureta,
  songOmoidefirst,
  songSetteiondo,
  songRewindanohi,
  songGomensmoothie,
  songMinikuiwatashi,
  songKataikaranoyoni,
  songMangetsugakieta,
  songWatabokori,
  songRyuseidiscotic,
  songBokyakutobigaku,
  songJibunnokoto,
  songUnuborebeach,
  songSonohito,
  songDareyorisobaniitai,
  arigachinarenai,
  songMoshikimigainakereba,
  songKissnoshuriken,
  songHoozue,
  songPocchito,
  songSayuringoboshuchu,
  songGorugonzora,
  songZambi,
  singout,
  kassouro,
  noyounasonzai,
  amiloving,
  heikousen,
  yonbanmenohikari,
  aimai,
  yoakemade,
  bokunokoto,
  romendensha,
  toshoshitsu,
  tokidokiomoidashite,
  domybest,
  bokunoomoikomi,
  hogoshoku,
  staywithme,
  jaane,
  anastasia,
  brandnewday,
  isee,
  fantastic,
];
