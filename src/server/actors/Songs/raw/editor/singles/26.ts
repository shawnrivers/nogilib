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
      arrange: [],
      direct: [],
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
      compose: [],
      arrange: [],
      direct: ['山戸結希'],
    },
    solo: MemberNameKey.HoriMiona,
  }),
  createSongRaw({
    title: SONGS['Out of the blue'].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: [],
      arrange: [],
      direct: [],
    },
    center: [MemberNameKey.HayakawaSeira],
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
        MemberNameKey.KuromiHaruka,
        MemberNameKey.SatouRika,
        MemberNameKey.HayashiRuna,
        MemberNameKey.MatsuoMiyu,
        MemberNameKey.YumikiNao,
      ],
    },
  }),
];
