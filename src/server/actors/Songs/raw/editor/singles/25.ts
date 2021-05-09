import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['しあわせの保護色'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['MASANORI URA'],
      arrange: ['武藤星児'],
      direct: ['池田一真'],
    },
    center: [MemberNameKey.ShiraishiMai],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.HoshinoMinami,
      ],
      secondRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.WadaMaaya,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
      ],
      thirdRow: [
        MemberNameKey.KakiHaruka,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.HoriMiona,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.EndouSakura,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.YodaYuuki,
        MemberNameKey.KitanoHinako,
        MemberNameKey.UmezawaMinami,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['サヨナラ Stay with me'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['シライシ紗トリ'],
      arrange: ['シライシ紗トリ'],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.KuboShiori,
        MemberNameKey.YodaYuuki,
        MemberNameKey.EndouSakura,
        MemberNameKey.KakiHaruka,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['じゃあね。'].title,
    type: SongType.Solo,
    creators: {
      lyrics: ['白石麻衣'],
      compose: ['浦島健太', 'H.Shing'],
      arrange: ['菊池博人'],
      direct: ['湯浅弘章'],
    },
    solo: MemberNameKey.ShiraishiMai,
  }),
  createSongRaw({
    title: SONGS['アナスターシャ'].title,
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      arrange: ['中村泰輔'],
      direct: ['伊藤衆人'],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.KitanoHinako,
      ],
      secondRow: [
        MemberNameKey.TeradaRanze,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.WatanabeMiria,
      ],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.YamazakiRena,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['毎日がBrand new day'].title,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['APAZZI'],
      arrange: ['APAZZI'],
      direct: ['横堀光範'],
    },
    center: [MemberNameKey.KuboShiori],
    formations: {
      firstRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.YodaYuuki,
        MemberNameKey.OozonoMomoko,
      ],
      secondRow: [
        MemberNameKey.SatouKaede,
        MemberNameKey.NakamuraReno,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.ItouRiria,
        MemberNameKey.YoshidaAyanoChristie,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['I see…'].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['youth case'],
      arrange: ['佐々木博史'],
      direct: ['神谷雄貴'],
    },
    center: [MemberNameKey.KakiHaruka],
    formations: {
      firstRow: [
        MemberNameKey.TamuraMayu,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.KakiHaruka,
        MemberNameKey.EndouSakura,
        MemberNameKey.TsutsuiAyame,
      ],
      secondRow: [
        MemberNameKey.ShibataYuna,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.KanagawaSaya,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.YakuboMio,
        MemberNameKey.KitagawaYuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['ファンタスティック三色パン'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['ジンツチハシ'],
      arrange: ['ジンツチハシ'],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
      ],
    },
  }),
];
