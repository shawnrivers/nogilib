import { Birthplace } from "server/actors/Members/constants/birthplace";
import { BloodType } from "server/actors/Members/constants/bloodType";
import { GlowStickColorType } from "server/actors/Members/constants/glowStickColor";
import { JoinedGenerationType } from "server/actors/Members/constants/joinedGeneration";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { PhotoAlbumType } from "server/actors/Members/constants/photoAlbum";
import { SocialMedia } from "server/actors/Members/constants/socialMedia";
import { MemberRaw } from "server/actors/Members/models";
import { createMemberRaw } from "server/actors/Members/raw/creator";

export const FIRST_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: MemberNameKey.AkimotoManatsu,
    nameNotations: ["秋元", "真夏", "あきもと", "まなつ", "akimoto", "manatsu"],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "しあわせにしたい",
        release: "2020-04-08",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.IkutaErika,
    nameNotations: ["生田", "絵梨花", "いくた", "えりか", "ikuta", "erika"],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Yellow],
    join: JoinedGenerationType.First,
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
        title: SocialMedia.Instagram,
        url: "https://www.instagram.com/ikutaerika.official/",
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
      },
      {
        title: "インターミッション",
        release: "2019-01-22",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.IkomaRina,
    nameNotations: ["生駒", "里奈", "いこま", "りな", "ikoma", "rina"],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Purple],
    join: JoinedGenerationType.First,
    birthday: "1995-12-29",
    height: 153,
    bloodType: BloodType.AB,
    origin: Birthplace.Akita,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: "https://www.instagram.com/ikomarina_1229/",
      },
      {
        title: SocialMedia.Twitter,
        url: "https://twitter.com/ikomarina_staff",
      },
      {
        title: SocialMedia.Official,
        url: "https://ikomarina.com/",
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
      },
    ],
    graduatedDate: "2018-05-06",
  }),

  createMemberRaw({
    name: MemberNameKey.InoueSayuri,
    nameNotations: ["井上", "小百合", "いのうえ", "さゆり", "inoue", "sayuri"],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: "1994-12-14",
    height: 156,
    bloodType: BloodType.B,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Twitter,
        url: "https://twitter.com/syr_1214",
      },
      {
        title: SocialMedia.Profile,
        url: "http://www.siscompany.com/02manage/49inoue/",
      },
    ],
    photoAlbums: [
      {
        title: "存在",
        release: "2018-12-12",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
    graduatedDate: "2020-04-27",
  }),
  createMemberRaw({
    name: MemberNameKey.EtouMisa,
    nameNotations: ["衛藤", "美彩", "えとう", "みさ", "eto", "misa"],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "話を聞こうか。",
        release: "2017-04-25",
        type: PhotoAlbumType.PhotoAlbum,
      },
      {
        title: "Decision",
        release: "2020-01-08",
        type: PhotoAlbumType.PhotoBook,
      },
    ],
    graduatedDate: "2019-03-31",
  }),

  createMemberRaw({
    name: MemberNameKey.KawagoHina,
    nameNotations: ["川後", "陽菜", "かわご", "ひな", "kawago", "hina"],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2018-12-20",
  }),
  createMemberRaw({
    name: MemberNameKey.SaitouAsuka,
    nameNotations: ["齋藤", "飛鳥", "さいとう", "あすか", "saito", "asuka"],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.White],
    join: JoinedGenerationType.First,
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
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SaitouYuuri,
    nameNotations: ["斉藤", "優里", "さいとう", "ゆうり", "saito", "yuri"],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.White],
    join: JoinedGenerationType.First,
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
      },
    ],
    graduatedDate: "2019-06-30",
  }),
  createMemberRaw({
    name: MemberNameKey.SakuraiReika,
    nameNotations: ["桜井", "玲香", "さくらい", "れいか", "sakurai", "reika"],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "視線",
        release: "2019-11-27",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
    graduatedDate: "2019-09-01",
  }),
  createMemberRaw({
    name: MemberNameKey.ShiraishiMai,
    nameNotations: ["白石", "麻衣", "しらいし", "まい", "shiraishi", "mai"],
    glowStickColor: [
      GlowStickColorType.LightBlue,
      GlowStickColorType.LightBlue,
    ],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "MAI STYLE",
        release: "2015-01-23",
        type: PhotoAlbumType.PhotoBook,
      },
      {
        title: "パスポート",
        release: "2017-02-07",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.TakayamaKazumi,
    nameNotations: ["高山", "一実", "たかやま", "かずみ", "takayama", "kazumi"],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "独白",
        release: "2019-02-26",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.NakadaKana,
    nameNotations: ["中田", "花奈", "なかだ", "かな", "nakada", "kana"],
    glowStickColor: [GlowStickColorType.Black, GlowStickColorType.White],
    join: JoinedGenerationType.First,
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
  }),
  createMemberRaw({
    name: MemberNameKey.NishinoNanase,
    nameNotations: ["西野", "七瀬", "にしの", "ななせ", "nishino", "nanase"],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.White],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "風に着替えて",
        release: "2016-09-27",
        type: PhotoAlbumType.PhotoAlbum,
      },
      {
        title: "わたしのこと",
        release: "2018-05-09",
        type: PhotoAlbumType.PhotoBook,
      },
    ],
    graduatedDate: "2018-12-31",
  }),
  createMemberRaw({
    name: MemberNameKey.NoujouAmi,
    nameNotations: ["能條", "愛未", "のうじょう", "あみ", "nojo", "ami"],
    glowStickColor: [GlowStickColorType.Orange, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2018-12-15",
  }),
  createMemberRaw({
    name: MemberNameKey.HiguchiHina,
    nameNotations: ["樋口", "日奈", "ひぐち", "ひな", "higuchi", "hina"],
    glowStickColor: [GlowStickColorType.Purple, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
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
  }),
  createMemberRaw({
    name: MemberNameKey.HoshinoMinami,
    nameNotations: ["星野", "みなみ", "ほしの", "みなみ", "hoshino", "minami"],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.White],
    join: JoinedGenerationType.First,
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
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.MatsumuraSayuri,
    nameNotations: [
      "松村",
      "沙友理",
      "まつむら",
      "さゆり",
      "matsumura",
      "sayuri",
    ],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
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
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.WakatsukiYumi,
    nameNotations: ["若月", "佑美", "わかつき", "ゆみ", "wakatsuki", "yumi"],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Blue],
    join: JoinedGenerationType.First,
    birthday: "1994-06-27",
    height: 157,
    bloodType: BloodType.O,
    origin: Birthplace.Shizuoka,
    sites: [
      {
        title: SocialMedia.Official,
        url: "http://yumiwakatsuki.com/",
      },
      {
        title: SocialMedia.Twitter,
        url: "https://twitter.com/WAKA_Y_official/",
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
      },
    ],
    graduatedDate: "2018-11-30",
  }),
  createMemberRaw({
    name: MemberNameKey.WadaMaaya,
    nameNotations: ["和田", "まあや", "わだ", "まあや", "wada", "maya"],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
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
  }),
  createMemberRaw({
    name: MemberNameKey.SaitouChiharu,
    nameNotations: ["斎藤", "ちはる", "さいとう", "ちはる", "saito", "chiharu"],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2018-07-16",
  }),
  createMemberRaw({
    name: MemberNameKey.KawamuraMahiro,
    nameNotations: ["川村", "真洋", "かわむら", "まひろ", "kawamura", "mahiro"],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.White],
    join: JoinedGenerationType.First,
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
        url: "https://twitter.com/mahiro_chan0723",
      },
    ],
    graduatedDate: "2018-03-31",
  }),
  createMemberRaw({
    name: MemberNameKey.NakamotoHimeka,
    nameNotations: [
      "中元",
      "日芽香",
      "なかもと",
      "ひめか",
      "nakamoto",
      "himeka",
    ],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2017-12-31",
  }),
  createMemberRaw({
    name: MemberNameKey.ItouMarika,
    nameNotations: ["伊藤", "万理華", "いとう", "まりか", "ito", "marika"],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Purple],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2017-12-23",
  }),
  createMemberRaw({
    name: MemberNameKey.HashimotoNanami,
    nameNotations: [
      "橋本",
      "奈々未",
      "はしもと",
      "ななみ",
      "hashimoto",
      "nanami",
    ],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Green],
    join: JoinedGenerationType.First,
    birthday: "1993-02-20",
    height: 163,
    bloodType: BloodType.B,
    origin: Birthplace.Hokkaido,
    photoAlbums: [
      {
        title: "やさしい棘",
        release: "2015-08-28",
        type: PhotoAlbumType.PhotoAlbum,
      },
      {
        title: "2017",
        release: "2017-02-20",
        type: PhotoAlbumType.PhotoAlbum,
      },
    ],
    graduatedDate: "2017-02-20",
  }),
  createMemberRaw({
    name: MemberNameKey.FukagawaMai,
    nameNotations: ["深川", "麻衣", "ふかがわ", "まい", "fukagawa", "mai"],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Purple],
    join: JoinedGenerationType.First,
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
      },
      {
        title: "My magazine",
        release: "2018-02-22",
        type: PhotoAlbumType.PhotoMagazine,
      },
    ],
    graduatedDate: "2016-06-16",
  }),
  createMemberRaw({
    name: MemberNameKey.NagashimaSeira,
    nameNotations: ["永島", "聖羅", "ながしま", "せいら", "nagashima", "seira"],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Yellow],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2016-03-20",
  }),
  createMemberRaw({
    name: MemberNameKey.MatsuiRena,
    nameNotations: ["松井", "玲奈", "まつい", "れな", "matsui", "rena"],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Green],
    join: JoinedGenerationType.Exchange,
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
    graduatedDate: "2015-05-14",
  }),
  createMemberRaw({
    name: MemberNameKey.HatanakaSeira,
    nameNotations: ["畠中", "清羅", "はたなか", "せいら", "hatanaka", "seira"],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2015-04-04",
  }),
  createMemberRaw({
    name: MemberNameKey.YamatoRina,
    nameNotations: ["大和", "里菜", "やまと", "りな", "yamato", "rina"],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: "1994-12-14",
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Miyagi,
    graduatedDate: "2015-04-04",
  }),
  createMemberRaw({
    name: MemberNameKey.ItouNene,
    nameNotations: ["伊藤", "寧々", "いとう", "ねね", "ito", "nene"],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2014-10-19",
  }),
  createMemberRaw({
    name: MemberNameKey.IchikiRena,
    nameNotations: ["市來", "玲奈", "いちき", "れな", "ichiki", "rena"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2014-10-19",
  }),
  createMemberRaw({
    name: MemberNameKey.NishikawaNanami,
    nameNotations: [
      "西川",
      "七海",
      "にしかわ",
      "ななみ",
      "nishikawa",
      "nanami",
    ],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.Second,
    birthday: "1993-07-03",
    height: 165,
    bloodType: BloodType.A,
    origin: Birthplace.Tokyo,
    graduatedDate: "2014-03-22",
  }),
  createMemberRaw({
    name: MemberNameKey.MiyazawaSeira,
    nameNotations: ["宮澤", "成良", "みやざわ", "せいら", "miyazawa", "seira"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2013-11-17",
  }),
  createMemberRaw({
    name: MemberNameKey.KashiwaYukina,
    nameNotations: ["柏", "幸奈", "かしわ", "ゆきな", "kashiwa", "yukina"],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2013-11-17",
  }),
  createMemberRaw({
    name: MemberNameKey.AndouMikumo,
    nameNotations: ["安藤", "美雲", "あんどう", "みくも", "ando", "mikumo"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
    birthday: "1993-05-21",
    height: 156,
    bloodType: BloodType.O,
    origin: Birthplace.Kanagawa,
    graduatedDate: "2013-06-16",
  }),
  createMemberRaw({
    name: MemberNameKey.IwaseYumiko,
    nameNotations: ["岩瀬", "佑美子", "いわせ", "ゆみこ", "iwase", "yumiko"],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
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
    graduatedDate: "2012-11-18",
  }),
];
