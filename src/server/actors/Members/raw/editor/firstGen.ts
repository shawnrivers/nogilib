import { Birthplace } from 'server/actors/Members/constants/birthplace';
import { BloodType } from 'server/actors/Members/constants/bloodType';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { JoinedGenerationType } from 'server/actors/Members/constants/joinedGeneration';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { PhotoAlbumType } from 'server/actors/Members/constants/photoAlbum';
import { SocialMedia } from 'server/actors/Members/constants/socialMedia';
import { MemberRaw } from 'server/actors/Members/models';
import { createMemberRaw } from 'server/actors/Members/raw/creator';

export const FIRST_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: MemberNameKey.AkimotoManatsu,
    nameNotations: ['秋元', '真夏', 'あきもと', 'まなつ', 'akimoto', 'manatsu'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
    birthday: '1993-08-20',
    height: 154,
    bloodType: BloodType.B,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/manatsu.akimoto_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/manatsu.akimoto/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/akimotomanatsu.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/akimoto-manatsu',
      },
    ],
    photoAlbums: [
      {
        title: '真夏の気圧配置',
        release: '2017-02-28',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/manattan_0228',
          },
        ],
        cover: 'photo-albums/akimotomanatsu_1.jpg',
      },
      {
        title: 'しあわせにしたい',
        release: '2020-04-08',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/manatsu_2nd',
          },
        ],
        cover: 'photo-albums/akimotomanatsu_2.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.IkutaErika,
    nameNotations: ['生田', '絵梨花', 'いくた', 'えりか', 'ikuta', 'erika'],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Yellow],
    join: JoinedGenerationType.First,
    birthday: '1997-01-22',
    height: 160,
    bloodType: BloodType.A,
    origin: Birthplace.Düsseldorf,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/ikutaerika.official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/erika.ikuta/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/ikutaerika.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/ikuta-erika',
      },
    ],
    photoAlbums: [
      {
        title: '転調',
        release: '2016-01-21',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E7%94%9F%E7%94%B0%E7%B5%B5%E6%A2%A8%E8%8A%B11st%E5%86%99%E7%9C%9F%E9%9B%86-%E3%80%8E%E8%BB%A2%E8%AA%BF%E3%80%8F-%E7%94%9F%E7%94%B0-%E7%B5%B5%E6%A2%A8%E8%8A%B1/dp/4087807789/',
          },
        ],
        cover: 'photo-albums/ikutaerika_1.jpg',
      },
      {
        title: 'インターミッション',
        release: '2019-01-22',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/erika_newyork/',
          },
        ],
        cover: 'photo-albums/ikutaerika_2.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.IkomaRina,
    nameNotations: ['生駒', '里奈', 'いこま', 'りな', 'ikoma', 'rina'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Purple],
    join: JoinedGenerationType.First,
    birthday: '1995-12-29',
    height: 153,
    bloodType: BloodType.AB,
    origin: Birthplace.Akita,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/ikomarina_1229/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/ikomarina_staff',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UCKfIRa0Zhs6HQ33a_L6Tc5Q/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://ikomarina.com/',
      },
    ],
    photoAlbums: [
      {
        title: '君の足跡',
        release: '2016-02-24',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E4%B9%83%E6%9C%A8%E5%9D%8246-%E7%94%9F%E9%A7%92%E9%87%8C%E5%A5%88%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B9%E3%83%88%E5%86%99%E7%9C%9F%E9%9B%86%E3%80%8E%E5%90%9B%E3%81%AE%E8%B6%B3%E8%B7%A1%E3%80%8F-%E7%94%9F%E9%A7%92-%E9%87%8C%E5%A5%88/dp/4344028864',
          },
        ],
        cover: 'photo-albums/ikomarina_1.jpg',
      },
    ],
    graduatedDate: '2018-05-06',
  }),

  createMemberRaw({
    name: MemberNameKey.InoueSayuri,
    nameNotations: ['井上', '小百合', 'いのうえ', 'さゆり', 'inoue', 'sayuri'],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1994-12-14',
    height: 156,
    bloodType: BloodType.B,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/syr_1214',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UCmVJtdqSRFSsJb5hjHL4QKg',
      },
      {
        title: SocialMedia.FanClub,
        url: 'https://www.sayuriinoue-fc.com',
      },
      {
        title: SocialMedia.Profile,
        url: 'http://www.siscompany.com/management/artist.php?id=30',
      },
    ],
    photoAlbums: [
      {
        title: '存在',
        release: '2018-12-12',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/1st71845914',
          },
        ],
        cover: 'photo-albums/inouesayuri_1.jpg',
      },
    ],
    graduatedDate: '2020-04-27',
  }),
  createMemberRaw({
    name: MemberNameKey.EtouMisa,
    nameNotations: ['衛藤', '美彩', 'えとう', 'みさ', 'eto', 'misa'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
    birthday: '1993-01-04',
    height: 163,
    bloodType: BloodType.AB,
    origin: Birthplace.Oita,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/misa_eto_official/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://etomisa.jp/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/10',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/eto-misa',
      },
    ],
    photoAlbums: [
      {
        title: '彩',
        release: '2012-01-31',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E8%A1%9B%E8%97%A4%E7%BE%8E%E5%BD%A9-%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B9%E3%83%88%E5%86%99%E7%9C%9F%E9%9B%86-%E3%80%8E-%E5%BD%A9-%E3%80%8F/dp/4847044290',
          },
        ],
        cover: 'photo-albums/etoumisa_1.jpg',
      },
      {
        title: '話を聞こうか。',
        release: '2017-04-25',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/33misa_syd',
          },
        ],
        cover: 'photo-albums/etoumisa_2.jpg',
      },
      {
        title: 'Decision',
        release: '2020-01-08',
        type: PhotoAlbumType.PhotoBook,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/etomisabook',
          },
        ],
        cover: 'photo-albums/etoumisa_pb.jpg',
      },
    ],
    graduatedDate: '2019-03-31',
  }),

  createMemberRaw({
    name: MemberNameKey.KawagoHina,
    nameNotations: ['川後', '陽菜', 'かわご', 'ひな', 'kawago', 'hina'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
    birthday: '1998-03-22',
    height: 161,
    bloodType: BloodType.O,
    origin: Birthplace.Nagasaki,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/kawagohina3/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/kawagohina3',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UCygUvA0j15FpHp6kv2IuQYA',
      },
      {
        title: SocialMedia.Official,
        url: 'https://kawagopro.com/',
      },
    ],
    photoAlbums: [
      {
        title: '川後陽菜 インタビューフォトブック',
        release: '2020-03-02',
        type: PhotoAlbumType.PhotoBook,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://www.amazon.co.jp/dp/4907929331',
          },
        ],
        cover: 'photo-albums/kawagohina_1.jpg',
      },
    ],
    graduatedDate: '2018-12-20',
  }),
  createMemberRaw({
    name: MemberNameKey.SaitouAsuka,
    nameNotations: ['齋藤', '飛鳥', 'さいとう', 'あすか', 'saito', 'asuka'],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1998-08-10',
    height: 158,
    bloodType: BloodType.O,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/asuka.saito/',
      },
      {
        title: SocialMedia.Weibo,
        url: 'https://weibo.com/saitoasukaofficial',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/saitouasuka.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/saito-asuka',
      },
    ],
    photoAlbums: [
      {
        title: '潮騒',
        release: '2017-01-25',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/gentosha_asuka',
          },
        ],
        cover: 'photo-albums/saitouasuka_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SaitouYuuri,
    nameNotations: ['斉藤', '優里', 'さいとう', 'ゆうり', 'saito', 'yuri'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1993-07-20',
    height: 157,
    bloodType: BloodType.O,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/yuuri_3ito/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/4',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/MM1u8Yp3Dv6C',
      },
    ],
    photoAlbums: [
      {
        title: '7秒のしあわせ',
        release: '2019-06-20',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/7sec_yuuri',
          },
        ],
        cover: 'photo-albums/saitouyuuri_1.jpg',
      },
    ],
    graduatedDate: '2019-06-30',
  }),
  createMemberRaw({
    name: MemberNameKey.SakuraiReika,
    nameNotations: ['桜井', '玲香', 'さくらい', 'れいか', 'sakurai', 'reika'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
    birthday: '1994-05-16',
    height: 156,
    bloodType: BloodType.A,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/reika_s16/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://reikasakurai.com/s/m08/?ima=0916',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/11',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/sakurai-reika',
      },
    ],
    photoAlbums: [
      {
        title: '自由ということ',
        release: '2017-03-08',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/reika_kobunsha',
          },
        ],
        cover: 'photo-albums/sakuraireika_1.jpg',
      },
      {
        title: '視線',
        release: '2019-11-27',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/sakuraireika2nd',
          },
        ],
        cover: 'photo-albums/sakuraireika_2.jpg',
      },
    ],
    graduatedDate: '2019-09-01',
  }),
  createMemberRaw({
    name: MemberNameKey.ShiraishiMai,
    nameNotations: ['白石', '麻衣', 'しらいし', 'まい', 'shiraishi', 'mai'],
    glowStickColor: [
      GlowStickColorType.LightBlue,
      GlowStickColorType.LightBlue,
    ],
    join: JoinedGenerationType.First,
    birthday: '1992-08-20',
    height: 162,
    bloodType: BloodType.A,
    origin: Birthplace.Gunma,
    graduatedDate: '2020-10-28',
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/m.shiraishi.official/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/shiraishi_staff',
      },
      {
        title: SocialMedia.Official,
        url: 'https://maishiraishi-official.com/',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/c/maishiraishi',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/12?ima=0737',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/shiraishi-mai',
      },
    ],
    photoAlbums: [
      {
        title: '清純な大人',
        release: '2014-12-10',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/Adult-Shiraishi-First-Photo-Collection/dp/4344026713/',
          },
        ],
        cover: 'photo-albums/shiraishimai_1.jpg',
      },
      {
        title: 'MAI STYLE',
        release: '2015-01-23',
        type: PhotoAlbumType.PhotoBook,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E4%B9%83%E6%9C%A8%E5%9D%8246-%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A31st%E3%83%95%E3%82%A9%E3%83%88%E3%83%96%E3%83%83%E3%82%AF-MAI-STYLE-%E4%B8%BB%E5%A9%A6%E3%81%AE%E5%8F%8B%E7%94%9F%E6%B4%BB%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA/dp/407402098X',
          },
        ],
        cover: 'photo-albums/shiraishimai_pb.jpg',
      },
      {
        title: 'パスポート',
        release: '2017-02-07',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3%E5%86%99%E7%9C%9F%E9%9B%86-%E3%83%91%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88-%E7%99%BD%E7%9F%B3-%E9%BA%BB%E8%A1%A3/dp/406352857X',
          },
        ],
        cover: 'photo-albums/shiraishimai_2.jpg',
      },
      {
        title: '白石麻衣メモリアルマガジン',
        release: '2020-10-21',
        type: PhotoAlbumType.PhotoMagazine,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/mai_westcoast',
          },
        ],
        cover: 'photo-albums/shiraishimai_mm.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.TakayamaKazumi,
    nameNotations: ['高山', '一実', 'たかやま', 'かずみ', 'takayama', 'kazumi'],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
    birthday: '1994-02-08',
    height: 162,
    bloodType: BloodType.A,
    origin: Birthplace.Chiba,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://instagram.com/takayama.kazumi.official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/kazumi.takayama/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/takayamakazumi.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/takayama-kazumi',
      },
    ],
    photoAlbums: [
      {
        title: '恋かもしれない',
        release: '2016-09-15',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E9%AB%98%E5%B1%B1%E4%B8%80%E5%AE%9F%E5%86%99%E7%9C%9F%E9%9B%86-%E6%81%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84-%E9%AB%98%E5%B1%B1%E4%B8%80%E5%AE%9F/dp/4054064744',
          },
        ],
        cover: 'photo-albums/takayamakazumi_1.jpg',
      },
      {
        title: '独白',
        release: '2019-02-26',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/takayama_tokuma',
          },
        ],
        cover: 'photo-albums/takayamakazumi_2.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.NakadaKana,
    nameNotations: ['中田', '花奈', 'なかだ', 'かな', 'nakada', 'kana'],
    glowStickColor: [GlowStickColorType.Black, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1994-08-06',
    height: 158,
    bloodType: BloodType.A,
    origin: Birthplace.Saitama,
    graduatedDate: '2020-10-26',
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/nakadakana_1st/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/13?ima=0737',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/nakada-kana',
      },
    ],
    photoAlbums: [
      {
        title: '好きなことだけをしていたい',
        release: '2020-10-13',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/nakadakana_1st',
          },
        ],
        cover: 'photo-albums/nakadakana_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.NishinoNanase,
    nameNotations: ['西野', '七瀬', 'にしの', 'ななせ', 'nishino', 'nanase'],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1994-05-25',
    height: 159,
    bloodType: BloodType.O,
    origin: Birthplace.Osaka,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/nishino.nanase.official/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/nanase_andstaff',
      },
      {
        title: SocialMedia.Official,
        url: 'https://nishinonanase.com/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/7',
      },
      {
        title: SocialMedia.Weibo,
        url: 'https://weibo.com/u/7266809683',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/nishino-nanase',
      },
    ],
    photoAlbums: [
      {
        title: '普段着',
        release: '2015-05-18',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E8%A5%BF%E9%87%8E%E4%B8%83%E7%80%AC%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B9%E3%83%88%E5%86%99%E7%9C%9F%E9%9B%86%E3%80%8E%E6%99%AE%E6%AE%B5%E7%9D%80%E3%80%8F-%E8%A5%BF%E9%87%8E-%E4%B8%83%E7%80%AC/dp/4344027094/',
          },
        ],
        cover: 'photo-albums/nishinonanase_1.jpg',
      },
      {
        title: '風を着替えて',
        release: '2016-09-27',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E8%A5%BF%E9%87%8E%E4%B8%83%E7%80%AC%E5%86%99%E7%9C%9F%E9%9B%86-%E9%A2%A8%E3%82%92%E7%9D%80%E6%9B%BF%E3%81%88%E3%81%A6-%E8%A5%BF%E9%87%8E-%E4%B8%83%E7%80%AC/dp/4087807983/',
          },
        ],
        cover: 'photo-albums/nishinonanase_2.jpg',
      },
      {
        title: 'わたしのこと',
        release: '2018-05-09',
        type: PhotoAlbumType.PhotoBook,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/nanase_1st',
          },
        ],
        cover: 'photo-albums/nishinonanase_pb.jpg',
      },
    ],
    graduatedDate: '2018-12-31',
  }),
  createMemberRaw({
    name: MemberNameKey.NoujouAmi,
    nameNotations: ['能條', '愛未', 'のうじょう', 'あみ', 'nojo', 'ami'],
    glowStickColor: [GlowStickColorType.Orange, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
    birthday: '1994-10-18',
    height: 163,
    bloodType: BloodType.A,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/noujoami_official/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.tp-e.jp/noujo-ami/',
      },
    ],
    graduatedDate: '2018-12-15',
  }),
  createMemberRaw({
    name: MemberNameKey.HiguchiHina,
    nameNotations: ['樋口', '日奈', 'ひぐち', 'ひな', 'higuchi', 'hina'],
    glowStickColor: [GlowStickColorType.Purple, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
    birthday: '1998-01-31',
    height: 161,
    bloodType: BloodType.A,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/higuchi_hina_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/hina.higuchi/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/higuchihina.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/higuchi-hina',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.HoshinoMinami,
    nameNotations: ['星野', 'みなみ', 'ほしの', 'みなみ', 'hoshino', 'minami'],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1998-02-06',
    height: 155,
    bloodType: BloodType.B,
    origin: Birthplace.Chiba,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/minami.hoshino/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/hoshinominami.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/hoshino-minami',
      },
    ],
    photoAlbums: [
      {
        title: 'いたずら',
        release: '2018-04-10',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/373_kawaii',
          },
        ],
        cover: 'photo-albums/hoshinominami_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.MatsumuraSayuri,
    nameNotations: [
      '松村',
      '沙友理',
      'まつむら',
      'さゆり',
      'matsumura',
      'sayuri',
    ],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
    birthday: '1992-08-27',
    height: 164,
    bloodType: BloodType.B,
    origin: Birthplace.Osaka,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/matsumura_sayuri_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/sayuri.matsumura/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/matsumurasayuri.php',
      },
      {
        title: SocialMedia.Weibo,
        url: 'https://weibo.com/u/7266841339',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/matsumura-sayuri',
      },
    ],
    photoAlbums: [
      {
        title: '意外っていうか、前から可愛いと思ってた',
        release: '2017-12-12',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/sayuringo_pb',
          },
        ],
        cover: 'photo-albums/matsumurasayuri_1.jpg',
      },
      {
        title: '次、いつ会える？',
        release: '2021-07-13',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/sayuringohan',
          },
        ],
        cover: 'photo-albums/matsumurasayuri_2.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.WakatsukiYumi,
    nameNotations: ['若月', '佑美', 'わかつき', 'ゆみ', 'wakatsuki', 'yumi'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Blue],
    join: JoinedGenerationType.First,
    birthday: '1994-06-27',
    height: 157,
    bloodType: BloodType.O,
    origin: Birthplace.Shizuoka,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/yumi_wakatsuki_official/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/WAKA_Y_official/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://yumiwakatsuki.com/',
      },
      {
        title: SocialMedia.OnlineSalon,
        url: 'https://lounge.dmm.com/detail/2711/',
      },
    ],
    photoAlbums: [
      {
        title: 'パレット',
        release: '2017-11-07',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/waka_palette',
          },
        ],
        cover: 'photo-albums/wakatsukiyumi_1.jpg',
      },
    ],
    graduatedDate: '2018-11-30',
  }),
  createMemberRaw({
    name: MemberNameKey.WadaMaaya,
    nameNotations: ['和田', 'まあや', 'わだ', 'まあや', 'wada', 'maya'],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
    birthday: '1998-04-23',
    height: 161,
    bloodType: BloodType.O,
    origin: Birthplace.Hiroshima,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/wada_maaya_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/maaya.wada/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/wadamaaya.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/wada-maaya',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SaitouChiharu,
    nameNotations: ['斎藤', 'ちはる', 'さいとう', 'ちはる', 'saito', 'chiharu'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Red],
    join: JoinedGenerationType.First,
    birthday: '1997-02-17',
    height: 166,
    bloodType: BloodType.A,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/chiharu_saito_ex/',
      },
      {
        title: 'テレビ朝日',
        url: 'https://www.tv-asahi.co.jp/announcer/personal/women/saito/',
      },
    ],
    graduatedDate: '2018-07-16',
  }),
  createMemberRaw({
    name: MemberNameKey.KawamuraMahiro,
    nameNotations: ['川村', '真洋', 'かわむら', 'まひろ', 'kawamura', 'mahiro'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1995-07-23',
    height: 156,
    bloodType: BloodType.A,
    origin: Birthplace.Osaka,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/mahiro_kawamura_official/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/mahiro_chan0723',
      },
      {
        title: SocialMedia.FanClub,
        url: 'https://fanicon.net/fancommunities/3640',
      },
    ],
    graduatedDate: '2018-03-31',
  }),
  createMemberRaw({
    name: MemberNameKey.NakamotoHimeka,
    nameNotations: [
      '中元',
      '日芽香',
      'なかもと',
      'ひめか',
      'nakamoto',
      'himeka',
    ],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
    birthday: '1996-04-13',
    height: 161,
    bloodType: BloodType.O,
    origin: Birthplace.Hiroshima,
    sites: [
      {
        title: SocialMedia.Official,
        url: 'https://nakamotohimeka.com/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/6',
      },
    ],
    graduatedDate: '2017-12-31',
  }),
  createMemberRaw({
    name: MemberNameKey.ItouMarika,
    nameNotations: ['伊藤', '万理華', 'いとう', 'まりか', 'ito', 'marika'],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Purple],
    join: JoinedGenerationType.First,
    birthday: '1996-02-20',
    height: 158,
    bloodType: BloodType.O,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/marikaito_official/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://itomarika.com/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/3',
      },
    ],
    photoAlbums: [
      {
        title: 'エトランゼ',
        release: '2018-02-20',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/MARIKA_etranger',
          },
        ],
        cover: 'photo-albums/itoumarika_1.jpg',
      },
    ],
    graduatedDate: '2017-12-23',
  }),
  createMemberRaw({
    name: MemberNameKey.HashimotoNanami,
    nameNotations: [
      '橋本',
      '奈々未',
      'はしもと',
      'ななみ',
      'hashimoto',
      'nanami',
    ],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Green],
    join: JoinedGenerationType.First,
    birthday: '1993-02-20',
    height: 163,
    bloodType: BloodType.B,
    origin: Birthplace.Hokkaido,
    photoAlbums: [
      {
        title: 'やさしい棘',
        release: '2015-08-28',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E6%A9%8B%E6%9C%AC%E5%A5%88%E3%80%85%E6%9C%AA%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B9%E3%83%88%E5%86%99%E7%9C%9F%E9%9B%86%E3%80%8E%E3%82%84%E3%81%95%E3%81%97%E3%81%84%E6%A3%98%EF%BC%88%E3%81%A8%E3%81%92%EF%BC%89%E3%80%8F-%E6%A9%8B%E6%9C%AC-%E5%A5%88%E3%80%85%E6%9C%AA/dp/4344027949/',
          },
        ],
        cover: 'photo-albums/hashimotonanami_1.jpg',
      },
      {
        title: '2017',
        release: '2017-02-20',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/nanaminNY2017',
          },
        ],
        cover: 'photo-albums/hashimotonanami_2.jpg',
      },
    ],
    graduatedDate: '2017-02-20',
  }),
  createMemberRaw({
    name: MemberNameKey.FukagawaMai,
    nameNotations: ['深川', '麻衣', 'ふかがわ', 'まい', 'fukagawa', 'mai'],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Purple],
    join: JoinedGenerationType.First,
    birthday: '1991-03-29',
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Shizuoka,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/fukagawamai.official/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://fukagawamai.com/',
      },
    ],
    photoAlbums: [
      {
        title: 'ずっと、そばにいたい',
        release: '2016-06-09',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/s?k=%E9%A2%A8%E3%81%AB%E7%9D%80%E6%9B%BF%E3%81%88%E3%81%A6&i=stripbooks&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&ref=nb_sb_noss',
          },
        ],
        cover: 'photo-albums/fukagawamai_1.jpg',
      },
      {
        title: 'My magazine',
        release: '2018-02-22',
        type: PhotoAlbumType.PhotoMagazine,
        sites: [
          {
            title: 'amazon',
            url: 'https://www.amazon.co.jp/%E6%B7%B1%E5%B7%9D%E9%BA%BB%E8%A1%A3PhotoMagazine-%E3%80%8EMY-magazine%E3%80%8F-MOOK-%E6%B7%B1%E5%B7%9D/dp/4800280494/',
          },
        ],
        cover: 'photo-albums/fukagawamai_pm.jpg',
      },
    ],
    graduatedDate: '2016-06-16',
  }),
  createMemberRaw({
    name: MemberNameKey.NagashimaSeira,
    nameNotations: ['永島', '聖羅', 'ながしま', 'せいら', 'nagashima', 'seira'],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Yellow],
    join: JoinedGenerationType.First,
    birthday: '1994-05-19',
    height: 158,
    bloodType: BloodType.O,
    origin: Birthplace.Aichi,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/seira_nagashima/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/seira_0519n',
      },
      {
        title: SocialMedia.Official,
        url: 'https://www.horipro.co.jp/nagashimaseira/',
      },
    ],
    graduatedDate: '2016-03-20',
  }),
  createMemberRaw({
    name: MemberNameKey.MatsuiRena,
    nameNotations: ['松井', '玲奈', 'まつい', 'れな', 'matsui', 'rena'],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Green],
    join: JoinedGenerationType.Exchange,
    birthday: '1991-07-27',
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Aichi,
    sites: [
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UCRQoWfwbu1dDf0XujaNQ-9A',
      },
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/renamatui27/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/renampme',
      },
      {
        title: SocialMedia.Official,
        url: 'https://matsuirena.club/',
      },
    ],
    graduatedDate: '2015-05-14',
  }),
  createMemberRaw({
    name: MemberNameKey.HatanakaSeira,
    nameNotations: ['畠中', '清羅', 'はたなか', 'せいら', 'hatanaka', 'seira'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
    birthday: '1995-12-05',
    height: 150,
    bloodType: BloodType.B,
    origin: Birthplace.Oita,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/seira_hatanaka/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/seira_hatanaka',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UCC4iZzCZMJBVxghrzwvMp8w',
      },
    ],
    graduatedDate: '2015-04-04',
  }),
  createMemberRaw({
    name: MemberNameKey.YamatoRina,
    nameNotations: ['大和', '里菜', 'やまと', 'りな', 'yamato', 'rina'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.White],
    join: JoinedGenerationType.First,
    birthday: '1994-12-14',
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Miyagi,
    sites: [
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/rina_yamat0',
      },
    ],
    graduatedDate: '2015-04-04',
  }),
  createMemberRaw({
    name: MemberNameKey.ItouNene,
    nameNotations: ['伊藤', '寧々', 'いとう', 'ねね', 'ito', 'nene'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Orange],
    join: JoinedGenerationType.First,
    birthday: '1995-12-12',
    height: 149,
    bloodType: BloodType.B,
    origin: Birthplace.Gifu,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/12neneito12/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/nene_ito1212',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UCgj7DMxLEz72XMtaDNQFRTw',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.watanabepro.co.jp/mypage/61000049/',
      },
    ],
    graduatedDate: '2014-10-19',
  }),
  createMemberRaw({
    name: MemberNameKey.IchikiRena,
    nameNotations: ['市來', '玲奈', 'いちき', 'れな', 'ichiki', 'rena'],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
    birthday: '1996-01-22',
    height: 153,
    bloodType: BloodType.A,
    origin: Birthplace.Chiba,
    sites: [
      {
        title: '日本テレビ',
        url: 'http://www.ntv.co.jp/announcer/profile/r_ichiki.html',
      },
    ],
    graduatedDate: '2014-10-19',
  }),
  createMemberRaw({
    name: MemberNameKey.MiyazawaSeira,
    nameNotations: ['宮澤', '成良', 'みやざわ', 'せいら', 'miyazawa', 'seira'],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
    birthday: '1993-10-29',
    height: 166,
    bloodType: BloodType.O,
    origin: Birthplace.Chiba,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/seira_miyazawa/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/seira_miyazawa/',
      },
      {
        title: SocialMedia.Official,
        url: 'http://www.incent.jp/idea/model/miyazawa/index.html',
      },
      {
        title: 'Ameba',
        url: 'https://ameblo.jp/seira-miyazawa/',
      },
    ],
    graduatedDate: '2013-11-17',
  }),
  createMemberRaw({
    name: MemberNameKey.KashiwaYukina,
    nameNotations: ['柏', '幸奈', 'かしわ', 'ゆきな', 'kashiwa', 'yukina'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Pink],
    join: JoinedGenerationType.First,
    birthday: '1994-08-12',
    height: 158,
    bloodType: BloodType.B,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/y_k812/',
      },
    ],
    graduatedDate: '2013-11-17',
  }),
  createMemberRaw({
    name: MemberNameKey.AndouMikumo,
    nameNotations: ['安藤', '美雲', 'あんどう', 'みくも', 'ando', 'mikumo'],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
    birthday: '1993-05-21',
    height: 156,
    bloodType: BloodType.O,
    origin: Birthplace.Kanagawa,
    graduatedDate: '2013-06-16',
  }),
  createMemberRaw({
    name: MemberNameKey.IwaseYumiko,
    nameNotations: ['岩瀬', '佑美子', 'いわせ', 'ゆみこ', 'iwase', 'yumiko'],
    glowStickColor: [GlowStickColorType.None, GlowStickColorType.None],
    join: JoinedGenerationType.First,
    birthday: '1990-06-12',
    height: 153,
    bloodType: BloodType.A,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/scarf_iwase/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://ketsuban.com/',
      },
    ],
    graduatedDate: '2012-11-18',
  }),
];
