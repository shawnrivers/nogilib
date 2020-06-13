import { UnitRaw } from "server/actors/Units/models";
import { createUnitRaw } from "server/actors/Units/raw/creator";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { UnitType } from "server/actors/Units/constants/unitType";
import { UNIT_NAMES } from "server/actors/Units/constants/unitName";

export const UNITS: UnitRaw[] = [
  createUnitRaw({
    name: UNIT_NAMES["WHITE HIGH"].name,
    members: [MemberNameKey.ShiraishiMai, MemberNameKey.TakayamaKazumi],
    type: UnitType.Unit,
    description:
      "白石の「白」、高山の「高」をそれぞれ英語表記にした「WHITE」「HIGH」の組み合わせ",
  }),
  createUnitRaw({
    name: UNIT_NAMES["孤独兄弟"].name,
    members: [MemberNameKey.ShiraishiMai, MemberNameKey.HashimotoNanami],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: UNIT_NAMES["からあげ姉妹"].name,
    members: [MemberNameKey.IkutaErika, MemberNameKey.MatsumuraSayuri],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: UNIT_NAMES["サンクエトワール"].name,
    members: [
      MemberNameKey.KitanoHinako,
      MemberNameKey.TeradaRanze,
      MemberNameKey.NakadaKana,
      MemberNameKey.NakamotoHimeka,
      MemberNameKey.HoriMiona,
    ],
    type: UnitType.Unit,
    description:
      "13thシングルのアンダーメンバーより選抜。「サンクエトワール」とはフランス語で「五つ星」という意味",
  }),
  createUnitRaw({
    name: UNIT_NAMES["女子校カルテット"].name,
    members: [
      MemberNameKey.AkimotoManatsu,
      MemberNameKey.SakuraiReika,
      MemberNameKey.NakadaKana,
      MemberNameKey.WakatsukiYumi,
    ],
    type: UnitType.Unit,
    description: "女子高に通っていたメンバーで結成",
  }),
  createUnitRaw({
    name: UNIT_NAMES["姉御坂"].name,
    members: [
      MemberNameKey.EtouMisa,
      MemberNameKey.ShiraishiMai,
      MemberNameKey.TakayamaKazumi,
      MemberNameKey.MatsumuraSayuri,
    ],
    type: UnitType.Unit,
    description: "グループ1期生年長メンバーで結成",
  }),
  createUnitRaw({
    name: UNIT_NAMES["ナスカ"].name,
    members: [
      MemberNameKey.ItouMarika,
      MemberNameKey.SaitouAsuka,
      MemberNameKey.NishinoNanase,
    ],
    type: UnitType.Unit,
    description: "ナナセの「ナ」、アスカの「ス」、マリカの「カ」の組み合わせ",
  }),
  createUnitRaw({
    name: UNIT_NAMES["かすみ草"].name,
    members: [
      MemberNameKey.IkomaRina,
      MemberNameKey.InoueSayuri,
      MemberNameKey.HoshinoMinami,
      MemberNameKey.HoriMiona,
    ],
    type: UnitType.Unit,
    description:
      "かすみ草の花言葉は「名脇役」。主役を影で支える力のあるメンバーという意味が込められている",
  }),
  createUnitRaw({
    name: UNIT_NAMES["藤桜梨"].name,
    members: [
      MemberNameKey.IkutaErika,
      MemberNameKey.EtouMisa,
      MemberNameKey.SakuraiReika,
    ],
    type: UnitType.Unit,
    description: "ドンウォーリー",
  }),
  createUnitRaw({
    name: UNIT_NAMES["いもうと坂"].name,
    members: [
      MemberNameKey.OozonoMomoko,
      MemberNameKey.KuboShiori,
      MemberNameKey.YamashitaMizuki,
      MemberNameKey.YodaYuuki,
    ],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: UNIT_NAMES["さゆりんご軍団"].name,
    members: [
      MemberNameKey.MatsumuraSayuri,
      MemberNameKey.ItouKarin,
      MemberNameKey.SasakiKotoko,
      MemberNameKey.TeradaRanze,
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: UNIT_NAMES["真夏さんリスペクト軍団"].name,
    members: [
      MemberNameKey.AkimotoManatsu,
      MemberNameKey.SagaraIori,
      MemberNameKey.SuzukiAyane,
      MemberNameKey.WatanabeMiria,
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: UNIT_NAMES["若様軍団"].name,
    members: [
      MemberNameKey.WakatsukiYumi,
      MemberNameKey.UmezawaMinami,
      MemberNameKey.SakaguchiTamami,
      MemberNameKey.YamashitaMizuki,
    ],
    type: UnitType.Corp,
    description: "4名に共通する一文字「美」から若月が3期生を結集",
  }),
  createUnitRaw({
    name: UNIT_NAMES["犬メン"].name,
    members: [
      MemberNameKey.SakuraiReika,
      MemberNameKey.IkomaRina,
      MemberNameKey.ItouMarika,
      MemberNameKey.InoueSayuri,
      MemberNameKey.SaitouYuuri,
      MemberNameKey.ShinuchiMai,
      MemberNameKey.MatsumuraSayuri,
      MemberNameKey.WakatsukiYumi,
    ],
    type: UnitType.Corp,
    description: "舞台『すべての犬は天国へ行く』出演メンバーで構成",
  }),
  createUnitRaw({
    name: UNIT_NAMES["スイカ"].name,
    members: [
      MemberNameKey.ItouKarin,
      MemberNameKey.ItouJunna,
      MemberNameKey.KawagoHina,
      MemberNameKey.SaitouYuuri,
      MemberNameKey.NishinoNanase,
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: UNIT_NAMES["チューリップ"].name,
    members: [
      MemberNameKey.NoujouAmi,
      MemberNameKey.IkutaErika,
      MemberNameKey.KawagoHina,
      MemberNameKey.KawamuraMahiro,
      MemberNameKey.SaitouChiharu,
      MemberNameKey.TakayamaKazumi,
      MemberNameKey.WadaMaaya,
    ],
    type: UnitType.Corp,
    description: "母体は「チームD (ディズニー好き)」 (和田を除くメンバー)",
  }),
];
