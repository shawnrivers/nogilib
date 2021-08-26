import { MemberNameKey } from 'server/actors/Members/constants/memberName';

import { SongType } from 'server/actors/Songs/constants/songType';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const TWENTY_EIGHTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '君に叱られた',
    type: SongType.Title,
    center: [MemberNameKey.KakiHaruka],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.EndouSakura,
        MemberNameKey.YodaYuuki,
        MemberNameKey.KakiHaruka,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.YamashitaMizuki,
      ],
      secondRow: [
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.IkutaErika,
        MemberNameKey.KuboShiori,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.HiguchiHina,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.KitanoHinako,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TamuraMayu,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.KakehashiSayaka,
      ],
    },
  }),
];
