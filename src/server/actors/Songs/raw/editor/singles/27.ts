import { MemberNameKey } from 'server/actors/Members/constants/memberName';

import { SongType } from 'server/actors/Songs/constants/songType';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const TWENTY_SEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'ごめんねFingers crossed',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦', 'APAZZI'],
      direct: ['東市篤憲'],
    },
    center: [MemberNameKey.EndouSakura],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.YodaYuuki,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.EndouSakura,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KakiHaruka,
      ],
      secondRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.IkutaErika,
        MemberNameKey.KuboShiori,
        MemberNameKey.TakayamaKazumi,
      ],
      thirdRow: [
        MemberNameKey.HiguchiHina,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TamuraMayu,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: '全部　夢のまま',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['you-me'],
      arrange: ['佐々木裕'],
      direct: ['神谷雄貴'],
    },
    center: [MemberNameKey.YodaYuuki],
    formations: {
      firstRow: [
        MemberNameKey.HoshinoMinami,
        MemberNameKey.YodaYuuki,
        MemberNameKey.TsutsuiAyame,
      ],
      secondRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.MatsumuraSayuri,
      ],
      thirdRow: [
        MemberNameKey.KakiHaruka,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.EndouSakura,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TamuraMayu,
      ],
    },
    performersType: {
      name: 'selected',
      single: '26',
    },
  }),
  createSongRaw({
    title: '大人たちには指示されない',
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['BASEMINT'],
    },
    center: [MemberNameKey.IwamotoRenka],
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.NakamuraReno,
      ],
      secondRow: [
        MemberNameKey.KuboShiori,
        MemberNameKey.YodaYuuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.UmezawaMinami,
      ],
      thirdRow: [
        MemberNameKey.SatouKaede,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.ItouRiria,
        MemberNameKey.YoshidaAyanoChristie,
      ],
    },
  }),
  createSongRaw({
    title: 'ざんぶざざぶん',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['NOVECHIKA', 'TETTA'],
      direct: ['高橋一生'],
    },
    formations: {
      firstRow: [MemberNameKey.YodaYuuki, MemberNameKey.TsutsuiAyame],
    },
  }),
  createSongRaw({
    title: 'さ～ゆ～Ready？',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Masayoshi Kawabata'],
      direct: ['萩原健太郎', '月田茂', '伊藤衆人'],
    },
    solo: MemberNameKey.MatsumuraSayuri,
  }),
  createSongRaw({
    title: '錆びたコンパス',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      direct: ['大久保拓朗'],
    },
    center: [MemberNameKey.YamazakiRena],
    formations: {
      firstRow: [
        MemberNameKey.WatanabeMiria,
        MemberNameKey.YamazakiRena,
        MemberNameKey.ItouJunna,
      ],
      secondRow: [
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
      ],
      thirdRow: [
        MemberNameKey.SatouKaede,
        MemberNameKey.WadaMaaya,
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.ItouRiria,
      ],
    },
  }),
  createSongRaw({
    title: '猫舌カモミールティー',
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Shinobu Suzuki'],
    },
    center: [MemberNameKey.TamuraMayu],
    formations: {
      firstRow: [
        MemberNameKey.MatsuoMiyu,
        MemberNameKey.TamuraMayu,
        MemberNameKey.YumikiNao,
      ],
      secondRow: [
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.KakiHaruka,
        MemberNameKey.EndouSakura,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.SeimiyaRei,
      ],
      thirdRow: [
        MemberNameKey.KitagawaYuri,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.KuromiHaruka,
        MemberNameKey.ShibataYuna,
        MemberNameKey.HayashiRuna,
        MemberNameKey.SatouRika,
        MemberNameKey.YakuboMio,
        MemberNameKey.KanagawaSaya,
      ],
    },
  }),
];
