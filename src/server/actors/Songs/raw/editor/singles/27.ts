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
];
