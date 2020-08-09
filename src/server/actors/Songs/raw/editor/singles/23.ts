import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const TWENTY_THIRD_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['Sing Out!'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Ryota Saito', 'TETTA'],
      arrange: ['野中“まさ”雄一'],
      direct: ['池田一真'],
    },
    center: [MemberNameKey.SaitouAsuka],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.HoriMiona,
        MemberNameKey.IkutaErika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.YodaYuuki,
      ],
      secondRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KuboShiori,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.ItouRiria,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['滑走路'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['CHOCOLATE MIX'],
      arrange: ['CHOCOLATE MIX'],
      direct: ['maxilla'],
    },
    center: [MemberNameKey.TeradaRanze],
    formations: {
      firstRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamuraReno,
        MemberNameKey.HiguchiHina,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamazakiRena,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['のような存在'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'APAZZI'],
      arrange: ['Akira Sunset', 'APAZZI'],
      direct: ['伊藤衆人'],
    },
    formations: {
      firstRow: [MemberNameKey.SaitouAsuka, MemberNameKey.ShiraishiMai],
    },
  }),
  createSongRaw({
    title: SONGS['Am I Loving?'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田智和'],
      arrange: ['APAZZI'],
      direct: [],
    },
    formations: {
      firstRow: [
        MemberNameKey.KitanoHinako,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['平行線'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['近藤圭一'],
      arrange: ['近藤圭一'],
      direct: ['泉田岳'],
    },
    formations: {
      firstRow: [
        MemberNameKey.IwamotoRenka,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['4番目の光'].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['月田茂'],
    },
    center: [MemberNameKey.EndouSakura],
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
    title: SONGS['曖昧'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['doubleglass'],
      arrange: ['doubleglass'],
    },
    unit: UNIT_NAMES['からあげ姉妹'].name,
    formations: {
      firstRow: [MemberNameKey.IkutaErika, MemberNameKey.MatsumuraSayuri],
    },
  }),
];
