import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['君の名は希望'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
      direct: ['山下敦弘'],
    },
    center: [MemberNameKey.IkomaRina],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.ItouNene,
        MemberNameKey.NakadaKana,
        MemberNameKey.InoueSayuri,
        MemberNameKey.NishinoNanase,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.FukagawaMai,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['13日の金曜日'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['網本ナオノブ'],
      arrange: ['湯浅篤'],
      direct: ['山田篤宏'],
    },
    center: [MemberNameKey.SaitouYuuri],
    formations: {
      firstRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.EtouMisa,
        MemberNameKey.NoujouAmi,
        MemberNameKey.IchikiRena,
      ],
      thirdRow: [
        MemberNameKey.YamatoRina,
        MemberNameKey.WadaMaaya,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.KashiwaYukina,
        MemberNameKey.AndouMikumo,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.HiguchiHina,
        MemberNameKey.KawagoHina,
        MemberNameKey.MiyazawaSeira,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['シャキイズム'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['岡本健介'],
      arrange: ['岡本健介'],
      direct: ['柳沢翔'],
    },
    center: [MemberNameKey.IkomaRina, MemberNameKey.HoshinoMinami],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouNene,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['ロマンティックいか焼き'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['横健介'],
      arrange: ['重永亮介'],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouNene,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['でこぴん'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['サイコキネシスの可能性'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
      direct: ['中村太洸'],
    },
    center: [MemberNameKey.SakuraiReika, MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.ItouNene,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
