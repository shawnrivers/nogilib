import { UnitRaw } from 'server/actors/Units/models';
import { createUnitRaw } from 'server/actors/Units/raw/creator';

import { UnitType } from 'server/actors/Units/constants/unitType';

export const UNITS: UnitRaw[] = [
  createUnitRaw({
    name: 'WHITE HIGH',
    members: ['shiraishimai', 'takayamakazumi'],
    type: UnitType.Unit,
    description:
      '白石の「白」、高山の「高」をそれぞれ英語表記にした「WHITE」「HIGH」の組み合わせ',
  }),
  createUnitRaw({
    name: '孤独兄弟',
    members: ['shiraishimai', 'hashimotonanami'],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: 'からあげ姉妹',
    members: ['ikutaerika', 'matsumurasayuri'],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: 'サンクエトワール',
    members: [
      'kitanohinako',
      'teradaranze',
      'nakadakana',
      'nakamotohimeka',
      'horimiona',
    ],
    type: UnitType.Unit,
    description:
      '13thシングルのアンダーメンバーより選抜。「サンクエトワール」とはフランス語で「五つ星」という意味',
  }),
  createUnitRaw({
    name: '女子校カルテット',
    members: ['akimotomanatsu', 'sakuraireika', 'nakadakana', 'wakatsukiyumi'],
    type: UnitType.Unit,
    description: '女子高に通っていたメンバーで結成',
  }),
  createUnitRaw({
    name: '姉御坂',
    members: ['etoumisa', 'shiraishimai', 'takayamakazumi', 'matsumurasayuri'],
    type: UnitType.Unit,
    description: 'グループ1期生年長メンバーで結成',
  }),
  createUnitRaw({
    name: 'ナスカ',
    members: ['itoumarika', 'saitouasuka', 'nishinonanase'],
    type: UnitType.Unit,
    description: 'ナナセの「ナ」、アスカの「ス」、マリカの「カ」の組み合わせ',
  }),
  createUnitRaw({
    name: 'かすみ草',
    members: ['ikomarina', 'inouesayuri', 'hoshinominami', 'horimiona'],
    type: UnitType.Unit,
    description:
      'かすみ草の花言葉は「名脇役」。主役を影で支える力のあるメンバーという意味が込められている',
  }),
  createUnitRaw({
    name: '藤桜梨',
    members: ['ikutaerika', 'etoumisa', 'sakuraireika'],
    type: UnitType.Unit,
    description: 'ドンウォーリー',
  }),
  createUnitRaw({
    name: 'いもうと坂',
    members: ['oozonomomoko', 'kuboshiori', 'yamashitamizuki', 'yodayuuki'],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: 'さゆりんご軍団',
    members: ['matsumurasayuri', 'itoukarin', 'sasakikotoko', 'teradaranze'],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: '真夏さんリスペクト軍団',
    members: ['akimotomanatsu', 'sagaraiori', 'suzukiayane', 'watanabemiria'],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: '若様軍団',
    members: [
      'wakatsukiyumi',
      'umezawaminami',
      'sakaguchitamami',
      'yamashitamizuki',
    ],
    type: UnitType.Corp,
    description: '4名に共通する一文字「美」から若月が3期生を結集',
  }),
  createUnitRaw({
    name: '犬メン',
    members: [
      'sakuraireika',
      'ikomarina',
      'itoumarika',
      'inouesayuri',
      'saitouyuuri',
      'shinuchimai',
      'matsumurasayuri',
      'wakatsukiyumi',
    ],
    type: UnitType.Corp,
    description: '舞台『すべての犬は天国へ行く』出演メンバーで構成',
  }),
  createUnitRaw({
    name: 'スイカ',
    members: [
      'itoukarin',
      'itoujunna',
      'kawagohina',
      'saitouyuuri',
      'nishinonanase',
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: 'チューリップ',
    members: [
      'noujouami',
      'ikutaerika',
      'kawagohina',
      'kawamuramahiro',
      'saitouchiharu',
      'takayamakazumi',
      'wadamaaya',
    ],
    type: UnitType.Corp,
    description: '母体は「チームD (ディズニー好き)」 (和田を除くメンバー)',
  }),
];
