import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const TWENTY_FIRST_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['ジコチューで行こう!'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['ナスカ'],
      arrange: ['野中"まさ"雄一'],
      direct: ['中村太洸'],
    },
    center: [MemberNameKey.SaitouAsuka],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.YodaYuuki,
        MemberNameKey.NishinoNanase,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamashitaMizuki,
      ],
      secondRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.EtouMisa,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['三角の空き地'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Hiroki'],
      arrange: ['Yasutaka.Ishio'],
      direct: ['月田茂'],
    },
    center: [MemberNameKey.NakadaKana],
    formations: {
      firstRow: [
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
        MemberNameKey.ItouRiria,
      ],
      secondRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.TeradaRanze,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SatouKaede,
      ],
      thirdRow: [
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.WadaMaaya,
        MemberNameKey.KawagoHina,
        MemberNameKey.NoujouAmi,
        MemberNameKey.NakamuraReno,
        MemberNameKey.ItouKarin,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.ItouJunna,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['空扉'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['FURUTA', 'Dr.Lilcom'],
      arrange: ['Dr.Lilcom'],
      direct: ['伊藤衆人'],
    },
    center: [MemberNameKey.UmezawaMinami],
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.YodaYuuki,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.IwamotoRenka,
      ],
      secondRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.EtouMisa,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.IkutaErika,
      ],
      thirdRow: [
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['自分じゃない感じ'].title,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['ツキダタダシ'],
      arrange: ['ツキダタダシ'],
    },
    center: [MemberNameKey.YamashitaMizuki],
    formations: {
      firstRow: [
        MemberNameKey.YodaYuuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.OozonoMomoko,
      ],
      secondRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.NakamuraReno,
      ],
      thirdRow: [
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.ItouRiria,
        MemberNameKey.SatouKaede,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['心のモノローグ'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['シライシ紗トリ'],
      arrange: ['シライシ紗トリ'],
      direct: ['英勉'],
    },
    formations: {
      firstRow: [MemberNameKey.ShiraishiMai, MemberNameKey.NishinoNanase],
    },
  }),
  createSongRaw({
    title: SONGS['地球が丸いなら'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山下孝之'],
      arrange: ['山下孝之'],
      direct: ['沖田修一'],
    },
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['あんなに好きだったのに...'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['木下めろん'],
      arrange: ['木下めろん'],
      direct: [],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.YodaYuuki,
        MemberNameKey.NishinoNanase,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamashitaMizuki,
      ],
      secondRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.EtouMisa,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
];
