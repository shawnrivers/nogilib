import { DiscographyRawArray } from 'server/actors/Discography/models';
import { createOtherCdRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const otherCdsRawArray: DiscographyRawArray = [
  createOtherCdRaw({
    title: '世界中の隣人よ',
    number: '1',
    type: 'digital',
    release: '2020-06-17',
    previousSingle: '25',
    cdTypes: ['T'],
    songs: [
      {
        title: SONGS['世界中の隣人よ'].title,
        inCdType: ['T'],
      },
    ],
  }),
  createOtherCdRaw({
    title: 'Route 246',
    number: '2',
    type: 'digital',
    release: '2020-07-24',
    previousSingle: '25',
    cdTypes: ['T'],
    songs: [
      {
        title: SONGS['Route 246'].title,
        inCdType: ['T'],
      },
    ],
  }),
  createOtherCdRaw({
    title: '１・２・３',
    number: '3',
    type: 'digital',
    release: '2021-02-19',
    previousSingle: '26',
    cdTypes: ['T'],
    songs: [
      {
        title: SONGS['１・２・３'].title,
        inCdType: ['T'],
      },
    ],
  }),
];
