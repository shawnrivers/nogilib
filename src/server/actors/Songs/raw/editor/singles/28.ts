import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const TWENTY_EIGHTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '君に叱られた',
    type: 'title',
    center: ['kakiharuka'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'endousakura',
        'yodayuuki',
        'kakiharuka',
        'saitouasuka',
        'yamashitamizuki',
      ],
      secondRow: [
        'tsutsuiayame',
        'umezawaminami',
        'hoshinominami',
        'takayamakazumi',
        'ikutaerika',
        'kuboshiori',
        'akimotomanatsu',
      ],
      thirdRow: [
        'higuchihina',
        'hayakawaseira',
        'seimiyarei',
        'kitanohinako',
        'iwamotorenka',
        'suzukiayane',
        'tamuramayu',
        'shinuchimai',
        'kakehashisayaka',
      ],
    },
  }),
];
