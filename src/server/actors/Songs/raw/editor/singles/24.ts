import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_FOURTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['夜明けまで強がらなくてもいい'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田裕介'],
      arrange: ['APAZZI'],
      direct: ['丸山健志'],
    },
    center: [MemberNameKey.EndouSakura],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.KakiHaruka,
        MemberNameKey.EndouSakura,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.YodaYuuki,
      ],
      thirdRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KuboShiori,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['僕のこと、知ってる?'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      arrange: ['中村泰輔'],
    },
    center: [MemberNameKey.SaitouAsuka],
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
    title: SONGS['路面電車の街'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['山岸聖太'],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamashitaMizuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['図書室の君へ'].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['若田部誠'],
      direct: ['伊藤衆人'],
    },
    center: [MemberNameKey.KakehashiSayaka],
    formations: {
      firstRow: [
        MemberNameKey.EndouSakura,
        MemberNameKey.TamuraMayu,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.KanagawaSaya,
        MemberNameKey.TsutsuiAyame,
      ],
      secondRow: [
        MemberNameKey.KakiHaruka,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.YakuboMio,
        MemberNameKey.KitagawaYuri,
        MemberNameKey.ShibataYuna,
        MemberNameKey.HayakawaSeira,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['時々 思い出してください'].title,
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['頃安祐良'],
    },
    solo: MemberNameKey.SakuraiReika,
  }),

  createSongRaw({
    title: SONGS['～Do my best～じゃ意味はない'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['浦島健太', 'APAZZI'],
      arrange: ['浦島健太', 'APAZZI'],
      direct: ['maxilla'],
    },
    center: [MemberNameKey.IwamotoRenka],
    formations: {
      firstRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamuraReno,
        MemberNameKey.HiguchiHina,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamazakiRena,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['僕の思い込み'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['野中“まさ”雄一'],
    },
    center: [MemberNameKey.EndouSakura],
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.KakiHaruka,
        MemberNameKey.EndouSakura,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.YodaYuuki,
      ],
      thirdRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KuboShiori,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
];
