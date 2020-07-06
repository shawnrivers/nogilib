import { DiscographyRawArray } from 'server/actors/Discography/models';
import { createOtherCdRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const otherCdsRawArray: DiscographyRawArray = [
  createOtherCdRaw({
    title: '世界中の隣人よ',
    number: '1',
    release: '2020-06-17',
    previousSingle: '24',
    cdTypes: ['T'],
    songs: [
      {
        title: SONGS['世界中の隣人よ'].title,
        inCdType: ['T'],
      },
    ],
  }),
];
