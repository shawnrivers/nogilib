import { UnitRaw } from "server/actors/Units/models";
import { createUnitRaw } from "server/actors/Units/raw/creator";
import { MemberName } from "server/constants/names";
import { UnitType } from "server/constants/commons";

export const UNITS: UnitRaw[] = [
  createUnitRaw({
    name: "WHITE HIGH",
    members: [MemberName.ShiraishiMai, MemberName.TakayamaKazumi],
    type: UnitType.Unit,
    description:
      "白石の「白」、高山の「高」をそれぞれ英語表記にした「WHITE」「HIGH」の組み合わせ",
  }),
  createUnitRaw({
    name: "孤独兄弟",
    members: [MemberName.ShiraishiMai, MemberName.HashimotoNanami],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: "からあげ姉妹",
    members: [MemberName.IkutaErika, MemberName.MatsumuraSayuri],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: "サンクエトワール",
    members: [
      MemberName.KitanoHinako,
      MemberName.TeradaRanze,
      MemberName.NakadaKana,
      MemberName.NakamotoHimeka,
      MemberName.HoriMiona,
    ],
    type: UnitType.Unit,
    description:
      "13thシングルのアンダーメンバーより選抜。「サンクエトワール」とはフランス語で「五つ星」という意味",
  }),
  createUnitRaw({
    name: "女子校カルテット",
    members: [
      MemberName.AkimotoManatsu,
      MemberName.SakuraiReika,
      MemberName.NakadaKana,
      MemberName.WakatsukiYumi,
    ],
    type: UnitType.Unit,
    description: "女子高に通っていたメンバーで結成",
  }),
  createUnitRaw({
    name: "姉御坂",
    members: [
      MemberName.EtouMisa,
      MemberName.ShiraishiMai,
      MemberName.TakayamaKazumi,
      MemberName.MatsumuraSayuri,
    ],
    type: UnitType.Unit,
    description: "グループ1期生年長メンバーで結成",
  }),
  createUnitRaw({
    name: "ナスカ",
    members: [
      MemberName.ItouMarika,
      MemberName.SaitouAsuka,
      MemberName.NishinoNanase,
    ],
    type: UnitType.Unit,
    description: "ナナセの「ナ」、アスカの「ス」、マリカの「カ」の組み合わせ",
  }),
  createUnitRaw({
    name: "かすみ草",
    members: [
      MemberName.IkomaRina,
      MemberName.InoueSayuri,
      MemberName.HoshinoMinami,
      MemberName.HoriMiona,
    ],
    type: UnitType.Unit,
    description:
      "かすみ草の花言葉は「名脇役」。主役を影で支える力のあるメンバーという意味が込められている",
  }),
  createUnitRaw({
    name: "藤桜梨",
    members: [
      MemberName.IkutaErika,
      MemberName.EtouMisa,
      MemberName.SakuraiReika,
    ],
    type: UnitType.Unit,
    description: "ドンウォーリー",
  }),
  createUnitRaw({
    name: "いもうと坂",
    members: [
      MemberName.OozonoMomoko,
      MemberName.KuboShiori,
      MemberName.YamashitaMizuki,
      MemberName.YodaYuuki,
    ],
    type: UnitType.Unit,
  }),
  createUnitRaw({
    name: "さゆりんご軍団",
    members: [
      MemberName.MatsumuraSayuri,
      MemberName.ItouKarin,
      MemberName.SasakiKotoko,
      MemberName.TeradaRanze,
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: "真夏さんリスペクト軍団",
    members: [
      MemberName.AkimotoManatsu,
      MemberName.SagaraIori,
      MemberName.SuzukiAyane,
      MemberName.WatanabeMiria,
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: "若様軍団",
    members: [
      MemberName.WakatsukiYumi,
      MemberName.UmezawaMinami,
      MemberName.SakaguchiTamami,
      MemberName.YamashitaMizuki,
    ],
    type: UnitType.Corp,
    description: "4名に共通する一文字「美」から若月が3期生を結集",
  }),
  createUnitRaw({
    name: "犬メン",
    members: [
      MemberName.SakuraiReika,
      MemberName.IkomaRina,
      MemberName.ItouMarika,
      MemberName.InoueSayuri,
      MemberName.SaitouYuuri,
      MemberName.ShinuchiMai,
      MemberName.MatsumuraSayuri,
      MemberName.WakatsukiYumi,
    ],
    type: UnitType.Corp,
    description: "舞台『すべての犬は天国へ行く』出演メンバーで構成",
  }),
  createUnitRaw({
    name: "スイカ",
    members: [
      MemberName.ItouKarin,
      MemberName.ItouJunna,
      MemberName.KawagoHina,
      MemberName.SaitouYuuri,
      MemberName.NishinoNanase,
    ],
    type: UnitType.Corp,
  }),
  createUnitRaw({
    name: "チューリップ",
    members: [
      MemberName.NoujouAmi,
      MemberName.IkutaErika,
      MemberName.KawagoHina,
      MemberName.KawamuraMahiro,
      MemberName.SaitouChiharu,
      MemberName.TakayamaKazumi,
      MemberName.WadaMaaya,
    ],
    type: UnitType.Corp,
    description: "母体は「チームD (ディズニー好き)」 (和田を除くメンバー)",
  }),
];
