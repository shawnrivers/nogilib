import { MemberRaw } from "server/actors/Members/models";
import { createMemberRaw } from "server/actors/Members/raw/creator";
import {
  Birthplace,
  BloodType,
  GlowStickColorType,
  JoinedGenerationType,
  SocialMedia,
} from "server/constants/commons";
import { MemberName } from "server/constants/names";

export const FOURTH_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: MemberName.EndouSakura,
    nameNotations: ["遠藤", "さくら", "えんどう", "さくら", "endo", "sakura"],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.Pink],
    join: JoinedGenerationType.Fourth,
    birthday: "2001-10-03",
    height: 160,
    bloodType: BloodType.Unknown,
    origin: Birthplace.Aichi,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/sakura.endou/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/endousakura.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.KakiHaruka,
    nameNotations: ["賀喜", "遥香", "かき", "はるか", "kaki", "haruka"],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Orange],
    join: JoinedGenerationType.Fourth,
    birthday: "2001-08-08",
    height: 166,
    bloodType: BloodType.A,
    origin: Birthplace.Tochigi,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/haruka.kaki/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/kakiharuka.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.KakehashiSayaka,
    nameNotations: [
      "掛橋",
      "沙耶香",
      "かけはし",
      "さやか",
      "kakehashi",
      "sayaka",
    ],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Orange],
    join: JoinedGenerationType.Fourth,
    birthday: "2002-11-20",
    height: 156,
    bloodType: BloodType.B,
    origin: Birthplace.Okayama,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/sayaka.kakehashi/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/kakehashisayaka.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.KanagawaSaya,
    nameNotations: ["金川", "紗耶", "かながわ", "さや", "kanagawa", "saya"],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.LightBlue],
    join: JoinedGenerationType.Fourth,
    birthday: "2001-10-31",
    height: 164,
    bloodType: BloodType.O,
    origin: Birthplace.Hokkaido,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/saya.kanagawa/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/kanagawasaya.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.KitagawaYuri,
    nameNotations: ["北川", "悠理", "きたがわ", "ゆり", "kitagawa", "yuri"],
    glowStickColor: [GlowStickColorType.Orange, GlowStickColorType.LightBlue],
    join: JoinedGenerationType.Fourth,
    birthday: "2001-08-08",
    height: 163,
    bloodType: BloodType.Unknown,
    origin: Birthplace.California,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/yuri.kitagawa/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/kitagawayuri.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.ShibataYuna,
    nameNotations: ["柴田", "柚菜", "しばた", "ゆな", "shibata", "yuna"],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.YellowGreen],
    join: JoinedGenerationType.Fourth,
    birthday: "2003-03-03",
    height: 160,
    bloodType: BloodType.A,
    origin: Birthplace.Chiba,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/yuna.shibata/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/shibatayuna.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.SeimiyaRei,
    nameNotations: ["清宮", "レイ", "せいみや", "れい", "seimiya", "rei"],
    glowStickColor: [GlowStickColorType.Orange, GlowStickColorType.Orange],
    join: JoinedGenerationType.Fourth,
    birthday: "2003-08-01",
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/rei.seimiya/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/seimiyarei.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.TamuraMayu,
    nameNotations: ["田村", "真佑", "たむら", "まゆ", "tamura", "mayu"],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.Purple],
    join: JoinedGenerationType.Fourth,
    birthday: "1999-01-12",
    height: 158,
    bloodType: BloodType.A,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/mayu.tamura/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/tamuramayu.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.TsutsuiAyame,
    nameNotations: ["筒井", "あやめ", "つつい", "あやめ", "tsutsui", "ayame"],
    glowStickColor: [GlowStickColorType.Purple, GlowStickColorType.Purple],
    join: JoinedGenerationType.Fourth,
    birthday: "2004-06-08",
    height: 160,
    bloodType: BloodType.O,
    origin: Birthplace.Aichi,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/ayame.tsutsui/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/tsutsuiayame.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.HayakawaSeira,
    nameNotations: ["早川", "聖来", "はやかわ", "せいら", "hayakawa", "seira"],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Blue],
    join: JoinedGenerationType.Fourth,
    birthday: "2000-08-24",
    height: 164,
    bloodType: BloodType.A,
    origin: Birthplace.Osaka,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/seira.hayakawa/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/hayakawaseira.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.YakuboMio,
    nameNotations: ["矢久保", "美緒", "やくぼ", "みお", "yakubo", "mio"],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Pink],
    join: JoinedGenerationType.Fourth,
    birthday: "2002-08-14",
    height: 152,
    bloodType: BloodType.B,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.OfficialBlog,
        url: "https://blog.nogizaka46.com/mio.yakubo/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/yakubomio.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.KuromiHaruka,
    nameNotations: ["黒見", "明香", "くろみ", "はるか", "kuromi", "haruka"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.Fourth,
    birthday: "2004-01-19",
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.FourthGenBlog,
        url: "https://blog.nogizaka46.com/newfourth/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/kuromiharuka.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.SatouRika,
    nameNotations: ["佐藤", "璃果", "さとう", "りか", "satou", "rika"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.Fourth,
    birthday: "2001-08-09",
    height: 158,
    bloodType: BloodType.B,
    origin: Birthplace.Iwate,
    sites: [
      {
        title: SocialMedia.FourthGenBlog,
        url: "https://blog.nogizaka46.com/newfourth/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/satourika.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.HayashiRuna,
    nameNotations: ["林", "瑠奈", "はやし", "るな", "hayashi", "runa"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.Fourth,
    birthday: "2003-10-02",
    height: 163,
    bloodType: BloodType.O,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.FourthGenBlog,
        url: "https://blog.nogizaka46.com/newfourth/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/hayashiruna.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.MatsuoMiyu,
    nameNotations: ["松尾", "美佑", "まつお", "みゆ", "matsuo", "miyu"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.Fourth,
    birthday: "2004-01-03",
    height: 165,
    bloodType: BloodType.O,
    origin: Birthplace.Chiba,
    sites: [
      {
        title: SocialMedia.FourthGenBlog,
        url: "https://blog.nogizaka46.com/newfourth/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/mastuomiyu.php",
      },
    ],
  }),
  createMemberRaw({
    name: MemberName.YumikiNao,
    nameNotations: ["弓木", "奈於", "ゆみき", "なお", "yumiki", "nao"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.Fourth,
    birthday: "1999-02-03",
    height: 165,
    bloodType: BloodType.A,
    origin: Birthplace.Kyoto,
    sites: [
      {
        title: SocialMedia.FourthGenBlog,
        url: "https://blog.nogizaka46.com/newfourth/",
      },
      {
        title: SocialMedia.Profile,
        url: "https://www.nogizaka46.com/member/detail/yumikinao.php",
      },
    ],
  }),
];
