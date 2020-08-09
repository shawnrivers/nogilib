import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const TWENTIETH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['シンクロニシティ'].title,
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
    title: SONGS['新しい世界'].title,
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
    title: SONGS['Against'].title,
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
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.KawagoHina,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['雲になればいい'].title,
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
    title: SONGS['スカウトマン'].title,
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
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['トキトキメキメキ'].title,
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
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['言霊砲'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Ryota Saito', 'TomoLow'],
      arrange: ['Ryota Saito', 'TomoLow'],
    },
    unit: UNIT_NAMES['いもうと坂'].name,
    formations: {
      firstRow: [
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
];
