import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const THIRTY_FIRST_SINGLE_SONGS = [
  createSongRaw({
    title: 'ここにはないもの',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ナスカ'],
    },
    center: ['saitouasuka'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: ['saitouasuka'],
    },
  }),
];
