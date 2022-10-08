import { MemberRaw } from 'db/src/actors/Members/models';
import { createMemberRaw } from 'db/src/actors/Members/raw/creator';

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
        title: 'Instagram',
        url: 'https://www.instagram.com/riria.ito_official/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36749',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36749',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36750',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36750',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36751',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36751',
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
        cover: 'umezawaminami_1',
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
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UCibf_MVPbqh9RzsTytBseqA',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36753',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36753',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/kubo.shiori.official/',
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
        title: 'Instagram',
        url: 'https://www.instagram.com/tamami_46_official/',
      },
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36754',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36754',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36755',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36755',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36756',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36756',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36757',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36757',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36758',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36758',
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
        cover: 'yamashitamizuki_1',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36759',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36759',
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
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/36760',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=36760',
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
        cover: 'yodayuuki_1',
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
        cover: 'yodayuuki_2',
      },
    ],
  }),
];
