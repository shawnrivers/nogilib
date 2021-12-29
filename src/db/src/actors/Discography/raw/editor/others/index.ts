import { DiscographyRawArray } from 'db/src/actors/Discography/models';
import { createOtherCdRaw } from 'db/src/actors/Discography/raw/creators';

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
        title: '世界中の隣人よ',
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
        title: 'Route 246',
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
        title: '１・２・３',
        inCdType: ['T'],
      },
    ],
  }),
];
