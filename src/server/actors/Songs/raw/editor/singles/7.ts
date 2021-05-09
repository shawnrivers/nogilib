import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['バレッタ'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['サイトウヨシヒロ'],
      arrange: ['若田部誠'],
      direct: ['江湖広二'],
    },
    center: [MemberNameKey.HoriMiona],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.WakatsukiYumi,
      ],
      thirdRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.FukagawaMai,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.KawagoHina,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['初恋の人を今でも'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['田所貴司'],
    },
    center: [MemberNameKey.HoshinoMinami],
    formations: {
      firstRow: [
        MemberNameKey.InoueSayuri,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SaitouYuuri,
      ],
      secondRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.KawamuraMahiro,
      ],
      thirdRow: [
        MemberNameKey.SaitouChiharu,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.YamatoRina,
        MemberNameKey.ItouNene,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['月の大きさ'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
      direct: ['大久保拓朗'],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HoriMiona,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.WakatsukiYumi,
      ],
      thirdRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.FukagawaMai,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.KawagoHina,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['私のために 誰かのために'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
    },
    center: [MemberNameKey.ShiraishiMai],
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['そんなバカな…'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset'],
      arrange: ['Akira Sunset'],
      direct: ['丸山健志'],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.HoriMiona,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.KawagoHina,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HiguchiHina,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['やさしさとは'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
    },
    center: [MemberNameKey.HashimotoNanami],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
