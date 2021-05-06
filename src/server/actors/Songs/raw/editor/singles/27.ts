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
];
