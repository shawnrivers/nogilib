import { MemberRaw } from 'server/actors/Members/models';
import { createMemberRaw } from 'server/actors/Members/raw/creator';

export const THIRD_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: 'itouriria',
    nameNotations: ['伊藤', '理々杏', 'いとう', 'りりあ', 'ito', 'riria'],
    glowStickColor: ['purple', 'red'],
    join: 'third',
    birthday: '2002-10-08',
    height: 154,
    bloodType: 'b',
    origin: '沖縄県',
    sites: [
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/riria.itou/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/itouriria.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'iwamotorenka',
    nameNotations: ['岩本', '蓮加', 'いわもと', 'れんか', 'iwamoto', 'renka'],
    glowStickColor: ['red', 'pink'],
    join: 'third',
    birthday: '2004-02-02',
    height: 159,
    bloodType: 'b',
    origin: '東京都',
    sites: [
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/renka.iwamoto/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/iwamotorenka.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'umezawaminami',
    nameNotations: ['梅澤', '美波', 'うめざわ', 'みなみ', 'umezakwa', 'minami'],
    glowStickColor: ['blue', 'light blue'],
    join: 'third',
    birthday: '1999-01-06',
    height: 170,
    bloodType: 'a',
    origin: '神奈川県',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/ume_minami.official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/minami.umezawa/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/umezawaminami.php',
      },
    ],
    photoAlbums: [
      {
        title: '夢の近く',
        release: '2020-09-29',
        type: 'photo album',
        sites: [
          {
            title: 'Twitter',
            url: 'https://twitter.com/ume1st_minami',
          },
        ],
        cover: 'photo-albums/umezawaminami_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: 'oozonomomoko',
    nameNotations: ['大園', '桃子', 'おおぞの', 'ももこ', 'ozono', 'momoko'],
    glowStickColor: ['pink', 'green'],
    join: 'third',
    birthday: '1999-09-13',
    height: 156,
    bloodType: 'o',
    origin: '鹿児島県',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/o.momoko_official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/momoko.oozono/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/oozonomomoko.php',
      },
    ],
    graduatedDate: '2021-09-04',
  }),
  createMemberRaw({
    name: 'kuboshiori',
    nameNotations: ['久保', '史緒里', 'くぼ', 'しおり', 'kubo', 'shiori'],
    glowStickColor: ['light blue', 'yellow'],
    join: 'third',
    birthday: '2001-07-14',
    height: 161,
    bloodType: 'o',
    origin: '宮城県',
    sites: [
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/shiori.kubo/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/kuboshiori.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'sakaguchitamami',
    nameNotations: [
      '阪口',
      '珠美',
      'さかぐち',
      'たまみ',
      'sakaguchi',
      'tamami',
    ],
    glowStickColor: ['purple', 'yellow'],
    join: 'third',
    birthday: '2001-11-10',
    height: 161,
    bloodType: 'a',
    origin: '東京都',
    sites: [
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/tamami.sakaguchi/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/sakaguchitamami.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'satoukaede',
    nameNotations: ['佐藤', '楓', 'さとう', 'かえで', 'sato', 'kaede'],
    glowStickColor: ['red', 'red'],
    join: 'third',
    birthday: '1998-03-23',
    height: 161,
    bloodType: 'a',
    origin: '愛知県',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/Kaede_Sato.official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/kaede.satou/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/satoukaede.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'nakamurareno',
    nameNotations: ['中村', '麗乃', 'なかむら', 'れの', 'nakamura', 'reno'],
    glowStickColor: ['blue', 'white'],
    join: 'third',
    birthday: '2001-09-27',
    height: 167,
    bloodType: 'unknown',
    origin: '東京都',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/n.reno_official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/reno.nakamura/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/nakamurareno.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'mukaihazuki',
    nameNotations: ['向井', '葉月', 'むかい', 'はづき', 'mukai', 'hazuki'],
    glowStickColor: ['yellow', 'yellow'],
    join: 'third',
    birthday: '1999-08-23',
    height: 152,
    bloodType: 'a',
    origin: '東京都',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/hazuki.p3.official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/hazuki.mukai/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/mukaihazuki.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'yamashitamizuki',
    nameNotations: [
      '山下',
      '美月',
      'やました',
      'みづき',
      'yamashita',
      'mizuki',
    ],
    glowStickColor: ['blue', 'yellow'],
    join: 'third',
    birthday: '1999-07-26',
    height: 160,
    bloodType: 'o',
    origin: '東京都',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/mizuki.yamashita.official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/mizuki.yamashita/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/yamashitamizuki.php',
      },
    ],
    photoAlbums: [
      {
        title: '忘れられない人',
        release: '2020-01-21',
        type: 'photo album',
        sites: [
          {
            title: 'Twitter',
            url: 'https://twitter.com/mizuki1st_paris',
          },
        ],
        cover: 'photo-albums/yamashitamizuki_1.jpg',
      },
    ],
  }),
  createMemberRaw({
    name: 'yoshidaayanochristie',
    nameNotations: [
      '吉田',
      '綾乃クリスティー',
      'よしだ',
      'あやのくりすてぃー',
      'yoshida',
      'ayanochristie',
    ],
    glowStickColor: ['pink', 'purple'],
    join: 'third',
    birthday: '1995-09-06',
    height: 161,
    bloodType: 'a',
    origin: '大分県',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/y.ayanochristie.official/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/ayanochristie.yoshida/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/yoshidaayanochristie.php',
      },
    ],
  }),
  createMemberRaw({
    name: 'yodayuuki',
    nameNotations: ['与田', '祐希', 'よだ', 'ゆうき', 'yoda', 'yuki'],
    glowStickColor: ['red', 'green'],
    join: 'third',
    birthday: '2000-05-05',
    height: 153,
    bloodType: 'o',
    origin: '福岡県',
    sites: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/yodayuuki_oimo/',
      },
      {
        title: 'blog',
        url: 'https://blog.nogizaka46.com/yuuki.yoda/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/member/detail/yodayuuki.php',
      },
    ],
    photoAlbums: [
      {
        title: '日向の温度',
        release: '2017-12-26',
        type: 'photo album',
        sites: [
          {
            title: 'Twitter',
            url: 'https://twitter.com/gentosha_yoda',
          },
        ],
        cover: 'photo-albums/yodayuuki_1.jpg',
      },
      {
        title: '無口な時間',
        release: '2020-03-10',
        type: 'photo album',
        sites: [
          {
            title: 'Twitter',
            url: 'https://twitter.com/yodayuuki_oimo',
          },
        ],
        cover: 'photo-albums/yodayuuki_2.jpg',
      },
    ],
  }),
];
