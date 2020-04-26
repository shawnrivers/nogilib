import { RawMember } from "../models/IMember";
import {
  BloodType,
  GlowStickColorType,
  JoinedGeneration,
  PhotoAlbumType,
  SocialMedia,
  Birthplace,
} from "../utils/constants";
import { MemberName } from "./constants/names";

const akimotomanatsu: RawMember = {
  name: MemberName.AkimotoManatsu,
  nameNotations: {
    lastName: "秋元",
    firstName: "真夏",
    lastNameEn: "akimoto",
    firstNameEn: "manatsu",
    lastNameFurigana: "あきもと",
    firstNameFurigana: "まなつ",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.First,
  birthday: "1993-08-20",
  height: 154,
  bloodType: BloodType.B,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/manatsu.akimoto/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/akimotomanatsu.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/akimoto-manatsu",
    },
  ],
  photoAlbums: [
    {
      title: "真夏の気圧配置",
      release: "2017-02-28",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "しあわせにしたい",
      release: "2020-04-08",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const ikutaerika: RawMember = {
  name: MemberName.IkutaErika,
  nameNotations: {
    lastName: "生田",
    firstName: "絵梨花",
    lastNameFurigana: "いくた",
    firstNameFurigana: "えりか",
    lastNameEn: "ikuta",
    firstNameEn: "erika",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.Yellow,
  },
  join: JoinedGeneration.First,
  birthday: "1997-01-22",
  height: 160,
  bloodType: BloodType.A,
  origin: Birthplace.Düsseldorf,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/erika.ikuta/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/ikutaerika.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/ikuta-erika",
    },
  ],
  photoAlbums: [
    {
      title: "転調",
      release: "2016-01-21",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "インターミッション",
      release: "2019-01-22",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const ikomarina: RawMember = {
  name: MemberName.IkomaRina,
  nameNotations: {
    lastName: "生駒",
    firstName: "里奈",
    lastNameFurigana: "いこま",
    firstNameFurigana: "りな",
    lastNameEn: "ikoma",
    firstNameEn: "rina",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.First,
  birthday: "1995-12-29",
  height: 153,
  bloodType: BloodType.AB,
  origin: Birthplace.Akita,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://ikomarina.com/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/ikomarina_1229/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/1",
    },
  ],
  photoAlbums: [
    {
      title: "君の足跡",
      release: "2016-02-24",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-05-06",
  },
};

const itoukarin: RawMember = {
  name: MemberName.ItouKarin,
  nameNotations: {
    lastName: "伊藤",
    firstName: "かりん",
    lastNameFurigana: "いとう",
    firstNameFurigana: "かりん",
    lastNameEn: "ito",
    firstNameEn: "karin",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.Second,
  birthday: "1993-05-26",
  height: 154,
  bloodType: BloodType.O,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/karin___ito/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/2",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/itou-karin",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2019-05-24",
  },
};

const itoujunna: RawMember = {
  name: MemberName.ItouJunna,
  nameNotations: {
    lastName: "伊藤",
    firstName: "純奈",
    lastNameFurigana: "いとう",
    firstNameFurigana: "じゅんな",
    lastNameEn: "ito",
    firstNameEn: "junna",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.Second,
  birthday: "1998-11-30",
  height: 166,
  bloodType: BloodType.A,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/junna.itou/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/itoujunna.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/itou-junna",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const itouriria: RawMember = {
  name: MemberName.ItouRiria,
  nameNotations: {
    lastName: "伊藤",
    firstName: "理々杏",
    lastNameFurigana: "いとう",
    firstNameFurigana: "りりあ",
    lastNameEn: "ito",
    firstNameEn: "riria",
  },
  glowStickColor: {
    left: GlowStickColorType.Purple,
    right: GlowStickColorType.Red,
  },
  join: JoinedGeneration.Third,
  birthday: "2002-10-08",
  height: 154,
  bloodType: BloodType.B,
  origin: Birthplace.Okinawa,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/riria.itou/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/itouriria.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const inouesayuri: RawMember = {
  name: MemberName.InoueSayuri,
  nameNotations: {
    lastName: "井上",
    firstName: "小百合",
    lastNameFurigana: "いのうえ",
    firstNameFurigana: "さゆり",
    lastNameEn: "inoue",
    firstNameEn: "sayuri",
  },
  glowStickColor: {
    left: GlowStickColorType.White,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1994-12-14",
  height: 156,
  bloodType: BloodType.B,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/sayuri.inoue/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/inouesayuri.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/inoue-sayuri",
    },
  ],
  photoAlbums: [
    {
      title: "存在",
      release: "2018-12-12",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2020-04-27",
  },
};

const iwamotorenka: RawMember = {
  name: MemberName.IwamotoRenka,
  nameNotations: {
    lastName: "岩本",
    firstName: "蓮加",
    lastNameFurigana: "いわもと",
    firstNameFurigana: "れんか",
    lastNameEn: "iwamoto",
    firstNameEn: "renka",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.Third,
  birthday: "2004-02-02",
  height: 157,
  bloodType: BloodType.B,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/renka.iwamoto/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/iwamotorenka.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const umezawaminami: RawMember = {
  name: MemberName.UmezawaMinami,
  nameNotations: {
    lastName: "梅澤",
    firstName: "美波",
    lastNameFurigana: "うめざわ",
    firstNameFurigana: "みなみ",
    lastNameEn: "umezakwa",
    firstNameEn: "minami",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.LightBlue,
  },
  join: JoinedGeneration.Third,
  birthday: "1999-01-06",
  height: 170,
  bloodType: BloodType.A,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/minami.umezawa/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/umezawaminami.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const etoumisa: RawMember = {
  name: MemberName.EtouMisa,
  nameNotations: {
    lastName: "衛藤",
    firstName: "美彩",
    lastNameFurigana: "えとう",
    firstNameFurigana: "みさ",
    lastNameEn: "eto",
    firstNameEn: "misa",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Red,
  },
  join: JoinedGeneration.First,
  birthday: "1993-01-04",
  height: 163,
  bloodType: BloodType.AB,
  origin: Birthplace.Oita,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://etomisa.jp/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/misa_eto_official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/10",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/eto-misa",
    },
  ],
  photoAlbums: [
    {
      title: "彩",
      release: "2012-01-31",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "話を聞こうか。",
      release: "2017-04-25",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "Decision",
      release: "2020-01-08",
      type: PhotoAlbumType.PhotoBook,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2019-03-31",
  },
};

const oozonomomoko: RawMember = {
  name: MemberName.OozonoMomoko,
  nameNotations: {
    lastName: "大園",
    firstName: "桃子",
    lastNameFurigana: "おおぞの",
    firstNameFurigana: "ももこ",
    lastNameEn: "ozono",
    firstNameEn: "momoko",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Green,
  },
  join: JoinedGeneration.Third,
  birthday: "1999-09-13",
  height: 156,
  bloodType: BloodType.O,
  origin: Birthplace.Kagoshima,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/momoko.oozono/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/oozonomomoko.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kawagohina: RawMember = {
  name: MemberName.KawagoHina,
  nameNotations: {
    lastName: "川後",
    firstName: "陽菜",
    lastNameFurigana: "かわご",
    firstNameFurigana: "ひな",
    lastNameEn: "kawago",
    firstNameEn: "hina",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Red,
  },
  join: JoinedGeneration.First,
  birthday: "1998-03-22",
  height: 161,
  bloodType: BloodType.O,
  origin: Birthplace.Nagasaki,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://kawagopro.com/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/kawagohina3/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/kawagohina3",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-12-20",
  },
};

const kitanohinako: RawMember = {
  name: MemberName.KitanoHinako,
  nameNotations: {
    lastName: "北野",
    firstName: "日奈子",
    lastNameFurigana: "きたの",
    firstNameFurigana: "ひなこ",
    lastNameEn: "kitano",
    firstNameEn: "hinako",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.YellowGreen,
  },
  join: JoinedGeneration.Second,
  birthday: "1996-07-17",
  height: 158,
  bloodType: BloodType.O,
  origin: Birthplace.Hokkaido,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/hinako.kitano/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kitanohinako.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/kitano-hinako",
    },
  ],
  photoAlbums: [
    {
      title: "空気の色",
      release: "2018-12-27",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kuboshiori: RawMember = {
  name: MemberName.KuboShiori,
  nameNotations: {
    lastName: "久保",
    firstName: "史緒里",
    lastNameFurigana: "くぼ",
    firstNameFurigana: "しおり",
    lastNameEn: "kubo",
    firstNameEn: "shiori",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.Yellow,
  },
  join: JoinedGeneration.Third,
  birthday: "2001-07-14",
  height: 159,
  bloodType: BloodType.O,
  origin: Birthplace.Miyagi,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/shiori.kubo/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kuboshiori.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const saitouasuka: RawMember = {
  name: MemberName.SaitouAsuka,
  nameNotations: {
    lastName: "齋藤",
    firstName: "飛鳥",
    lastNameFurigana: "さいとう",
    firstNameFurigana: "あすか",
    lastNameEn: "saito",
    firstNameEn: "asuka",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1998-08-10",
  height: 158,
  bloodType: BloodType.O,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/asuka.saito/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/saitouasuka.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/saito-asuka",
    },
  ],
  photoAlbums: [
    {
      title: "潮騒",
      release: "2017-01-25",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const saitouyuuri: RawMember = {
  name: MemberName.SaitouYuuri,
  nameNotations: {
    lastName: "斉藤",
    firstName: "優里",
    lastNameFurigana: "さいとう",
    firstNameFurigana: "ゆうり",
    lastNameEn: "saito",
    firstNameEn: "yuri",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1993-07-20",
  height: 157,
  bloodType: BloodType.O,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/yuuri_3ito/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/4",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/MM1u8Yp3Dv6C",
    },
  ],
  photoAlbums: [
    {
      title: "7秒のしあわせ",
      release: "2019-06-20",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2019-06-30",
  },
};

const sakaguchitamami: RawMember = {
  name: MemberName.SakaguchiTamami,
  nameNotations: {
    lastName: "阪口",
    firstName: "珠美",
    lastNameFurigana: "さかぐち",
    firstNameFurigana: "たまみ",
    lastNameEn: "sakaguchi",
    firstNameEn: "tamami",
  },
  glowStickColor: {
    left: GlowStickColorType.Purple,
    right: GlowStickColorType.Yellow,
  },
  join: JoinedGeneration.Third,
  birthday: "2001-11-10",
  height: 161,
  bloodType: BloodType.A,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/tamami.sakaguchi/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/sakaguchitamami.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const sakuraireika: RawMember = {
  name: MemberName.SakuraiReika,
  nameNotations: {
    lastName: "桜井",
    firstName: "玲香",
    lastNameFurigana: "さくらい",
    firstNameFurigana: "れいか",
    lastNameEn: "sakurai",
    firstNameEn: "reika",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.First,
  birthday: "1994-05-16",
  height: 156,
  bloodType: BloodType.A,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/reika_s16/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/11",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/sakurai-reika",
    },
  ],
  photoAlbums: [
    {
      title: "自由ということ",
      release: "2017-03-08",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "視線",
      release: "2019-11-27",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2019-09-01",
  },
};

const sasakikotoko: RawMember = {
  name: MemberName.SasakiKotoko,
  nameNotations: {
    lastName: "佐々木",
    firstName: "琴子",
    lastNameFurigana: "ささき",
    firstNameFurigana: "ことこ",
    lastNameEn: "sasaki",
    firstNameEn: "kotoko",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Green,
  },
  join: JoinedGeneration.Second,
  birthday: "1998-08-28",
  height: 163,
  bloodType: BloodType.A,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/kotoko.sasaki/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/sasakikotoko.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2020-03-31",
  },
};

const satoukaede: RawMember = {
  name: MemberName.SatouKaede,
  nameNotations: {
    lastName: "佐藤",
    firstName: "楓",
    lastNameFurigana: "さとう",
    firstNameFurigana: "かえで",
    lastNameEn: "sato",
    firstNameEn: "kaede",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Red,
  },
  join: JoinedGeneration.Third,
  birthday: "1998-03-23",
  height: 161,
  bloodType: BloodType.A,
  origin: Birthplace.Aichi,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/kaede.satou/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/satoukaede.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const shiraishimai: RawMember = {
  name: MemberName.ShiraishiMai,
  nameNotations: {
    lastName: "白石",
    firstName: "麻衣",
    lastNameFurigana: "しらいし",
    firstNameFurigana: "まい",
    lastNameEn: "shiraishi",
    firstNameEn: "mai",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.LightBlue,
  },
  join: JoinedGeneration.First,
  birthday: "1992-08-20",
  height: 162,
  bloodType: BloodType.A,
  origin: Birthplace.Gunma,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/mai.shiraishi/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/shiraishimai.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/shiraishi-mai",
    },
  ],
  photoAlbums: [
    {
      title: "清純な大人",
      release: "2014-12-10",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "MAI STYLE",
      release: "2015-01-23",
      type: PhotoAlbumType.PhotoBook,
      shopping: [],
    },
    {
      title: "パスポート",
      release: "2017-02-07",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const shinuchimai: RawMember = {
  name: MemberName.ShinuchiMai,
  nameNotations: {
    lastName: "新内",
    firstName: "眞衣",
    lastNameFurigana: "しんうち",
    firstNameFurigana: "まい",
    lastNameEn: "shinuchi",
    firstNameEn: "mai",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.Second,
  birthday: "1992-01-22",
  height: 165,
  bloodType: BloodType.B,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/mai.shinuchi/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/shinuchimai.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/shinuchi-mai",
    },
  ],
  photoAlbums: [
    {
      title: "どこにいるの？",
      release: "2017-11-14",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const suzukiayane: RawMember = {
  name: MemberName.SuzukiAyane,
  nameNotations: {
    lastName: "鈴木",
    firstName: "絢音",
    lastNameFurigana: "すずき",
    firstNameFurigana: "あやね",
    lastNameEn: "suzuki",
    firstNameEn: "ayane",
  },
  glowStickColor: {
    left: GlowStickColorType.White,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.Second,
  birthday: "1999-03-05",
  height: 160,
  bloodType: BloodType.O,
  origin: Birthplace.Akita,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/ayane.suzuki/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/suzukiayane.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/suzuki-ayane",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const takayamakazumi: RawMember = {
  name: MemberName.TakayamaKazumi,
  nameNotations: {
    lastName: "高山",
    firstName: "一実",
    lastNameFurigana: "たかやま",
    firstNameFurigana: "かずみ",
    lastNameEn: "takayama",
    firstNameEn: "kazumi",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.First,
  birthday: "1994-02-08",
  height: 162,
  bloodType: BloodType.A,
  origin: Birthplace.Chiba,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/kazumi.takayama/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://instagram.com/takayama.kazumi.official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/takayamakazumi.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/takayama-kazumi",
    },
  ],
  photoAlbums: [
    {
      title: "恋かもしれない",
      release: "2016-09-15",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "独白",
      release: "2019-02-26",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const teradaranze: RawMember = {
  name: MemberName.TeradaRanze,
  nameNotations: {
    lastName: "寺田",
    firstName: "蘭世",
    lastNameFurigana: "てらだ",
    firstNameFurigana: "らんぜ",
    lastNameEn: "terada",
    firstNameEn: "ranze",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.Second,
  birthday: "1998-09-23",
  height: 155,
  bloodType: BloodType.Unknown,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/ranze.terada/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/teradaranze.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const nakadakana: RawMember = {
  name: MemberName.NakadaKana,
  nameNotations: {
    lastName: "中田",
    firstName: "花奈",
    lastNameFurigana: "なかだ",
    firstNameFurigana: "かな",
    lastNameEn: "nakada",
    firstNameEn: "kana",
  },
  glowStickColor: {
    left: GlowStickColorType.Black,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1994-08-06",
  height: 158,
  bloodType: BloodType.A,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/kana.nakada/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/nakadakana.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/nakada-kana",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const nakamurareno: RawMember = {
  name: MemberName.NakamuraReno,
  nameNotations: {
    lastName: "中村",
    firstName: "麗乃",
    lastNameFurigana: "なかむら",
    firstNameFurigana: "れの",
    lastNameEn: "nakamura",
    firstNameEn: "reno",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.Third,
  birthday: "2001-09-27",
  height: 167,
  bloodType: BloodType.Unknown,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/reno.nakamura/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/nakamurareno.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const nishinonanase: RawMember = {
  name: MemberName.NishinoNanase,
  nameNotations: {
    lastName: "西野",
    firstName: "七瀬",
    lastNameFurigana: "にしの",
    firstNameFurigana: "ななせ",
    lastNameEn: "nishino",
    firstNameEn: "nanase",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1994-05-25",
  height: 159,
  bloodType: BloodType.O,
  origin: Birthplace.Osaka,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://nishinonanase.com/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/nishino.nanase.official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/7",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/nishino-nanase",
    },
  ],
  photoAlbums: [
    {
      title: "普段着",
      release: "2015-05-18",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "風に着替えて",
      release: "2016-09-27",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "わたしのこと",
      release: "2018-05-09",
      type: PhotoAlbumType.PhotoBook,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-12-31",
  },
};

const noujouami: RawMember = {
  name: MemberName.NoujouAmi,
  nameNotations: {
    lastName: "能條",
    firstName: "愛未",
    lastNameFurigana: "のうじょう",
    firstNameFurigana: "あみ",
    lastNameEn: "nojo",
    firstNameEn: "ami",
  },
  glowStickColor: {
    left: GlowStickColorType.Orange,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.First,
  birthday: "1994-10-18",
  height: 163,
  bloodType: BloodType.A,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/noujoami_official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/8",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-12-15",
  },
};

const higuchihina: RawMember = {
  name: MemberName.HiguchiHina,
  nameNotations: {
    lastName: "樋口",
    firstName: "日奈",
    lastNameFurigana: "ひぐち",
    firstNameFurigana: "ひな",
    lastNameEn: "higuchi",
    firstNameEn: "hina",
  },
  glowStickColor: {
    left: GlowStickColorType.Purple,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.First,
  birthday: "1998-01-31",
  height: 159,
  bloodType: BloodType.A,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/hina.higuchi/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/higuchihina.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/higuchi-hina",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const hoshinominami: RawMember = {
  name: MemberName.HoshinoMinami,
  nameNotations: {
    lastName: "星野",
    firstName: "みなみ",
    lastNameFurigana: "ほしの",
    firstNameFurigana: "みなみ",
    lastNameEn: "hoshino",
    firstNameEn: "minami",
  },
  glowStickColor: {
    left: GlowStickColorType.White,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1998-02-06",
  height: 155,
  bloodType: BloodType.B,
  origin: Birthplace.Chiba,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/minami.hoshino/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/hoshinominami.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/hoshino-minami",
    },
  ],
  photoAlbums: [
    {
      title: "いたずら",
      release: "2018-04-10",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const horimiona: RawMember = {
  name: MemberName.HoriMiona,
  nameNotations: {
    lastName: "堀",
    firstName: "未央奈",
    lastNameFurigana: "ほり",
    firstNameFurigana: "みおな",
    lastNameEn: "hori",
    firstNameEn: "miona",
  },
  glowStickColor: {
    left: GlowStickColorType.White,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.Second,
  birthday: "1996-10-15",
  height: 160,
  bloodType: BloodType.O,
  origin: Birthplace.Gifu,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/miona.hori/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/horimiona.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/hori-miona",
    },
  ],
  photoAlbums: [
    {
      title: "君らしさ",
      release: "2017-11-24",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "タイトル未定",
      release: "2020-01-01",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const matsumurasayuri: RawMember = {
  name: MemberName.MatsumuraSayuri,
  nameNotations: {
    lastName: "松村",
    firstName: "沙友理",
    lastNameFurigana: "まつむら",
    firstNameFurigana: "さゆり",
    lastNameEn: "matsumura",
    firstNameEn: "sayuri",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Red,
  },
  join: JoinedGeneration.First,
  birthday: "1992-08-27",
  height: 164,
  bloodType: BloodType.B,
  origin: Birthplace.Osaka,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/sayuri.matsumura/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/matsumura_sayuri_official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/matsumurasayuri.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/matsumura-sayuri",
    },
  ],
  photoAlbums: [
    {
      title: "意外っていうか、前から可愛いと思ってた",
      release: "2017-12-12",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const mukaihazuki: RawMember = {
  name: MemberName.MukaiHazuki,
  nameNotations: {
    lastName: "向井",
    firstName: "葉月",
    lastNameFurigana: "むかい",
    firstNameFurigana: "はづき",
    lastNameEn: "mukai",
    firstNameEn: "hazuki",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.Yellow,
  },
  join: JoinedGeneration.Third,
  birthday: "1999-08-23",
  height: 152,
  bloodType: BloodType.A,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/hazuki.mukai/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/mukaihazuki.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yamazakirena: RawMember = {
  name: MemberName.YamazakiRena,
  nameNotations: {
    lastName: "山崎",
    firstName: "怜奈",
    lastNameFurigana: "やまざき",
    firstNameFurigana: "れな",
    lastNameEn: "yamazaki",
    firstNameEn: "rena",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.Second,
  birthday: "1998-01-31",
  height: 164,
  bloodType: BloodType.A,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/rena.yamazaki/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/yamazakirena.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/yamazaki-rena",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yamashitamizuki: RawMember = {
  name: MemberName.YamashitaMizuki,
  nameNotations: {
    lastName: "山下",
    firstName: "美月",
    lastNameFurigana: "やました",
    firstNameFurigana: "みづき",
    lastNameEn: "yamashita",
    firstNameEn: "mizuki",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Yellow,
  },
  join: JoinedGeneration.Third,
  birthday: "1999-07-26",
  height: 159,
  bloodType: BloodType.O,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/mizuki.yamashita/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/yamashitamizuki.php",
    },
  ],
  photoAlbums: [
    {
      title: "忘れられない人",
      release: "2020-01-21",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yoshidaayanochristie: RawMember = {
  name: MemberName.YoshidaAyanoChristie,
  nameNotations: {
    lastName: "吉田",
    firstName: "綾乃クリスティー",
    lastNameFurigana: "よしだ",
    firstNameFurigana: "あやのくりすてぃー",
    lastNameEn: "yoshida",
    firstNameEn: "ayanochristie",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.Third,
  birthday: "1995-09-06",
  height: 161,
  bloodType: BloodType.A,
  origin: Birthplace.Oita,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/ayanochristie.yoshida/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/yoshidaayanochristie.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yodayuuki: RawMember = {
  name: MemberName.YodaYuuki,
  nameNotations: {
    lastName: "与田",
    firstName: "祐希",
    lastNameFurigana: "よだ",
    firstNameFurigana: "ゆうき",
    lastNameEn: "yoda",
    firstNameEn: "yuki",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.Green,
  },
  join: JoinedGeneration.Third,
  birthday: "2000-05-05",
  height: 152,
  bloodType: BloodType.O,
  origin: Birthplace.Fukuoka,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/yuuki.yoda/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/yodayuuki.php",
    },
  ],
  photoAlbums: [
    {
      title: "日向の温度",
      release: "2017-12-26",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "無口な時間",
      release: "2020-03-10",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const wakatsukiyumi: RawMember = {
  name: MemberName.WakatsukiYumi,
  nameNotations: {
    lastName: "若月",
    firstName: "佑美",
    lastNameFurigana: "わかつき",
    firstNameFurigana: "ゆみ",
    lastNameEn: "wakatsuki",
    firstNameEn: "yumi",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Blue,
  },
  join: JoinedGeneration.First,
  birthday: "1994-06-27",
  height: 157,
  bloodType: BloodType.O,
  origin: Birthplace.Shizuoka,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://wakatsukiyumi.jp/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/yumi_wakatsuki_official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/9",
    },
  ],
  photoAlbums: [
    {
      title: "パレット",
      release: "2017-11-07",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-11-30",
  },
};

const watanabemiria: RawMember = {
  name: MemberName.WatanabeMiria,
  nameNotations: {
    lastName: "渡辺",
    firstName: "みり愛",
    lastNameFurigana: "わたなべ",
    firstNameFurigana: "みりあ",
    lastNameEn: "watanabe",
    firstNameEn: "miria",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.YellowGreen,
  },
  join: JoinedGeneration.Second,
  birthday: "1999-11-01",
  height: 153,
  bloodType: BloodType.O,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/miria.watanabe/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/watanabemiria.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/watanabe-miria",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const wadamaaya: RawMember = {
  name: MemberName.WadaMaaya,
  nameNotations: {
    lastName: "和田",
    firstName: "まあや",
    lastNameFurigana: "わだ",
    firstNameFurigana: "まあや",
    lastNameEn: "wada",
    firstNameEn: "maya",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.First,
  birthday: "1998-04-23",
  height: 160,
  bloodType: BloodType.O,
  origin: Birthplace.Hiroshima,
  sites: [
    {
      title: SocialMedia.OfficialBlog,
      url: "https://blog.nogizaka46.com/maaya.wada/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/wadamaaya.php",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/wada-maaya",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const endousakura: RawMember = {
  name: MemberName.EndouSakura,
  nameNotations: {
    lastName: "遠藤",
    firstName: "さくら",
    lastNameFurigana: "えんどう",
    firstNameFurigana: "さくら",
    lastNameEn: "endo",
    firstNameEn: "sakura",
  },
  glowStickColor: {
    left: GlowStickColorType.White,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2001-10-03",
  height: 160,
  bloodType: BloodType.Unknown,
  origin: Birthplace.Aichi,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/endousakura.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kakiharuka: RawMember = {
  name: MemberName.KakiHaruka,
  nameNotations: {
    lastName: "賀喜",
    firstName: "遥香",
    lastNameFurigana: "かき",
    firstNameFurigana: "はるか",
    lastNameEn: "kaki",
    firstNameEn: "haruka",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2001-08-08",
  height: 166,
  bloodType: BloodType.A,
  origin: Birthplace.Tochigi,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kakiharuka.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kakehashisayaka: RawMember = {
  name: MemberName.KakehashiSayaka,
  nameNotations: {
    lastName: "掛橋",
    firstName: "沙耶香",
    lastNameFurigana: "かけはし",
    firstNameFurigana: "さやか",
    lastNameEn: "kakehashi",
    firstNameEn: "sayaka",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2002-11-20",
  height: 156,
  bloodType: BloodType.B,
  origin: Birthplace.Okayama,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kakehashisayaka.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kanagawasaya: RawMember = {
  name: MemberName.KanagawaSaya,
  nameNotations: {
    lastName: "金川",
    firstName: "紗耶",
    lastNameFurigana: "かながわ",
    firstNameFurigana: "さや",
    lastNameEn: "kanagawa",
    firstNameEn: "saya",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.LightBlue,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2001-10-31",
  height: 164,
  bloodType: BloodType.O,
  origin: Birthplace.Hokkaido,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kanagawasaya.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kitagawayuri: RawMember = {
  name: MemberName.KitagawaYuri,
  nameNotations: {
    lastName: "北川",
    firstName: "悠理",
    lastNameFurigana: "きたがわ",
    firstNameFurigana: "ゆり",
    lastNameEn: "kitagawa",
    firstNameEn: "yuri",
  },
  glowStickColor: {
    left: GlowStickColorType.Orange,
    right: GlowStickColorType.LightBlue,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2001-08-08",
  height: 163,
  bloodType: BloodType.Unknown,
  origin: Birthplace.California,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kitagawayuri.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const shibatayuna: RawMember = {
  name: MemberName.ShibataYuna,
  nameNotations: {
    lastName: "柴田",
    firstName: "柚菜",
    lastNameFurigana: "しばた",
    firstNameFurigana: "ゆな",
    lastNameEn: "shibata",
    firstNameEn: "yuna",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.YellowGreen,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2003-03-03",
  height: 160,
  bloodType: BloodType.A,
  origin: Birthplace.Chiba,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/shibatayuna.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const seimiyarei: RawMember = {
  name: MemberName.SeimiyaRei,
  nameNotations: {
    lastName: "清宮",
    firstName: "レイ",
    lastNameFurigana: "せいみや",
    firstNameFurigana: "れい",
    lastNameEn: "seimiya",
    firstNameEn: "rei",
  },
  glowStickColor: {
    left: GlowStickColorType.Orange,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2003-08-01",
  height: 162,
  bloodType: BloodType.O,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/seimiyarei.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const tamuramayu: RawMember = {
  name: MemberName.TamuraMayu,
  nameNotations: {
    lastName: "田村",
    firstName: "真佑",
    lastNameFurigana: "たむら",
    firstNameFurigana: "まゆ",
    lastNameEn: "tamura",
    firstNameEn: "mayu",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.Fourth,
  birthday: "1999-01-12",
  height: 158,
  bloodType: BloodType.A,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/tamuramayu.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const tsutsuiayame: RawMember = {
  name: MemberName.TsutsuiAyame,
  nameNotations: {
    lastName: "筒井",
    firstName: "あやめ",
    lastNameFurigana: "つつい",
    firstNameFurigana: "あやめ",
    lastNameEn: "tsutsui",
    firstNameEn: "ayame",
  },
  glowStickColor: {
    left: GlowStickColorType.Purple,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2004-06-08",
  height: 160,
  bloodType: BloodType.O,
  origin: Birthplace.Aichi,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/tsutsuiayame.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const hayakawaseira: RawMember = {
  name: MemberName.HayakawaSeira,
  nameNotations: {
    lastName: "早川",
    firstName: "聖来",
    lastNameFurigana: "はやかわ",
    firstNameFurigana: "せいら",
    lastNameEn: "hayakawa",
    firstNameEn: "seira",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Blue,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2000-08-24",
  height: 164,
  bloodType: BloodType.A,
  origin: Birthplace.Osaka,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/hayakawaseira.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yakubomio: RawMember = {
  name: MemberName.YakuboMio,
  nameNotations: {
    lastName: "矢久保",
    firstName: "美緒",
    lastNameFurigana: "やくぼ",
    firstNameFurigana: "みお",
    lastNameEn: "yakubo",
    firstNameEn: "mio",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2002-08-14",
  height: 152,
  bloodType: BloodType.B,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.FourthGenBlog,
      url: "https://blog.nogizaka46.com/fourth/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/yakubomio.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kuromiharuka: RawMember = {
  name: MemberName.KuromiHaruka,
  nameNotations: {
    lastName: "黒見",
    firstName: "明香",
    lastNameFurigana: "くろみ",
    firstNameFurigana: "はるか",
    lastNameEn: "kuromi",
    firstNameEn: "haruka",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2004-01-19",
  height: 162,
  bloodType: BloodType.O,
  origin: Birthplace.Tokyo,
  sites: [
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/kuromiharuka.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const satourika: RawMember = {
  name: MemberName.SatouRika,
  nameNotations: {
    lastName: "佐藤",
    firstName: "璃果",
    lastNameFurigana: "さとう",
    firstNameFurigana: "りか",
    lastNameEn: "satou",
    firstNameEn: "rika",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2001-08-09",
  height: 158,
  bloodType: BloodType.B,
  origin: Birthplace.Iwate,
  sites: [
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/satourika.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const hayashiruna: RawMember = {
  name: MemberName.HayashiRuna,
  nameNotations: {
    lastName: "林",
    firstName: "瑠奈",
    lastNameFurigana: "はやし",
    firstNameFurigana: "るな",
    lastNameEn: "hayashi",
    firstNameEn: "runa",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2003-10-02",
  height: 163,
  bloodType: BloodType.O,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/hayashiruna.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const matsuomiyu: RawMember = {
  name: MemberName.MatsuoMiyu,
  nameNotations: {
    lastName: "松尾",
    firstName: "美佑",
    lastNameFurigana: "まつお",
    firstNameFurigana: "みゆ",
    lastNameEn: "matsuo",
    firstNameEn: "miyu",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.Fourth,
  birthday: "2004-01-03",
  height: 165,
  bloodType: BloodType.O,
  origin: Birthplace.Chiba,
  sites: [
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/mastuomiyu.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yumikinao: RawMember = {
  name: MemberName.YumikiNao,
  nameNotations: {
    lastName: "弓木",
    firstName: "奈於",
    lastNameFurigana: "ゆみき",
    firstNameFurigana: "なお",
    lastNameEn: "yumiki",
    firstNameEn: "nao",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.Fourth,
  birthday: "1999-02-03",
  height: 165,
  bloodType: BloodType.A,
  origin: Birthplace.Kyoto,
  sites: [
    {
      title: SocialMedia.Profile,
      url: "https://www.nogizaka46.com/member/detail/yumikinao.php",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const sagaraiori: RawMember = {
  name: MemberName.SagaraIori,
  nameNotations: {
    lastName: "相楽",
    firstName: "伊織",
    lastNameFurigana: "さがら",
    firstNameFurigana: "いおり",
    lastNameEn: "sagara",
    firstNameEn: "iori",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.Second,
  birthday: "1997-11-26",
  height: 164,
  bloodType: BloodType.O,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/_iori.sagara_/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/5",
    },
    {
      title: SocialMedia.Nanagogo,
      url: "https://7gogo.jp/sagara-iori",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-07-16",
  },
};

const saitouchiharu: RawMember = {
  name: MemberName.SaitouChiharu,
  nameNotations: {
    lastName: "斎藤",
    firstName: "ちはる",
    lastNameFurigana: "さいとう",
    firstNameFurigana: "ちはる",
    lastNameEn: "saito",
    firstNameEn: "chiharu",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Red,
  },
  join: JoinedGeneration.First,
  birthday: "1997-02-17",
  height: 166,
  bloodType: BloodType.A,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/chiharu_saito_ex/",
    },
    {
      title: "テレビ朝日",
      url: "https://www.tv-asahi.co.jp/announcer/personal/women/saito/",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-07-16",
  },
};

const kawamuramahiro: RawMember = {
  name: MemberName.KawamuraMahiro,
  nameNotations: {
    lastName: "川村",
    firstName: "真洋",
    lastNameFurigana: "かわむら",
    firstNameFurigana: "まひろ",
    lastNameEn: "kawamura",
    firstNameEn: "mahiro",
  },
  glowStickColor: {
    left: GlowStickColorType.Red,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1995-07-23",
  height: 156,
  bloodType: BloodType.A,
  origin: Birthplace.Osaka,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/mahiro_kawamura_official/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/Rotty_Rotty23",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-03-31",
  },
};

const nakamotohimeka: RawMember = {
  name: MemberName.NakamotoHimeka,
  nameNotations: {
    lastName: "中元",
    firstName: "日芽香",
    lastNameFurigana: "なかもと",
    firstNameFurigana: "ひめか",
    lastNameEn: "nakamoto",
    firstNameEn: "himeka",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.First,
  birthday: "1996-04-13",
  height: 161,
  bloodType: BloodType.O,
  origin: Birthplace.Hiroshima,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://nakamotohimeka.com/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/6",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2017-12-31",
  },
};

const itoumarika: RawMember = {
  name: MemberName.ItouMarika,
  nameNotations: {
    lastName: "伊藤",
    firstName: "万理華",
    lastNameFurigana: "いとう",
    firstNameFurigana: "まりか",
    lastNameEn: "ito",
    firstNameEn: "marika",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.First,
  birthday: "1996-02-20",
  height: 158,
  bloodType: BloodType.O,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://itomarika.com/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/marikaito_official/",
    },
    {
      title: SocialMedia.Profile,
      url: "https://n46llc.com/s/m00/artist/3",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2017-12-23",
  },
};

const hashimotonanami: RawMember = {
  name: MemberName.HashimotoNanami,
  nameNotations: {
    lastName: "橋本",
    firstName: "奈々未",
    lastNameFurigana: "はしもと",
    firstNameFurigana: "ななみ",
    lastNameEn: "hashimoto",
    firstNameEn: "nanami",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Green,
  },
  join: JoinedGeneration.First,
  birthday: "1993-02-20",
  height: 163,
  bloodType: BloodType.B,
  origin: Birthplace.Hokkaido,
  sites: [],
  photoAlbums: [
    {
      title: "やさしい棘",
      release: "2015-08-28",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "2017",
      release: "2017-02-20",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2017-02-20",
  },
};

const fukagawamai: RawMember = {
  name: MemberName.FukagawaMai,
  nameNotations: {
    lastName: "深川",
    firstName: "麻衣",
    lastNameFurigana: "ふかがわ",
    firstNameFurigana: "まい",
    lastNameEn: "fukagawa",
    firstNameEn: "mai",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Purple,
  },
  join: JoinedGeneration.First,
  birthday: "1991-03-29",
  height: 162,
  bloodType: BloodType.O,
  origin: Birthplace.Shizuoka,
  sites: [
    {
      title: SocialMedia.Official,
      url: "https://fukagawamai.com/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/fukagawamai.official/",
    },
  ],
  photoAlbums: [
    {
      title: "ずっと、そばにいたい",
      release: "2016-06-09",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [],
    },
    {
      title: "My magazine",
      release: "2018-02-22",
      type: PhotoAlbumType.PhotoMagazine,
      shopping: [],
    },
  ],
  graduation: {
    isGraduated: true,
    graduatedDate: "2016-06-16",
  },
};

const nagashimaseira: RawMember = {
  name: MemberName.NagashimaSeira,
  nameNotations: {
    lastName: "永島",
    firstName: "聖羅",
    lastNameFurigana: "ながしま",
    firstNameFurigana: "せいら",
    lastNameEn: "nagashima",
    firstNameEn: "seira",
  },
  glowStickColor: {
    left: GlowStickColorType.Yellow,
    right: GlowStickColorType.Yellow,
  },
  join: JoinedGeneration.First,
  birthday: "1994-05-19",
  height: 158,
  bloodType: BloodType.O,
  origin: Birthplace.Aichi,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/seira_nagashima/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/seira_0519n",
    },
    {
      title: SocialMedia.Official,
      url: "https://www.horipro.co.jp/nagashimaseira/",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2016-03-20",
  },
};

const matsuirena: RawMember = {
  name: MemberName.MatsuiRena,
  nameNotations: {
    lastName: "松井",
    firstName: "玲奈",
    lastNameFurigana: "まつい",
    firstNameFurigana: "れな",
    lastNameEn: "matsui",
    firstNameEn: "rena",
  },
  glowStickColor: {
    left: GlowStickColorType.Green,
    right: GlowStickColorType.Green,
  },
  join: JoinedGeneration.Exchange,
  birthday: "1991-07-27",
  height: 162,
  bloodType: BloodType.O,
  origin: Birthplace.Aichi,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/renamatui27/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/renampme",
    },
    {
      title: SocialMedia.Official,
      url: "https://matsuirena.club/",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2015-05-14",
  },
};

const hatanakaseira: RawMember = {
  name: MemberName.HatanakaSeira,
  nameNotations: {
    lastName: "畠中",
    firstName: "清羅",
    lastNameFurigana: "はたなか",
    firstNameFurigana: "せいら",
    lastNameEn: "hatanaka",
    firstNameEn: "seira",
  },
  glowStickColor: {
    left: GlowStickColorType.Blue,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.First,
  birthday: "1995-12-05",
  height: 150,
  bloodType: BloodType.B,
  origin: Birthplace.Oita,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/seira_hatanaka/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/seira_hatanaka",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2015-04-04",
  },
};

const yamatorina: RawMember = {
  name: MemberName.YamatoRina,
  nameNotations: {
    lastName: "大和",
    firstName: "里菜",
    lastNameFurigana: "やまと",
    firstNameFurigana: "りな",
    lastNameEn: "yamato",
    firstNameEn: "rina",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.White,
  },
  join: JoinedGeneration.First,
  birthday: "1994-12-14",
  height: 162,
  bloodType: BloodType.O,
  origin: Birthplace.Miyagi,
  sites: [],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2015-04-04",
  },
};

const itounene: RawMember = {
  name: MemberName.ItouNene,
  nameNotations: {
    lastName: "伊藤",
    firstName: "寧々",
    lastNameFurigana: "いとう",
    firstNameFurigana: "ねね",
    lastNameEn: "ito",
    firstNameEn: "nene",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Orange,
  },
  join: JoinedGeneration.First,
  birthday: "1995-12-12",
  height: 148,
  bloodType: BloodType.B,
  origin: Birthplace.Gifu,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/12neneito12/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/nene_ito1212",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-19",
  },
};

const yonetokukyouka: RawMember = {
  name: MemberName.YonetokuKyouka,
  nameNotations: {
    lastName: "米徳",
    firstName: "京花",
    lastNameFurigana: "よねとく",
    firstNameFurigana: "きょうか",
    lastNameEn: "yonetoku",
    firstNameEn: "kyoka",
  },
  glowStickColor: {
    left: GlowStickColorType.LightBlue,
    right: GlowStickColorType.Blue,
  },
  join: JoinedGeneration.Second,
  birthday: "1999-04-14",
  height: 163,
  bloodType: BloodType.AB,
  origin: Birthplace.Kanagawa,
  sites: [],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-18",
  },
};

const yadarisako: RawMember = {
  name: MemberName.YadaRisako,
  nameNotations: {
    lastName: "矢田",
    firstName: "里沙子",
    lastNameFurigana: "やだ",
    firstNameFurigana: "りさこ",
    lastNameEn: "yada",
    firstNameEn: "risako",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.Second,
  birthday: "1995-03-08",
  height: 158,
  bloodType: BloodType.A,
  origin: Birthplace.Saitama,
  sites: [],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-18",
  },
};

const ichikirena: RawMember = {
  name: MemberName.IchikiRena,
  nameNotations: {
    lastName: "市來",
    firstName: "玲奈",
    lastNameFurigana: "いちき",
    firstNameFurigana: "れな",
    lastNameEn: "ichiki",
    firstNameEn: "rena",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.First,
  birthday: "1996-01-22",
  height: 153,
  bloodType: BloodType.A,
  origin: Birthplace.Chiba,
  sites: [
    {
      title: "日本テレビ",
      url: "http://www.ntv.co.jp/announcer/profile/r_ichiki.html",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-19",
  },
};

const nishikawananami: RawMember = {
  name: MemberName.NishikawaNanami,
  nameNotations: {
    lastName: "西川",
    firstName: "七海",
    lastNameFurigana: "にしかわ",
    firstNameFurigana: "ななみ",
    lastNameEn: "nishikawa",
    firstNameEn: "nanami",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.Second,
  birthday: "1993-07-03",
  height: 165,
  bloodType: BloodType.A,
  origin: Birthplace.Tokyo,
  sites: [],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-03-22",
  },
};

const miyazawaseira: RawMember = {
  name: MemberName.MiyazawaSeira,
  nameNotations: {
    lastName: "宮澤",
    firstName: "成良",
    lastNameFurigana: "みやざわ",
    firstNameFurigana: "せいら",
    lastNameEn: "miyazawa",
    firstNameEn: "seira",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.First,
  birthday: "1993-10-29",
  height: 166,
  bloodType: BloodType.O,
  origin: Birthplace.Chiba,
  sites: [
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/seira_miyazawa/",
    },
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/seira_miyazawa/",
    },
    {
      title: "Ameba",
      url: "https://ameblo.jp/seira-miyazawa/",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2013-11-17",
  },
};

const kashiwayukina: RawMember = {
  name: MemberName.KashiwaYukina,
  nameNotations: {
    lastName: "柏",
    firstName: "幸奈",
    lastNameFurigana: "かしわ",
    firstNameFurigana: "ゆきな",
    lastNameEn: "kashiwa",
    firstNameEn: "yukina",
  },
  glowStickColor: {
    left: GlowStickColorType.Pink,
    right: GlowStickColorType.Pink,
  },
  join: JoinedGeneration.First,
  birthday: "1994-08-12",
  height: 158,
  bloodType: BloodType.B,
  origin: Birthplace.Kanagawa,
  sites: [
    {
      title: SocialMedia.Instagram,
      url: "https://www.instagram.com/yukina_812/",
    },
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/y_k812/",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2013-11-17",
  },
};

const andoumikumo: RawMember = {
  name: MemberName.AndouMikumo,
  nameNotations: {
    lastName: "安藤",
    firstName: "美雲",
    lastNameFurigana: "あんどう",
    firstNameFurigana: "みくも",
    lastNameEn: "ando",
    firstNameEn: "mikumo",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.First,
  birthday: "1993-05-21",
  height: 156,
  bloodType: BloodType.O,
  origin: Birthplace.Kanagawa,
  sites: [],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2013-06-16",
  },
};

const iwaseyumiko: RawMember = {
  name: MemberName.IwaseYumiko,
  nameNotations: {
    lastName: "岩瀬",
    firstName: "佑美子",
    lastNameFurigana: "いわせ",
    firstNameFurigana: "ゆみこ",
    lastNameEn: "iwase",
    firstNameEn: "yumiko",
  },
  glowStickColor: {
    left: GlowStickColorType.None,
    right: GlowStickColorType.None,
  },
  join: JoinedGeneration.First,
  birthday: "1990-06-12",
  height: 153,
  bloodType: BloodType.A,
  origin: Birthplace.Saitama,
  sites: [
    {
      title: SocialMedia.Twitter,
      url: "https://twitter.com/scarf_iwase/",
    },
    {
      title: SocialMedia.Official,
      url: "https://ketsuban.com/",
    },
  ],
  photoAlbums: [],
  graduation: {
    isGraduated: true,
    graduatedDate: "2012-11-18",
  },
};

export const rawMembers: RawMember[] = [
  akimotomanatsu,
  ikutaerika,
  itoukarin,
  itoujunna,
  itouriria,
  inouesayuri,
  iwamotorenka,
  umezawaminami,
  etoumisa,
  oozonomomoko,
  kitanohinako,
  kuboshiori,
  saitouasuka,
  saitouyuuri,
  sakaguchitamami,
  sakuraireika,
  sasakikotoko,
  satoukaede,
  shiraishimai,
  shinuchimai,
  suzukiayane,
  takayamakazumi,
  teradaranze,
  nakadakana,
  nakamurareno,
  nishinonanase,
  higuchihina,
  hoshinominami,
  horimiona,
  matsumurasayuri,
  mukaihazuki,
  yamazakirena,
  yamashitamizuki,
  yoshidaayanochristie,
  yodayuuki,
  watanabemiria,
  wadamaaya,
  endousakura,
  kakiharuka,
  kakehashisayaka,
  kanagawasaya,
  kitagawayuri,
  shibatayuna,
  seimiyarei,
  tamuramayu,
  tsutsuiayame,
  hayakawaseira,
  yakubomio,
  kuromiharuka,
  satourika,
  hayashiruna,
  matsuomiyu,
  yumikinao,
  kawagohina,
  noujouami,
  wakatsukiyumi,
  saitouchiharu,
  sagaraiori,
  ikomarina,
  kawamuramahiro,
  itoumarika,
  nakamotohimeka,
  hashimotonanami,
  fukagawamai,
  nagashimaseira,
  matsuirena,
  hatanakaseira,
  yamatorina,
  itounene,
  yonetokukyouka,
  yadarisako,
  ichikirena,
  nishikawananami,
  miyazawaseira,
  kashiwayukina,
  andoumikumo,
  iwaseyumiko,
];
