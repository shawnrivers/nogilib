import { NameKeyArray } from 'server/types/commons';
import { arrayToObject } from 'utils/array';

export enum UnitName {
  WhiteHigh = 'WHITE HIGH',
  Kodokukyoudai = '孤独兄弟',
  Karaageshimai = 'からあげ姉妹',
  CinqEtoiles = 'サンクエトワール',
  JyoshikouQuarte = '女子校カルテット',
  Anegozaka = '姉御坂',
  Nasuka = 'ナスカ',
  Kasumikusa = 'かすみ草',
  DontWorry = '藤桜梨',
  Imootozaka = 'いもうと坂',
  Sayuringogundan = 'さゆりんご軍団',
  ManatsusanRespectGundan = '真夏さんリスペクト軍団',
  Wakasamagundan = '若様軍団',
  Inumen = '犬メン',
  Suika = 'スイカ',
  Tulip = 'チューリップ',
  Kojizaka46 = 'こじ坂46',
  Nogidan = '乃木團',
}

export const UnitNameKeyArray: NameKeyArray<UnitName> = [
  {
    name: UnitName.WhiteHigh,
    key: 'whitehigh',
  },
  {
    name: UnitName.Kodokukyoudai,
    key: 'kodokukyoudai',
  },
  {
    name: UnitName.Karaageshimai,
    key: 'karaageshimai',
  },
  {
    name: UnitName.CinqEtoiles,
    key: 'cinqetoiles',
  },
  {
    name: UnitName.JyoshikouQuarte,
    key: 'jyoshikouquarte',
  },
  {
    name: UnitName.Anegozaka,
    key: 'anegozaka',
  },
  {
    name: UnitName.Nasuka,
    key: 'nasuka',
  },
  {
    name: UnitName.Kasumikusa,
    key: 'kasumikusa',
  },
  {
    name: UnitName.DontWorry,
    key: 'dontworry',
  },
  {
    name: UnitName.Imootozaka,
    key: 'imootozaka',
  },
  {
    name: UnitName.Sayuringogundan,
    key: 'sayuringogundan',
  },
  {
    name: UnitName.ManatsusanRespectGundan,
    key: 'manatsusanrespectgundan',
  },
  {
    name: UnitName.Wakasamagundan,
    key: 'wakasamagundan',
  },
  {
    name: UnitName.Inumen,
    key: 'inumen',
  },
  {
    name: UnitName.Suika,
    key: 'suika',
  },
  {
    name: UnitName.Tulip,
    key: 'tulip',
  },
  {
    name: UnitName.Kojizaka46,
    key: 'kojizaka46',
  },
  {
    name: UnitName.Nogidan,
    key: 'nogidan',
  },
];

export const UNIT_NAMES = arrayToObject(UnitNameKeyArray, 'name');
