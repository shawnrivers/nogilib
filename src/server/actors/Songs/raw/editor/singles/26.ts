import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongRaw } from 'server/actors/Songs/models';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_SIXTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['僕は僕を好きになる'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '石原剛志'],
      direct: ['奥山大史'],
    },
    center: [MemberNameKey.YamashitaMizuki],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.EndouSakura,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.HoriMiona,
        MemberNameKey.YodaYuuki,
        MemberNameKey.KakiHaruka,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TamuraMayu,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['冷たい水の中'].title,
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山口寛雄'],
      arrange: ['山口寛雄'],
      direct: ['山戸結希'],
    },
    solo: MemberNameKey.HoriMiona,
  }),
  createSongRaw({
    title: SONGS['Out of the blue'].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['youth case'],
      arrange: ['石塚知生'],
      direct: ['N2B'],
    },
    center: [MemberNameKey.HayakawaSeira],
    formations: {
      firstRow: [
        MemberNameKey.KakiHaruka,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.TamuraMayu,
      ],
      secondRow: [
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.KanagawaSaya,
        MemberNameKey.EndouSakura,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.SatouRika,
      ],
      thirdRow: [
        MemberNameKey.MatsuoMiyu,
        MemberNameKey.YakuboMio,
        MemberNameKey.KuromiHaruka,
        MemberNameKey.ShibataYuna,
        MemberNameKey.HayashiRuna,
        MemberNameKey.KitagawaYuri,
        MemberNameKey.YumikiNao,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['口ほどにもないKISS'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中村泰輔'],
      arrange: ['中村泰輔'],
      direct: ['頃安祐良'],
    },
    center: [MemberNameKey.SakaguchiTamami],
    formations: {
      firstRow: [
        MemberNameKey.SuzukiAyane,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.KitanoHinako,
      ],
      secondRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.HiguchiHina,
        MemberNameKey.TeradaRanze,
        MemberNameKey.ItouRiria,
      ],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.SatouKaede,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.WadaMaaya,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.NakamuraReno,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['明日がある理由'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['YU-JIN'],
      arrange: ['YU-JIN'],
    },
    center: [MemberNameKey.IwamotoRenka],
    formations: {
      firstRow: [
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.EndouSakura,
      ],
      secondRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.KakiHaruka,
        MemberNameKey.YodaYuuki,
        MemberNameKey.OozonoMomoko,
      ],
      thirdRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.IkutaErika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoriMiona,
        MemberNameKey.KitanoHinako,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['Wilderness world'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['youth case'],
      arrange: ['youth case', '城戸紘志'],
      direct: ['東市篤憲'],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.KakiHaruka,
        MemberNameKey.YodaYuuki,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.MatsumuraSayuri,
      ],
      secondRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.EndouSakura,
        MemberNameKey.IkutaErika,
        MemberNameKey.HoriMiona,
        MemberNameKey.UmezawaMinami,
      ],
      thirdRow: [
        MemberNameKey.TamuraMayu,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.ShinuchiMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['友情ピアス'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['カワノミチオ'],
      arrange: ['カワノミチオ'],
      direct: ['高野寛地'],
    },
    formations: {
      firstRow: [MemberNameKey.EndouSakura, MemberNameKey.OozonoMomoko],
    },
  }),
];
