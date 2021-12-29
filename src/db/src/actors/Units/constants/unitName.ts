import { ArrayElement } from 'types/common';
import { arrayToObject } from 'utils/array';

const unitNameKeyArray = (
  [
    {
      name: 'WHITE HIGH',
      key: 'whitehigh',
    },
    {
      name: '孤独兄弟',
      key: 'kodokukyoudai',
    },
    {
      name: 'からあげ姉妹',
      key: 'karaageshimai',
    },
    {
      name: 'サンクエトワール',
      key: 'cinqetoiles',
    },
    {
      name: '女子校カルテット',
      key: 'jyoshikouquarte',
    },
    {
      name: '姉御坂',
      key: 'anegozaka',
    },
    {
      name: 'ナスカ',
      key: 'nasuka',
    },
    {
      name: 'かすみ草',
      key: 'kasumikusa',
    },
    {
      name: '藤桜梨',
      key: 'dontworry',
    },
    {
      name: 'いもうと坂',
      key: 'imootozaka',
    },
    {
      name: 'さゆりんご軍団',
      key: 'sayuringogundan',
    },
    {
      name: '真夏さんリスペクト軍団',
      key: 'manatsusanrespectgundan',
    },
    {
      name: '若様軍団',
      key: 'wakasamagundan',
    },
    {
      name: '犬メン',
      key: 'inumen',
    },
    {
      name: 'スイカ',
      key: 'suika',
    },
    {
      name: 'チューリップ',
      key: 'tulip',
    },
    {
      name: 'こじ坂46',
      key: 'kojizaka46',
    },
    {
      name: '乃木團',
      key: 'nogidan',
    },
  ] as const
).map(nameKey => ({
  ...nameKey,
  key: nameKey.key.toLowerCase(),
}));

export type UnitName = ArrayElement<typeof unitNameKeyArray>['name'];

export const UNIT_NAMES = arrayToObject(unitNameKeyArray, 'name');
