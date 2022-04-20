import { MemberRaw } from 'db/src/actors/Members/models';
import { createMemberRaw } from 'db/src/actors/Members/raw/creator';

export const FOURTH_GEN_MEMBERS: MemberRaw[] = [
  createMemberRaw({
    name: 'endousakura',
    nameNotations: ['遠藤', 'さくら', 'えんどう', 'さくら', 'endo', 'sakura'],
    glowStickColor: ['pink', 'white'],
    join: 'fourth',
    birthday: '2001-10-03',
    height: 164,
    bloodType: 'unknown',
    origin: '愛知県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48006',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48006',
      },
    ],
  }),
  createMemberRaw({
    name: 'kakiharuka',
    nameNotations: ['賀喜', '遥香', 'かき', 'はるか', 'kaki', 'haruka'],
    glowStickColor: ['orange', 'green'],
    join: 'fourth',
    birthday: '2001-08-08',
    height: 166,
    bloodType: 'a',
    origin: '栃木県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48008',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48008',
      },
    ],
    photoAlbums: [{
      release: '2022-06-07',
      title: 'まっさら',
      type: 'photo album',
      cover: 'kakiharuka_1',
      sites: [{
        title: 'Twitter',
        url: 'https://twitter.com/kakiharuka_1st'
      }]
    }]
  }),
  createMemberRaw({
    name: 'kakehashisayaka',
    nameNotations: [
      '掛橋',
      '沙耶香',
      'かけはし',
      'さやか',
      'kakehashi',
      'sayaka',
    ],
    glowStickColor: ['pink', 'orange'],
    join: 'fourth',
    birthday: '2002-11-20',
    height: 154,
    bloodType: 'b',
    origin: '岡山県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48009',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48009',
      },
    ],
  }),
  createMemberRaw({
    name: 'kanagawasaya',
    nameNotations: ['金川', '紗耶', 'かながわ', 'さや', 'kanagawa', 'saya'],
    glowStickColor: ['light blue', 'red'],
    join: 'fourth',
    birthday: '2001-10-31',
    height: 165,
    bloodType: 'o',
    origin: '北海道',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48010',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48010',
      },
    ],
  }),
  createMemberRaw({
    name: 'kitagawayuri',
    nameNotations: ['北川', '悠理', 'きたがわ', 'ゆり', 'kitagawa', 'yuri'],
    glowStickColor: ['light blue', 'orange'],
    join: 'fourth',
    birthday: '2001-08-08',
    height: 165,
    bloodType: 'unknown',
    origin: 'California, US',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48012',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48012',
      },
    ],
  }),
  createMemberRaw({
    name: 'shibatayuna',
    nameNotations: ['柴田', '柚菜', 'しばた', 'ゆな', 'shibata', 'yuna'],
    glowStickColor: ['blue', 'yellow green'],
    join: 'fourth',
    birthday: '2003-03-03',
    height: 160,
    bloodType: 'a',
    origin: '千葉県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48013',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48013',
      },
    ],
  }),
  createMemberRaw({
    name: 'seimiyarei',
    nameNotations: ['清宮', 'レイ', 'せいみや', 'れい', 'seimiya', 'rei'],
    glowStickColor: ['orange', 'orange'],
    join: 'fourth',
    birthday: '2003-08-01',
    height: 164,
    bloodType: 'o',
    origin: '埼玉県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48014',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48014',
      },
    ],
  }),
  createMemberRaw({
    name: 'tamuramayu',
    nameNotations: ['田村', '真佑', 'たむら', 'まゆ', 'tamura', 'mayu'],
    glowStickColor: ['light blue', 'purple'],
    join: 'fourth',
    birthday: '1999-01-12',
    height: 160,
    bloodType: 'a',
    origin: '埼玉県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48015',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48015',
      },
    ],
  }),
  createMemberRaw({
    name: 'tsutsuiayame',
    nameNotations: ['筒井', 'あやめ', 'つつい', 'あやめ', 'tsutsui', 'ayame'],
    glowStickColor: ['purple', 'purple'],
    join: 'fourth',
    birthday: '2004-06-08',
    height: 160,
    bloodType: 'o',
    origin: '愛知県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48017',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48017',
      },
    ],
  }),
  createMemberRaw({
    name: 'hayakawaseira',
    nameNotations: ['早川', '聖来', 'はやかわ', 'せいら', 'hayakawa', 'seira'],
    glowStickColor: ['blue', 'blue'],
    join: 'fourth',
    birthday: '2000-08-24',
    height: 164,
    bloodType: 'a',
    origin: '大阪府',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48018',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48018',
      },
    ],
  }),
  createMemberRaw({
    name: 'yakubomio',
    nameNotations: ['矢久保', '美緒', 'やくぼ', 'みお', 'yakubo', 'mio'],
    glowStickColor: ['pink', 'yellow'],
    join: 'fourth',
    birthday: '2002-08-14',
    height: 153,
    bloodType: 'b',
    origin: '東京都',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/48019',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=48019',
      },
    ],
  }),
  createMemberRaw({
    name: 'kuromiharuka',
    nameNotations: ['黒見', '明香', 'くろみ', 'はるか', 'kuromi', 'haruka'],
    glowStickColor: ['purple', 'green'],
    join: 'fourth',
    birthday: '2004-01-19',
    height: 162,
    bloodType: 'o',
    origin: '東京都',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/55383',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=55383',
      },
    ],
  }),
  createMemberRaw({
    name: 'satourika',
    nameNotations: ['佐藤', '璃果', 'さとう', 'りか', 'satou', 'rika'],
    glowStickColor: ['pink', 'turquoise'],
    join: 'fourth',
    birthday: '2001-08-09',
    height: 160,
    bloodType: 'b',
    origin: '岩手県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/55384',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=55384',
      },
    ],
  }),
  createMemberRaw({
    name: 'hayashiruna',
    nameNotations: ['林', '瑠奈', 'はやし', 'るな', 'hayashi', 'runa'],
    glowStickColor: ['pink', 'pink'],
    join: 'fourth',
    birthday: '2003-10-02',
    height: 164,
    bloodType: 'o',
    origin: '神奈川県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/55385',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=55385',
      },
    ],
  }),
  createMemberRaw({
    name: 'matsuomiyu',
    nameNotations: ['松尾', '美佑', 'まつお', 'みゆ', 'matsuo', 'miyu'],
    glowStickColor: ['turquoise', 'white'],
    join: 'fourth',
    birthday: '2004-01-03',
    height: 167,
    bloodType: 'o',
    origin: '千葉県',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/55386',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=55386',
      },
    ],
  }),
  createMemberRaw({
    name: 'yumikinao',
    nameNotations: ['弓木', '奈於', 'ゆみき', 'なお', 'yumiki', 'nao'],
    glowStickColor: ['red', 'yellow green'],
    join: 'fourth',
    birthday: '1999-02-03',
    height: 165,
    bloodType: 'a',
    origin: '京都府',
    sites: [
      {
        title: 'profile',
        url: 'https://www.nogizaka46.com/s/n46/artist/55387',
      },
      {
        title: 'blog',
        url: 'https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=55387',
      },
    ],
  }),
];
