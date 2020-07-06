import { arrayToObject } from 'utils/arrays';
import { TitleKeyArray } from 'server/types/commons';

export enum CdTitle {
  Sekaichuunorinjinyo = '世界中の隣人よ',
  Shiawasenohogoshoku = 'しあわせの保護色',
  Yoakemadetsuyogaranakutemoii = '夜明けまで強がらなくてもいい',
  SingOut = 'Sing Out!',
  Kaerimichihatoomawarishitakunaru = '帰り道は遠回りしたくなる',
  Jikochudeikou = 'ジコチューで行こう!',
  Synchronicity = 'シンクロニシティ',
  Itsukadekirukarakyoudekiru = 'いつかできるから今日できる',
  Nigemizu = '逃げ水',
  Influencer = 'インフルエンサー',
  Sayonaranoimi = 'サヨナラの意味',
  HadashideSummer = '裸足でSummer',
  Harujiongasakugoro = 'ハルジオンが咲く頃',
  ImaHanashitaidarekagairu = '今、話したい誰かがいる',
  TaiyouKnock = '太陽ノック',
  Inochihautsukushii = '命は美しい',
  Nandomenoaozoraka = '何度目の青空か?',
  NatsunoFreeAndEasy = '夏のFree&Easy',
  Kiduitarakataomoi = '気づいたら片想い',
  Valletta = 'バレッタ',
  GirlsRule = 'ガールズルール',
  Kiminonahakibou = '君の名は希望',
  SeifukunoMannequin = '制服のマネキン',
  HashireBicycle = '走れ!Bicycle',
  Oideshampo = 'おいでシャンプー',
  GuruguruCurtain = 'ぐるぐるカーテン',
  Imagaomoideninarumade = '今が思い出になるまで',
  BokudakenokimiUnderBestAlbum = '僕だけの君〜Under Super Best〜',
  Umaretekarahajimetemitayume = '生まれてから初めて見た夢',
  Sorezorenoisu = 'それぞれの椅子',
  Toumeinairo = '透明な色',
}

export const CdTitleKeyArray: TitleKeyArray<CdTitle> = [
  {
    title: CdTitle.Sekaichuunorinjinyo,
    key: 'sekaichuunorinjinyo',
  },
  {
    title: CdTitle.Shiawasenohogoshoku,
    key: 'hogoshoku',
  },
  {
    title: CdTitle.Yoakemadetsuyogaranakutemoii,
    key: 'yoakemade',
  },
  {
    title: CdTitle.SingOut,
    key: 'singout',
  },
  {
    title: CdTitle.Kaerimichihatoomawarishitakunaru,
    key: 'kaerimichi',
  },
  {
    title: CdTitle.Jikochudeikou,
    key: 'jikochu',
  },
  {
    title: CdTitle.Synchronicity,
    key: 'synchronicity',
  },
  {
    title: CdTitle.Itsukadekirukarakyoudekiru,
    key: 'itsukadekiru',
  },
  {
    title: CdTitle.Nigemizu,
    key: 'nigemizu',
  },
  {
    title: CdTitle.Influencer,
    key: 'influencer',
  },
  {
    title: CdTitle.Sayonaranoimi,
    key: 'sayonaranoimi',
  },
  {
    title: CdTitle.HadashideSummer,
    key: 'hadasummer',
  },
  {
    title: CdTitle.Harujiongasakugoro,
    key: 'harujion',
  },
  {
    title: CdTitle.ImaHanashitaidarekagairu,
    key: 'imahana',
  },
  {
    title: CdTitle.TaiyouKnock,
    key: 'taiyouknock',
  },
  {
    title: CdTitle.Inochihautsukushii,
    key: 'inochihautsukushii',
  },
  {
    title: CdTitle.Nandomenoaozoraka,
    key: 'nandomenoaozoraka',
  },
  {
    title: CdTitle.NatsunoFreeAndEasy,
    key: 'natsunofreeeasy',
  },
  {
    title: CdTitle.Kiduitarakataomoi,
    key: 'kiduitarakataomoi',
  },
  {
    title: CdTitle.Valletta,
    key: 'valletta',
  },
  {
    title: CdTitle.GirlsRule,
    key: 'girlsrule',
  },
  {
    title: CdTitle.Kiminonahakibou,
    key: 'kiminonahakibou',
  },
  {
    title: CdTitle.SeifukunoMannequin,
    key: 'seifukunomannequin',
  },
  {
    title: CdTitle.HashireBicycle,
    key: 'hashirebicycle',
  },
  {
    title: CdTitle.Oideshampo,
    key: 'oideshampo',
  },
  {
    title: CdTitle.GuruguruCurtain,
    key: 'gurugurucurtain',
  },
  {
    title: CdTitle.Imagaomoideninarumade,
    key: 'imagaomoideninarumade',
  },
  {
    title: CdTitle.BokudakenokimiUnderBestAlbum,
    key: 'bokudakenokimiunderbestalbum',
  },
  {
    title: CdTitle.Umaretekarahajimetemitayume,
    key: 'umaretekarahajimetemitayume',
  },
  {
    title: CdTitle.Sorezorenoisu,
    key: 'sorezorenoisu',
  },
  {
    title: CdTitle.Toumeinairo,
    key: 'toumeinairo',
  },
];

export const CDS = arrayToObject(CdTitleKeyArray, 'title');
