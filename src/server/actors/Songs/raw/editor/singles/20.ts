import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';

import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const TWENTIETH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'シンクロニシティ',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['シライシ紗トリ'],
      arrange: ['シライシ紗トリ'],
      direct: ['池田一真'],
    },
    center: [MemberNameKey.ShiraishiMai],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.HoriMiona,
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.YodaYuuki,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.KuboShiori,
        MemberNameKey.IkomaRina,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.EtouMisa,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.TeradaRanze,
      ],
    },
  }),
  createSongRaw({
    title: '新しい世界',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['横堀光範'],
    },
    center: [MemberNameKey.SuzukiAyane],
    formations: {
      firstRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.NakadaKana,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.YamazakiRena,
        MemberNameKey.ItouRiria,
      ],
      secondRow: [
        MemberNameKey.MukaiHazuki,
        MemberNameKey.ItouKarin,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.ItouJunna,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SatouKaede,
      ],
      thirdRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.KawagoHina,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.NakamuraReno,
        MemberNameKey.WadaMaaya,
        MemberNameKey.SagaraIori,
      ],
    },
  }),
  createSongRaw({
    title: 'Against',
    type: SongType.FirstGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['丸山健志'],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.IkomaRina,
        MemberNameKey.IkutaErika,
        MemberNameKey.NishinoNanase,
      ],
      secondRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
      ],
      thirdRow: [
        MemberNameKey.WadaMaaya,
        MemberNameKey.InoueSayuri,
        MemberNameKey.NoujouAmi,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
        MemberNameKey.KawagoHina,
        MemberNameKey.SaitouYuuri,
      ],
    },
  }),
  createSongRaw({
    title: '雲になればいい',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['丸谷マナブ'],
    },
    unit: UNIT_NAMES['藤桜梨'].name,
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.EtouMisa,
        MemberNameKey.SakuraiReika,
      ],
    },
  }),
  createSongRaw({
    title: 'スカウトマン',
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['SaSA'],
      arrange: ['SaSA'],
      direct: ['中村太洸'],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.HoriMiona,
        MemberNameKey.SuzukiAyane,
      ],
      secondRow: [MemberNameKey.TeradaRanze, MemberNameKey.ShinuchiMai],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouKarin,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.SagaraIori,
      ],
    },
  }),
  createSongRaw({
    title: 'トキトキメキメキ',
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中山聡', '足立優'],
      arrange: ['中山聡', '足立優'],
      direct: ['伊藤衆人'],
    },
    center: [MemberNameKey.IwamotoRenka],
    formations: {
      firstRow: [
        MemberNameKey.NakamuraReno,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.SakaguchiTamami,
      ],
      secondRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YodaYuuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
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
    title: '言霊砲',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Ryota Saito', 'TomoLow'],
      arrange: ['Ryota Saito', 'TomoLow'],
    },
    unit: UNIT_NAMES['いもうと坂'].name,
    formations: {
      firstRow: [
        MemberNameKey.KuboShiori,
        MemberNameKey.YodaYuuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.OozonoMomoko,
      ],
    },
  }),
];
