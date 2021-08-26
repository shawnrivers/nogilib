import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';

export const THIRTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '今、話したい誰かがいる',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'APAZZI'],
      arrange: ['Akira Sunset', 'APAZZI'],
      direct: ['萩原健太郎'],
    },
    center: [MemberNameKey.ShiraishiMai, MemberNameKey.NishinoNanase],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.FukagawaMai,
      ],
      secondRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.IkutaErika,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoshinoMinami,
      ],
      thirdRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.IkomaRina,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: '嫉妬の権利',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['丸山真由子'],
      arrange: ['丸山真由子'],
      direct: ['井上強'],
    },
    center: [MemberNameKey.HoriMiona, MemberNameKey.NakamotoHimeka],
    formations: {
      firstRow: [
        MemberNameKey.KitanoHinako,
        MemberNameKey.HoriMiona,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.TeradaRanze,
      ],
      secondRow: [
        MemberNameKey.NakadaKana,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
      ],
      thirdRow: [
        MemberNameKey.KawagoHina,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.YamazakiRena,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SagaraIori,
        MemberNameKey.ItouJunna,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.ItouKarin,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: 'ポピパッパパー',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ha-j'],
      arrange: ['Akira Sunset', 'ha-j'],
      direct: ['丸山健志'],
    },
    center: [MemberNameKey.ShiraishiMai, MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.FukagawaMai,
      ],
      secondRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.IkutaErika,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoshinoMinami,
      ],
      thirdRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.IkomaRina,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: '大人への近道',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['湯浅弘章'],
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
    title: '悲しみの忘れ方',
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: ['近藤圭一'],
      arrange: ['久下真音'],
      direct: ['丸山健志'],
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
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
    performersType: {
      name: 'selected',
      single: '12',
    },
  }),
  createSongRaw({
    title: '隙間',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'Carlos K.'],
      arrange: ['Akira Sunset', 'Carlos K.'],
    },
    center: [MemberNameKey.NishinoNanase],
    formations: {
      firstRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
