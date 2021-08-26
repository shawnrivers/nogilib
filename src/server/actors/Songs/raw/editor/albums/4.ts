import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const FOURTH_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'ありがちな恋愛',
    type: SongType.Lead,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['野中"まさ"雄一'],
    },
    center: [MemberNameKey.ShiraishiMai, MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.ItouRiria,
        MemberNameKey.InoueSayuri,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.SatouKaede,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: 'もし君がいなければ',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
      direct: [],
    },
    solo: MemberNameKey.EtouMisa,
  }),
  createSongRaw({
    title: 'キスの手裏剣',
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田智和'],
      arrange: ['住谷翔平'],
    },
    center: [MemberNameKey.EndouSakura],
    formations: {
      firstRow: [
        MemberNameKey.TamuraMayu,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.EndouSakura,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.KakiHaruka,
      ],
      secondRow: [
        MemberNameKey.HayakawaSeira,
        MemberNameKey.KitagawaYuri,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.ShibataYuna,
        MemberNameKey.YakuboMio,
        MemberNameKey.KanagawaSaya,
      ],
    },
  }),
  createSongRaw({
    title: '頬杖をついては眠れない',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Super Mahirock'],
      arrange: ['Huge M'],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: 'ぼっち党',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['庄司裕'],
      arrange: ['庄司裕'],
    },
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakuraiReika,
      ],
    },
  }),
  createSongRaw({
    title: 'さゆりんご募集中',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['浦島健太', '菊池博人'],
      arrange: ['浦島健太', '菊池博人'],
    },
    unit: UNIT_NAMES['さゆりんご軍団'].name,
    formations: {
      firstRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ItouKarin,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.TeradaRanze,
      ],
    },
  }),
  createSongRaw({
    title: 'ゴルゴンゾーラ',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['BASEMINT'],
      arrange: ['BASEMINT'],
    },
    formations: {
      firstRow: [
        MemberNameKey.KitanoHinako,
        MemberNameKey.HoriMiona,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: 'もうすぐ～ザンビ伝説～',
    type: SongType.Special,
    creators: {
      lyrics: ['秋元康'],
      compose: ['渡辺剛'],
      arrange: ['渡辺剛'],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouRiria,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KuboShiori,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakamuraReno,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
];
