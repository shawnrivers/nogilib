import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const SEVENTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'インフルエンサー',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['すみだしんや'],
      arrange: ['APAZZI'],
      direct: ['丸山健志'],
    },
    center: [MemberNameKey.NishinoNanase, MemberNameKey.ShiraishiMai],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoriMiona,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.EtouMisa,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.IkomaRina,
        MemberNameKey.IkutaErika,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.InoueSayuri,
        MemberNameKey.TeradaRanze,
        MemberNameKey.KitanoHinako,
        MemberNameKey.ItouMarika,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
      ],
    },
  }),
  createSongRaw({
    title: '風船は生きている',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['泉佳伸', '三好翔太'],
      arrange: ['早川博隆', '三好翔太'],
      direct: ['多田卓也'],
    },
    center: [MemberNameKey.WatanabeMiria],
    formations: {
      firstRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
      ],
      secondRow: [
        MemberNameKey.SaitouChiharu,
        MemberNameKey.ItouKarin,
        MemberNameKey.NoujouAmi,
        MemberNameKey.SagaraIori,
      ],
      thirdRow: [
        MemberNameKey.KawagoHina,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.WadaMaaya,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawamuraMahiro,
      ],
    },
  }),
  createSongRaw({
    title: '人生を考えたくなる',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['片桐周太郎'],
      arrange: ['片桐周太郎'],
    },
    unit: '女子校カルテット',
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: '意外BREAK',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['すみだしんや'],
      arrange: ['華原大輔'],
      direct: ['伊藤衆人'],
    },
    unit: '姉御坂',
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: 'Another Ghost',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['前迫潤哉', 'Yasutaka.Ishio'],
      arrange: ['Yasutaka.Ishio'],
      direct: ['井上強'],
    },
    unit: 'ナスカ',
    formations: {
      firstRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.NishinoNanase,
      ],
    },
  }),
  createSongRaw({
    title: '三番目の風',
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['丸谷マナブ'],
      direct: ['岡川太郎'],
    },
    center: [MemberNameKey.OozonoMomoko],
    formations: {
      firstRow: [
        MemberNameKey.KuboShiori,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.YamashitaMizuki,
      ],
      secondRow: [
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.YodaYuuki,
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
      ],
      thirdRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.NakamuraReno,
        MemberNameKey.SatouKaede,
        MemberNameKey.YoshidaAyanoChristie,
      ],
    },
  }),
  createSongRaw({
    title: '当たり障りのない話',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['小網準'],
      arrange: ['野中"まさ"雄一'],
    },
    unit: 'かすみ草',
    formations: {
      firstRow: [
        MemberNameKey.IkomaRina,
        MemberNameKey.InoueSayuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
];
