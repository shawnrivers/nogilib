import { createAlbumRaw } from 'server/actors/Discography/raw/creators';

export const BEST_ALBUM = createAlbumRaw({
  title: 'Time flies',
  number: 'best',
  release: '2021-12-15',
  previousSingle: '28',
  cdTypes: ['L1', 'L2', 'T'],
  songs: [
    {
      title: '最後のTight Hug',
      inCdType: ['L1'],
    },
  ],
});
