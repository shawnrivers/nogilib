import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const BEST_ALBUM_SONGS = [
  createSongRaw({
    title: '最後のTight Hug',
    type: 'lead',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
    },
    center: ['ikutaerika'],
    formations: {
      firstRow: ['ikutaerika'],
    },
  }),
];
