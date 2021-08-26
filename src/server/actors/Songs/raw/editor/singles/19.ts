import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const NINETEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'いつかできるから今日できる',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', '京田誠一'],
      arrange: ['Akira Sunset', '京田誠一'],
      direct: ['高橋栄樹'],
    },
    center: [MemberNameKey.NishinoNanase, MemberNameKey.SaitouAsuka],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.NishinoNanase,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.InoueSayuri,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.IkutaErika,
        MemberNameKey.ItouMarika,
        MemberNameKey.SakuraiReika,
        MemberNameKey.EtouMisa,
      ],
      thirdRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.IkomaRina,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.KitanoHinako,
        MemberNameKey.NakadaKana,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: 'My rule',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['藤田卓也'],
      arrange: ['藤田卓也'],
      direct: ['林希', '古屋蔵人'],
    },
    center: [MemberNameKey.HiguchiHina],
    formations: {
      firstRow: [
        MemberNameKey.WatanabeMiria,
        MemberNameKey.HiguchiHina,
        MemberNameKey.TeradaRanze,
      ],
      secondRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.YamazakiRena,
        MemberNameKey.SaitouChiharu,
      ],
      thirdRow: [
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.ItouKarin,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.WadaMaaya,
        MemberNameKey.ItouJunna,
      ],
    },
  }),
  createSongRaw({
    title: '不眠症',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['大貫和紀', '河原レオ', '高木龍一'],
      arrange: ['大貫和紀', '河原レオ', '高木龍一'],
    },
    center: [MemberNameKey.KuboShiori, MemberNameKey.YamashitaMizuki],
    formations: {
      firstRow: [
        MemberNameKey.KuboShiori,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: 'まあいいか?',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['HRK'],
      arrange: ['原広明'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: [MemberNameKey.AkimotoManatsu, MemberNameKey.ShiraishiMai],
    },
  }),
  createSongRaw({
    title: '失恋お掃除人',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['さいとうくにあき', 'Akira Sunset', '京田誠一'],
      arrange: ['さいとうくにあき', 'Akira Sunset', '京田誠一'],
      direct: ['伊藤衆人'],
    },
    unit: '若様軍団',
    formations: {
      firstRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: '僕の衝動',
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['石井伸昂'],
      arrange: ['石井伸昂'],
      direct: ['荒船泰廣'],
    },
    center: [MemberNameKey.ItouRiria],
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.ItouRiria,
        MemberNameKey.YodaYuuki,
      ],
      secondRow: [
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.SatouKaede,
        MemberNameKey.NakamuraReno,
      ],
      thirdRow: [
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.IwamotoRenka,
      ],
    },
  }),
  createSongRaw({
    title: '新しい花粉 〜ミュージカル「見知らぬ世界」より〜',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['新田目翔'],
      arrange: ['若田部誠'],
      direct: ['荒船泰廣'],
    },
    formations: {
      firstRow: [MemberNameKey.IkutaErika, MemberNameKey.KuboShiori],
    },
  }),
];
