import { arrayToObject } from 'utils/arrays';
import { TitleKeyArray } from 'server/types/commons';
import { CdTitle } from 'server/actors/Discography/types';

export const CdTitleKeyArray: TitleKeyArray<CdTitle> = [
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
