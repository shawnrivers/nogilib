import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const TWENTY_SECOND_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['帰り道は遠回りしたくなる'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['渡邉俊彦'],
      arrange: ['渡邉俊彦', '早川博隆'],
      direct: ['関和亮'],
    },
    center: [MemberNameKey.NishinoNanase],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.IkutaErika,
        MemberNameKey.YodaYuuki,
      ],
      secondRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoriMiona,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SakuraiReika,
        MemberNameKey.MatsumuraSayuri,
      ],
      thirdRow: [
        MemberNameKey.SaitouYuuri,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SatouKaede,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.ItouRiria,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['日常'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', '野口大志'],
      arrange: ['Akira Sunset', '野口大志'],
      direct: ['今泉力哉'],
    },
    center: [MemberNameKey.KitanoHinako],
    formations: {
      firstRow: [
        MemberNameKey.SuzukiAyane,
        MemberNameKey.HiguchiHina,
        MemberNameKey.KitanoHinako,
        MemberNameKey.TeradaRanze,
        MemberNameKey.IwamotoRenka,
      ],
      secondRow: [
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.YamazakiRena,
        MemberNameKey.KuboShiori,
        MemberNameKey.NakadaKana,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.MukaiHazuki,
      ],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.WadaMaaya,
        MemberNameKey.NakamuraReno,
        MemberNameKey.KawagoHina,
        MemberNameKey.ItouKarin,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.YoshidaAyanoChristie,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['キャラバンは眠らない'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['CottON'],
      arrange: ['CottON'],
      direct: ['横堀光範'],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KitanoHinako,
        MemberNameKey.KuboShiori,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.HiguchiHina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['つづく'].title,
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['若田部誠'],
      arrange: ['若田部誠'],
      direct: ['湯浅弘章'],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
  createSongRaw({
    title: SONGS['告白の順番'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['安部純'],
      arrange: ['安部純'],
      direct: ['荒船泰廣'],
    },
    unit: UNIT_NAMES['女子校カルテット'].name,
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
    title: SONGS['ショパンの嘘つき'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山本加津彦'],
      arrange: ['山本加津彦'],
    },
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['知りたいこと'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['佐々木裕'],
      arrange: ['佐々木裕'],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YodaYuuki,
      ],
      fourthRow: [],
    },
  }),
];
