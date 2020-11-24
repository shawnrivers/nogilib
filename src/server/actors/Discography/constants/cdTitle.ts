import { arrayToObject } from 'utils/arrays';
import { TitleKeyArray } from 'server/types/commons';

export type SingleTitle =
  | '僕は僕を好きになる'
  | 'しあわせの保護色'
  | '夜明けまで強がらなくてもいい'
  | 'Sing Out!'
  | '帰り道は遠回りしたくなる'
  | 'ジコチューで行こう!'
  | 'シンクロニシティ'
  | 'いつかできるから今日できる'
  | '逃げ水'
  | 'インフルエンサー'
  | 'サヨナラの意味'
  | '裸足でSummer'
  | 'ハルジオンが咲く頃'
  | '今、話したい誰かがいる'
  | '太陽ノック'
  | '命は美しい'
  | '何度目の青空か?'
  | '夏のFree&Easy'
  | '気づいたら片想い'
  | 'バレッタ'
  | 'ガールズルール'
  | '君の名は希望'
  | '制服のマネキン'
  | '走れ!Bicycle'
  | 'おいでシャンプー'
  | 'ぐるぐるカーテン';

export type AlbumTitle =
  | '今が思い出になるまで'
  | '僕だけの君〜Under Super Best〜'
  | '生まれてから初めて見た夢'
  | 'それぞれの椅子'
  | '透明な色';

export type OtherCdTitle = '世界中の隣人よ' | 'Route 246';

export type CdTitle = SingleTitle | AlbumTitle | OtherCdTitle;

export const CdTitleKeyArray: TitleKeyArray<CdTitle> = [
  {
    title: '僕は僕を好きになる',
    key: 'bokuhabokuwosukininaru',
  },
  {
    title: 'Route 246',
    key: 'route246',
  },
  {
    title: '世界中の隣人よ',
    key: 'sekaichuunorinjinyo',
  },
  {
    title: 'しあわせの保護色',
    key: 'hogoshoku',
  },
  {
    title: '夜明けまで強がらなくてもいい',
    key: 'yoakemade',
  },
  {
    title: 'Sing Out!',
    key: 'singout',
  },
  {
    title: '帰り道は遠回りしたくなる',
    key: 'kaerimichi',
  },
  {
    title: 'ジコチューで行こう!',
    key: 'jikochu',
  },
  {
    title: 'シンクロニシティ',
    key: 'synchronicity',
  },
  {
    title: 'いつかできるから今日できる',
    key: 'itsukadekiru',
  },
  {
    title: '逃げ水',
    key: 'nigemizu',
  },
  {
    title: 'インフルエンサー',
    key: 'influencer',
  },
  {
    title: 'サヨナラの意味',
    key: 'sayonaranoimi',
  },
  {
    title: '裸足でSummer',
    key: 'hadasummer',
  },
  {
    title: 'ハルジオンが咲く頃',
    key: 'harujion',
  },
  {
    title: '今、話したい誰かがいる',
    key: 'imahana',
  },
  {
    title: '太陽ノック',
    key: 'taiyouknock',
  },
  {
    title: '命は美しい',
    key: 'inochihautsukushii',
  },
  {
    title: '何度目の青空か?',
    key: 'nandomenoaozoraka',
  },
  {
    title: '夏のFree&Easy',
    key: 'natsunofreeeasy',
  },
  {
    title: '気づいたら片想い',
    key: 'kiduitarakataomoi',
  },
  {
    title: 'バレッタ',
    key: 'valletta',
  },
  {
    title: 'ガールズルール',
    key: 'girlsrule',
  },
  {
    title: '君の名は希望',
    key: 'kiminonahakibou',
  },
  {
    title: '制服のマネキン',
    key: 'seifukunomannequin',
  },
  {
    title: '走れ!Bicycle',
    key: 'hashirebicycle',
  },
  {
    title: 'おいでシャンプー',
    key: 'oideshampo',
  },
  {
    title: 'ぐるぐるカーテン',
    key: 'gurugurucurtain',
  },
  {
    title: '今が思い出になるまで',
    key: 'imagaomoideninarumade',
  },
  {
    title: '僕だけの君〜Under Super Best〜',
    key: 'bokudakenokimiunderbestalbum',
  },
  {
    title: '生まれてから初めて見た夢',
    key: 'umaretekarahajimetemitayume',
  },
  {
    title: 'それぞれの椅子',
    key: 'sorezorenoisu',
  },
  {
    title: '透明な色',
    key: 'toumeinairo',
  },
];

export const CDS = arrayToObject(CdTitleKeyArray, 'title');
