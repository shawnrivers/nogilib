import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongRaw } from 'server/actors/Songs/models';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_SIXTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['タイトル未定'].title,
    type: SongType.Title,
    creators: {
      lyrics: [],
      compose: [],
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
];
