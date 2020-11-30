import { Birthplace } from 'server/actors/Members/constants/birthplace';
import { BloodType } from 'server/actors/Members/constants/bloodType';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { JoinedGenerationType } from 'server/actors/Members/constants/joinedGeneration';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { PhotoAlbumType } from 'server/actors/Members/constants/photoAlbum';
import { SocialMedia } from 'server/actors/Members/constants/socialMedia';
import { MemberRaw } from 'server/actors/Members/models';
import { createMemberRaw } from 'server/actors/Members/raw/creator';

export const THIRD_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: MemberNameKey.ItouRiria,
    nameNotations: ['伊藤', '理々杏', 'いとう', 'りりあ', 'ito', 'riria'],
    glowStickColor: [GlowStickColorType.Purple, GlowStickColorType.Red],
    join: JoinedGenerationType.Third,
    birthday: '2002-10-08',
    height: 154,
    bloodType: BloodType.B,
    origin: Birthplace.Okinawa,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/riria.itou/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/itouriria.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.IwamotoRenka,
    nameNotations: ['岩本', '蓮加', 'いわもと', 'れんか', 'iwamoto', 'renka'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Pink],
    join: JoinedGenerationType.Third,
    birthday: '2004-02-02',
    height: 157,
    bloodType: BloodType.B,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/renka.iwamoto/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/iwamotorenka.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.UmezawaMinami,
    nameNotations: ['梅澤', '美波', 'うめざわ', 'みなみ', 'umezakwa', 'minami'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.LightBlue],
    join: JoinedGenerationType.Third,
    birthday: '1999-01-06',
    height: 170,
    bloodType: BloodType.A,
    origin: Birthplace.Kanagawa,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/minami.umezawa/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/umezawaminami.php',
      },
    ],
    photoAlbums: [
      {
        title: '夢の近く',
        release: '2020-09-29',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/ume1st_minami',
          },
        ],
        cover: 'photo-albums/umezawaminami_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.OozonoMomoko,
    nameNotations: ['大園', '桃子', 'おおぞの', 'ももこ', 'ozono', 'momoko'],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Green],
    join: JoinedGenerationType.Third,
    birthday: '1999-09-13',
    height: 156,
    bloodType: BloodType.O,
    origin: Birthplace.Kagoshima,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/o.momoko_official/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/momoko.oozono/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/oozonomomoko.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.KuboShiori,
    nameNotations: ['久保', '史緒里', 'くぼ', 'しおり', 'kubo', 'shiori'],
    glowStickColor: [GlowStickColorType.LightBlue, GlowStickColorType.Yellow],
    join: JoinedGenerationType.Third,
    birthday: '2001-07-14',
    height: 159,
    bloodType: BloodType.O,
    origin: Birthplace.Miyagi,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/shiori.kubo/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/kuboshiori.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SakaguchiTamami,
    nameNotations: [
      '阪口',
      '珠美',
      'さかぐち',
      'たまみ',
      'sakaguchi',
      'tamami',
    ],
    glowStickColor: [GlowStickColorType.Purple, GlowStickColorType.Yellow],
    join: JoinedGenerationType.Third,
    birthday: '2001-11-10',
    height: 161,
    bloodType: BloodType.A,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/tamami.sakaguchi/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/sakaguchitamami.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.SatouKaede,
    nameNotations: ['佐藤', '楓', 'さとう', 'かえで', 'sato', 'kaede'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Red],
    join: JoinedGenerationType.Third,
    birthday: '1998-03-23',
    height: 161,
    bloodType: BloodType.A,
    origin: Birthplace.Aichi,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/kaede.satou/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/satoukaede.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.NakamuraReno,
    nameNotations: ['中村', '麗乃', 'なかむら', 'れの', 'nakamura', 'reno'],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.White],
    join: JoinedGenerationType.Third,
    birthday: '2001-09-27',
    height: 167,
    bloodType: BloodType.Unknown,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/reno.nakamura/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/nakamurareno.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.MukaiHazuki,
    nameNotations: ['向井', '葉月', 'むかい', 'はづき', 'mukai', 'hazuki'],
    glowStickColor: [GlowStickColorType.Yellow, GlowStickColorType.Yellow],
    join: JoinedGenerationType.Third,
    birthday: '1999-08-23',
    height: 152,
    bloodType: BloodType.A,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/hazuki.mukai/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/mukaihazuki.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.YamashitaMizuki,
    nameNotations: [
      '山下',
      '美月',
      'やました',
      'みづき',
      'yamashita',
      'mizuki',
    ],
    glowStickColor: [GlowStickColorType.Blue, GlowStickColorType.Yellow],
    join: JoinedGenerationType.Third,
    birthday: '1999-07-26',
    height: 159,
    bloodType: BloodType.O,
    origin: Birthplace.Tokyo,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/mizuki.yamashita/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/yamashitamizuki.php',
      },
    ],
    photoAlbums: [
      {
        title: '忘れられない人',
        release: '2020-01-21',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/mizuki1st_paris',
          },
        ],
        cover: 'photo-albums/yamashitamizuki_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.YoshidaAyanoChristie,
    nameNotations: [
      '吉田',
      '綾乃クリスティー',
      'よしだ',
      'あやのくりすてぃー',
      'yoshida',
      'ayanochristie',
    ],
    glowStickColor: [GlowStickColorType.Pink, GlowStickColorType.Purple],
    join: JoinedGenerationType.Third,
    birthday: '1995-09-06',
    height: 161,
    bloodType: BloodType.A,
    origin: Birthplace.Oita,
    sites: [
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/ayanochristie.yoshida/',
      },
      {
        title: SocialMedia.Profile,
        url:
          'https://www.nogizaka46.com/member/detail/yoshidaayanochristie.php',
      },
    ],
  }),
  createMemberRaw({
    name: MemberNameKey.YodaYuuki,
    nameNotations: ['与田', '祐希', 'よだ', 'ゆうき', 'yoda', 'yuki'],
    glowStickColor: [GlowStickColorType.Red, GlowStickColorType.Green],
    join: JoinedGenerationType.Third,
    birthday: '2000-05-05',
    height: 152,
    bloodType: BloodType.O,
    origin: Birthplace.Fukuoka,
    sites: [
      {
        title: SocialMedia.Instagram,
        url: 'https://www.instagram.com/yodayuuki_oimo/',
      },
      {
        title: SocialMedia.Blog,
        url: 'https://blog.nogizaka46.com/yuuki.yoda/',
      },
      {
        title: SocialMedia.Profile,
        url: 'https://www.nogizaka46.com/member/detail/yodayuuki.php',
      },
    ],
    photoAlbums: [
      {
        title: '日向の温度',
        release: '2017-12-26',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/gentosha_yoda',
          },
        ],
        cover: 'photo-albums/yodayuuki_1.jpg',
      },
      {
        title: '無口な時間',
        release: '2020-03-10',
        type: PhotoAlbumType.PhotoAlbum,
        sites: [
          {
            title: SocialMedia.Twitter,
            url: 'https://twitter.com/yodayuuki_oimo',
          },
        ],
        cover: 'photo-albums/yodayuuki_2.jpg',
      },
    ],
  }),
];
