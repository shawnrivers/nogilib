import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const TWENTY_SEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['ごめんねFingers crossed'].title,
    type: SongType.Title,
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
    title: SONGS['全部　夢のまま'].title,
    type: SongType.Coupling,
    center: [MemberNameKey.YamashitaMizuki],
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
    title: SONGS['大人たちには指示されない'].title,
    type: SongType.ThirdGeneration,
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
    title: SONGS['ざんぶざざぶん'].title,
    type: SongType.Unit,
    formations: {
      firstRow: [MemberNameKey.YodaYuuki, MemberNameKey.TsutsuiAyame],
    },
  }),
  createSongRaw({
    title: SONGS['さ～ゆ～Ready？'].title,
    type: SongType.Solo,
    solo: MemberNameKey.MatsumuraSayuri,
  }),
  createSongRaw({
    title: SONGS['錆びたコンパス'].title,
    type: SongType.Under,
    center: [MemberNameKey.YamazakiRena],
    formations: {
      firstRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouRiria,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['猫舌カモミールティー'].title,
    type: SongType.FourthGeneration,
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
