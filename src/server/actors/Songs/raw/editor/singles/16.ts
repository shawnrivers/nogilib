import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const SIXTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['サヨナラの意味'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['若田部誠'],
      direct: ['柳沢翔'],
    },
    center: [MemberNameKey.HashimotoNanami],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.IkutaErika,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.HoriMiona,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.EtouMisa,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.InoueSayuri,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SakuraiReika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.KitanoHinako,
        MemberNameKey.ItouMarika,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['ブランコ'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Hiro Hoashi'],
      arrange: ['Hiro Hoashi'],
      direct: ['伊藤衆人'],
    },
    center: [MemberNameKey.TeradaRanze],
    formations: {
      firstRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.HiguchiHina,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NoujouAmi,
      ],
      secondRow: [
        MemberNameKey.SaitouYuuri,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.SaitouChiharu,
      ],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.WadaMaaya,
        MemberNameKey.ItouKarin,
        MemberNameKey.KawagoHina,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SagaraIori,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['孤独な青空'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['aokado'],
      arrange: ['aokado'],
    },
    center: [MemberNameKey.HashimotoNanami],
    formations: {
      firstRow: [
        MemberNameKey.HashimotoNanami,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['あの教室'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['カワノミチオ'],
      arrange: ['カワノミチオ'],
      direct: ['山岸聖太'],
    },
    formations: {
      firstRow: [MemberNameKey.SaitouAsuka, MemberNameKey.HoriMiona],
    },
  }),
  createSongRaw({
    title: SONGS['2度目のキスから'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'APAZZI'],
      arrange: ['Akira Sunset', 'APAZZI'],
      direct: ['中村太洸'],
    },
    unit: UNIT_NAMES['真夏さんリスペクト軍団'].name,
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SagaraIori,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['君に贈る花がない'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Rizz'],
      arrange: ['山田竜平'],
      direct: ['東市篤憲'],
    },
    unit: UNIT_NAMES['サンクエトワール'].name,
    formations: {
      firstRow: [
        MemberNameKey.KitanoHinako,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['ないものねだり'].title,
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸谷マナブ'],
      arrange: ['丸谷マナブ', '福田貴史'],
      direct: ['山岸聖太'],
    },
    solo: MemberNameKey.HashimotoNanami,
  }),
];
