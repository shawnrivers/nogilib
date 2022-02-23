import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'Actually...',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['NAMITO'],
    },
    center: ['nakanishiaruno'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
        'nakanishiaruno',
        'saitouasuka',
        'akimotomanatsu',
      ],
      secondRow: [
        'kuboshiori',
        'kakiharuka',
        'yodayuuki',
        'endousakura',
        'tsutsuiayame',
      ],
      thirdRow: [
        'tamuramayu',
        'kakehashisayaka',
        'seimiyarei',
        'suzukiayane',
        'higuchihina',
        'iwamotorenka',
        'shibatayuna',
        'hayakawaseira',
      ],
    },
  }),
];
