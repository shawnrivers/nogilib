import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const ELEVENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '命は美しい',
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Hiroki Sagawa'],
      arrange: ['Hiroki Sagawa'],
      direct: ['井上強'],
    },
    center: [MemberNameKey.NishinoNanase],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.MatsuiRena,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.IkutaErika,
      ],
      secondRow: [
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkomaRina,
        MemberNameKey.SakuraiReika,
        MemberNameKey.FukagawaMai,
      ],
      thirdRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.SagaraIori,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ItouMarika,
        MemberNameKey.HoriMiona,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.EtouMisa,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: '君は僕と会わない方がよかったのかな',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Akira Sunset', 'ha-j'],
      arrange: ['Akira Sunset', 'ha-j'],
      direct: ['山田篤宏'],
    },
    center: [MemberNameKey.NakamotoHimeka],
    formations: {
      firstRow: [
        MemberNameKey.SaitouYuuri,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.InoueSayuri,
      ],
      secondRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NakadaKana,
        MemberNameKey.ShinuchiMai,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KitanoHinako,
        MemberNameKey.KawagoHina,
        MemberNameKey.HiguchiHina,
        MemberNameKey.ItouKarin,
        MemberNameKey.WadaMaaya,
        MemberNameKey.SaitouChiharu,
      ],
    },
  }),
  createSongRaw({
    title: 'あらかじめ語られるロマンス',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['SoichiroK', 'Nozomu.S'],
      arrange: ['SoichiroK', 'Nozomu.S'],
      direct: ['岡川太郎'],
    },
    center: [MemberNameKey.SaitouAsuka, MemberNameKey.HoshinoMinami],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: '立ち直り中',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['福田貴史'],
      arrange: ['TATOO'],
      direct: ['湯浅弘章'],
    },
    center: [MemberNameKey.ShiraishiMai],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.EtouMisa,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: 'ごめんね ずっと…',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['山田智和'],
      arrange: ['住谷翔平'],
      direct: ['山戸結希'],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
  createSongRaw({
    title: 'ボーダー',
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
    },
    center: [MemberNameKey.TeradaRanze],
    formations: {
      firstRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
      ],
    },
  }),
];
