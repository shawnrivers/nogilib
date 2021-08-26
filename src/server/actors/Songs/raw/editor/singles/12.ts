import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const TWELFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '太陽ノック',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['黒須克彦'],
      arrange: ['長田直之'],
      direct: ['三石直和'],
    },
    center: [MemberNameKey.IkomaRina],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.IkomaRina,
        MemberNameKey.IkutaErika,
        MemberNameKey.HashimotoNanami,
      ],
      secondRow: [
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.SakuraiReika,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.FukagawaMai,
      ],
      thirdRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.EtouMisa,
      ],
    },
  }),
  createSongRaw({
    title: '別れ際、もっと好きになる',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ha-j'],
      arrange: ['Akira Sunset', 'ha-j'],
      direct: ['山岸聖太'],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KitanoHinako,
        MemberNameKey.HoriMiona,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NakadaKana,
      ],
      secondRow: [
        MemberNameKey.SagaraIori,
        MemberNameKey.KawagoHina,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NoujouAmi,
        MemberNameKey.SaitouChiharu,
      ],
      thirdRow: [
        MemberNameKey.WadaMaaya,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.TeradaRanze,
        MemberNameKey.ItouKarin,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.ItouJunna,
        MemberNameKey.HiguchiHina,
      ],
    },
  }),
  createSongRaw({
    title: 'もう少しの夢',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['野中"まさ"雄一'],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
  createSongRaw({
    title: '魚たちのLOVE SONG',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['渡辺拓也'],
      arrange: ['渡辺拓也'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
      ],
    },
  }),
  createSongRaw({
    title: '無表情',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset'],
      arrange: ['Akira Sunset'],
      direct: ['月田茂', '山本篤彦', '柴谷麻以'],
    },
    unit: 'からあげ姉妹',
    formations: {
      firstRow: [MemberNameKey.IkutaErika, MemberNameKey.MatsumuraSayuri],
    },
  }),
  createSongRaw({
    title: '羽根の記憶',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
      direct: ['岡川太郎'],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.IkomaRina,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
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
    title: '制服を脱いでサヨナラを…',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
    },
    formations: {
      firstRow: [MemberNameKey.SaitouAsuka, MemberNameKey.HoshinoMinami],
    },
  }),
];
