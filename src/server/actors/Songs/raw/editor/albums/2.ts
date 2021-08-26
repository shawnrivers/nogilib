import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongType } from 'server/actors/Songs/constants/songType';

export const SECOND_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'きっかけ',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
    },
    formations: {
      firstRow: [
        MemberNameKey.HashimotoNanami,
        MemberNameKey.NishinoNanase,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.IkutaErika,
      ],
      secondRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.EtouMisa,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.HoshinoMinami,
      ],
      thirdRow: [
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: '太陽に口説かれて',
    type: SongType.Selected,
    creators: {
      lyrics: ['秋元康'],
      compose: ['フジノタカフミ'],
      arrange: ['フジノタカフミ'],
    },
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: '欲望のリインカーネーション',
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康', '本山清治'],
      compose: ['渡辺未来'],
      arrange: ['渡辺未来'],
    },
    formations: {
      firstRow: [
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.NakadaKana,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: '空気感',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['DR QUEENBEE'],
      arrange: ['DR QUEENBEE'],
    },
    formations: {
      firstRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: '光合成希望',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['吉田博'],
      arrange: ['野中"まさ"雄一'],
    },
    solo: MemberNameKey.NishinoNanase,
  }),
  createSongRaw({
    title: 'Threefold choice',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['古川貴浩'],
      arrange: ['古川貴浩'],
    },
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
      ],
    },
  }),
  createSongRaw({
    title: '低体温のキス',
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: ['中谷あつこ'],
      arrange: ['田上陽一'],
    },
    solo: MemberNameKey.IkutaErika,
  }),
  createSongRaw({
    title: '失恋したら、顔を洗え!',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['さいとうくにあき'],
      arrange: ['内田充'],
    },
    unit: '乃木團',
    formations: {
      firstRow: [MemberNameKey.NakamotoHimeka, MemberNameKey.NoujouAmi],
    },
  }),
  createSongRaw({
    title: 'かき氷の片想い',
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: ['白須賀悟'],
      arrange: ['白須賀悟'],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.TeradaRanze,
        MemberNameKey.HoriMiona,
        MemberNameKey.KitanoHinako,
      ],
      secondRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.ShinuchiMai,
      ],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouKarin,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SagaraIori,
      ],
    },
  }),
  createSongRaw({
    title: '環状六号線',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['サイトウリョースケ'],
      arrange: ['サイトウリョースケ'],
    },
    unit: '犬メン',
    formations: {
      firstRow: [
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: '口約束',
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
      compose: ['Amber'],
      arrange: ['若田部誠'],
    },
    unit: '女子校カルテット',
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.SakuraiReika,
        MemberNameKey.NakadaKana,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
