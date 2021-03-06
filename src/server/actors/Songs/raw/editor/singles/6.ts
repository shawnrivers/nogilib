import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SIXTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['ガールズルール'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['後藤康二'],
      arrange: ['後藤康二'],
      direct: ['柳沢翔'],
    },
    center: [MemberNameKey.ShiraishiMai],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HashimotoNanami,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.NishinoNanase,
        MemberNameKey.TakayamaKazumi,
      ],
      thirdRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.NakadaKana,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.FukagawaMai,
        MemberNameKey.SaitouYuuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['扇風機'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['角野寿和'],
      arrange: ['野村陽一郎'],
      direct: ['池田一真'],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.HiguchiHina,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.NakamotoHimeka,
      ],
      secondRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.EtouMisa,
        MemberNameKey.KawamuraMahiro,
      ],
      thirdRow: [
        MemberNameKey.ItouNene,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.IchikiRena,
      ],
      fourthRow: [
        MemberNameKey.YamatoRina,
        MemberNameKey.KawagoHina,
        MemberNameKey.WadaMaaya,
        MemberNameKey.KashiwaYukina,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.MiyazawaSeira,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['世界で一番 孤独なLover'].title,
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['河原嶺旭'],
      arrange: ['百石元'],
      direct: ['丸山健志'],
    },
    center: [MemberNameKey.ShiraishiMai],
    formations: {
      firstRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.HashimotoNanami,
      ],
      secondRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.NishinoNanase,
        MemberNameKey.TakayamaKazumi,
      ],
      thirdRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.NakadaKana,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.FukagawaMai,
        MemberNameKey.SaitouYuuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['コウモリよ'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['南田健吾'],
      arrange: ['高梨康治'],
    },
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NoujouAmi,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['他の星から'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Sugaya Bros.', '松村PONY'],
      arrange: ['Sugaya Bros.'],
      direct: ['岡川太郎'],
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
  createSongRaw({
    title: SONGS['人間という楽器'].title,
    type: SongType.FirstGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['鐘撞行孝'],
      arrange: ['TATOO'],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.IchikiRena,
        MemberNameKey.ItouNene,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.KashiwaYukina,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.HiguchiHina,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.MiyazawaSeira,
        MemberNameKey.YamatoRina,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
];
