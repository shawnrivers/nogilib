import { Birthplace } from 'server/actors/Members/constants/birthplace';
import { BloodType } from 'server/actors/Members/constants/bloodType';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { JoinedGenerationType } from 'server/actors/Members/constants/joinedGeneration';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { PhotoAlbumType } from 'server/actors/Members/constants/photoAlbum';
import { SocialMedia } from 'server/actors/Members/constants/socialMedia';
import { MemberRaw } from 'server/actors/Members/models';
import { createMemberRaw } from 'server/actors/Members/raw/creator';

export const SECOND_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: MemberNameKey.ItouKarin,
    nameNotations: ['伊藤', 'かりん', 'いとう', 'かりん', 'ito', 'karin'],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Purple],
    join: JoinedGenerationType.Second,
    birthday: '1993-05-26',
    height: 154,
    bloodType: BloodType.O,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/karin___ito/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/karin___ito',
      },
      {
        title: SocialMedia.YouTube,
        url: 'https://www.youtube.com/channel/UC9BihA2GY6ATFR__KvRWudA',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/2',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/itou-karin',
      },
    ],
    graduatedDate: '2019-05-24',
  }),
  createMemberRaw({
    name: MemberNameKey.ItouJunna,
    nameNotations: ['伊藤', '純奈', 'いとう', 'じゅんな', 'ito', 'junna'],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.Pink],
    join: JoinedGenerationType.Second,
    birthday: '1998-11-30',
    height: 166,
    bloodType: BloodType.A,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/junna_ito_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/junna.itou/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/itoujunna.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/itou-junna',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.KitanoHinako,
    nameNotations: ['北野', '日奈子', 'きたの', 'ひなこ', 'kitano', 'hinako'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.YellowGreen],
    join: JoinedGenerationType.Second,
    birthday: '1996-07-17',
    height: 158,
    bloodType: BloodType.O,
    origin: Birthplace.Hokkaido,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/hinako.kitano/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/kitanohinako.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/kitano-hinako',
      },
    ],
    photoAlbums: [
      {
        title: '空気の色',
        release: '2018-12-27',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/hinako_gentosha',
          },
        ],
        cover: 'photo-albums/kitanohinako_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SasakiKotoko,
    nameNotations: ['佐々木', '琴子', 'ささき', 'ことこ', 'sasaki', 'kotoko'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Green],
    join: JoinedGenerationType.Second,
    birthday: '1998-08-28',
    height: 163,
    bloodType: BloodType.A,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/sasaki_kotoko828/',
      },
      {
        title: SocialMedia.Twitter,
        url: 'https://twitter.com/ssk_ktk828',
      },
      {
        title: SocialMedia.Profile,
        url: 'http://stylecube.jp/talents/kotoko/index.html',
      },
    ],
    graduatedDate: '2020-03-31',
  }),
  createMemberRaw({
    name: MemberNameKey.ShinuchiMai,
    nameNotations: ['新内', '眞衣', 'しんうち', 'まい', 'shinuchi', 'mai'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Purple],
    join: JoinedGenerationType.Second,
    birthday: '1992-01-22',
    height: 165,
    bloodType: BloodType.B,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/mai.shinuchi_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/mai.shinuchi/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/shinuchimai.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/shinuchi-mai',
      },
    ],
    photoAlbums: [
      {
        title: 'どこにいるの？',
        release: '2017-11-14',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/mai_kobunsha',
          },
        ],
        cover: 'photo-albums/shinuchimai_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SuzukiAyane,
    nameNotations: ['鈴木', '絢音', 'すずき', 'あやね', 'suzuki', 'ayane'],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.Purple],
    join: JoinedGenerationType.Second,
    birthday: '1999-03-05',
    height: 161,
    bloodType: BloodType.O,
    origin: Birthplace.Akita,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/ayane.suzuki/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/suzukiayane.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/suzuki-ayane',
      },
    ],
    photoAlbums: [
      {
        title: '光の角度',
        release: '2020-11-10',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/ayane_gentosha',
          },
        ],
        cover: 'photo-albums/suzukiayane_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.TeradaRanze,
    nameNotations: ['寺田', '蘭世', 'てらだ', 'らんぜ', 'terada', 'ranze'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.White],
    join: JoinedGenerationType.Second,
    birthday: '1998-09-23',
    height: 155,
    bloodType: BloodType.Unknown,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/terada.ranze.official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/ranze.terada/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/teradaranze.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.HoriMiona,
    nameNotations: ['堀', '未央奈', 'ほり', 'みおな', 'hori', 'miona'],
    glowStickColor: [GlowStickColorType.White, GlowStickColorType.Orange],
    join: JoinedGenerationType.Second,
    birthday: '1996-10-15',
    height: 162,
    bloodType: BloodType.O,
    origin: Birthplace.Gifu,
    graduatedDate: '2021-03-28',
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/horimiona_official/',
      },
      {
        title: SocialMedia.Official,
        url: 'https://hori-miona.com/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/miona.hori/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/horimiona.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/hori-miona',
      },
    ],
    photoAlbums: [
      {
        title: '君らしさ',
        release: '2017-11-24',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/miona_book',
          },
        ],
        cover: 'photo-albums/horimiona_1.jpg',
      },
      {
        title: 'いつかの待ち合わせ場所',
        release: '2020-05-27',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/horimiona2nd',
          },
        ],
        cover: 'photo-albums/horimiona_2.jpg',
      },
      {
        title: 'いつのまにか',
        release: '2021-04-20',
        type: PhotoAlbumType.PhotoBook,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/miona_photobook',
          },
        ],
        cover: 'photo-albums/horimiona_3.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.YamazakiRena,
    nameNotations: ['山崎', '怜奈', 'やまざき', 'れな', 'yamazaki', 'rena'],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.White],
    join: JoinedGenerationType.Second,
    birthday: '1998-01-31',
    height: 164,
    bloodType: BloodType.A,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://instagram.com/rena_yamazaki.official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/rena.yamazaki/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/yamazakirena.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/yamazaki-rena',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.WatanabeMiria,
    nameNotations: [
      '渡辺',
      'みり愛',
      'わたなべ',
      'みりあ',
      'watanabe',
      'miria',
    ],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.YellowGreen],
    join: JoinedGenerationType.Second,
    birthday: '1999-11-01',
    height: 153,
    bloodType: BloodType.O,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/miria.watanabe_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/miria.watanabe/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/watanabemiria.php',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/watanabe-miria',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SagaraIori,
    nameNotations: ['相楽', '伊織', 'さがら', 'いおり', 'sagara', 'iori'],
    glowStickColor: [GlowStickColorType.Green, GlowStickColorType.Orange],
    join: JoinedGenerationType.Second,
    birthday: '1997-11-26',
    height: 164,
    bloodType: BloodType.O,
    origin: Birthplace.Saitama,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/_iori.sagara_/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://n46llc.com/s/m00/artist/5',
      },
      {
        title: SocialMedia.Nanagogo,
        url: 'https://7gogo.jp/sagara-iori',
      },
    ],
    graduatedDate: '2018-07-16',
  }),
  createMemberRaw({
    name: MemberNameKey.YonetokuKyouka,
    nameNotations: [
      '米徳',
      '京花',
      'よねとく',
      'きょうか',
      'yonetoku',
      'kyoka',
    ],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.Blue],
    join: JoinedGenerationType.Second,
    birthday: '1999-04-14',
    height: 163,
    bloodType: BloodType.AB,
    origin: Birthplace.Kanagawa,
    graduatedDate: '2014-10-18',
  }),
  createMemberRaw({
    name: MemberNameKey.YadaRisako,
    nameNotations: ['矢田', '里沙子', 'やだ', 'りさこ', 'yada', 'risako'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Pink],
    join: JoinedGenerationType.Second,
    birthday: '1995-03-08',
    height: 158,
    bloodType: BloodType.A,
    origin: Birthplace.Saitama,
    graduatedDate: '2014-10-18',
  }),
];
