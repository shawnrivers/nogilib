import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'タイトル未定',
    type: 'title',
    center: [],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
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
