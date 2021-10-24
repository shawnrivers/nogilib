import {
  convertMemberPositionsCounter,
  convertMemberPositionsHistory,
  convertMemberUnits,
  convertProfileImages,
} from 'server/actors/Members/converters';
import { Songs } from 'server/actors/Songs';
import { songsRawArray } from 'server/actors/Songs/raw';
import { unitsRawArray } from 'server/actors/Units/raw';
import { Discography } from 'server/actors/Discography';
import { discographyRawArray } from 'server/actors/Discography/raw/editor';
import { arrayToObject } from 'utils/array';

const discography = new Discography(discographyRawArray);
const singlesRawArray = discography.getSinglesRawArray();
const albumsRawArray = discography.getAlbumsRawArray();
const digitalRawArray = discography.getOtherCdsRawArray();
const songsRawObject = new Songs(songsRawArray).rawObject;

const nanaminPositionsHistory = convertMemberPositionsHistory({
  memberName: 'hashimotonanami',
  singlesRawArray,
  songsRawObject,
});
const ioriPositionsHistory = convertMemberPositionsHistory({
  memberName: 'sagaraiori',
  singlesRawArray,
  songsRawObject,
});

describe('convertProfileImages', () => {
  const nanaseProfileImages = convertProfileImages({
    memberName: 'nishinonanase',
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });
  const nanaseSingleProfileImages = arrayToObject(
    nanaseProfileImages.singles,
    'number'
  );
  const nanaseAlbumProfileImages = arrayToObject(
    nanaseProfileImages.albums,
    'number'
  );
  const nanaseDigitalProfileImages = arrayToObject(
    nanaseProfileImages.digital,
    'number'
  );
  const renkaProfileImages = convertProfileImages({
    memberName: 'iwamotorenka',
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });
  const hashimotoProfileImages = convertProfileImages({
    memberName: 'hashimotonanami',
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });
  const nishikawaProfileImages = convertProfileImages({
    memberName: 'nishikawananami',
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });

  // TODO: adapt hashed file names
  xtest('should sort gallery by date', () => {
    expect(nanaseProfileImages.gallery).toEqual([
      {
        sm: '/images/members/others/nishinonanase_2020-06-11@1x.jpg',
        md: '/images/members/others/nishinonanase_2020-06-11@2x.jpg',
        lg: '/images/members/others/nishinonanase_2020-06-11@3x.jpg',
      },
      {
        sm: '/images/members/others/nishinonanase_2019-09-21@1x.jpg',
        md: '/images/members/others/nishinonanase_2019-09-21@2x.jpg',
        lg: '/images/members/others/nishinonanase_2019-09-21@3x.jpg',
      },
      {
        sm: '/images/members/singles/22/nishinonanase@1x.jpg',
        md: '/images/members/singles/22/nishinonanase@2x.jpg',
        lg: '/images/members/singles/22/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/20/nishinonanase@1x.jpg',
        md: '/images/members/singles/20/nishinonanase@2x.jpg',
        lg: '/images/members/singles/20/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/17/nishinonanase@1x.jpg',
        md: '/images/members/singles/17/nishinonanase@2x.jpg',
        lg: '/images/members/singles/17/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/15/nishinonanase@1x.jpg',
        md: '/images/members/singles/15/nishinonanase@2x.jpg',
        lg: '/images/members/singles/15/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/14/nishinonanase@1x.jpg',
        md: '/images/members/singles/14/nishinonanase@2x.jpg',
        lg: '/images/members/singles/14/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/13/nishinonanase@1x.jpg',
        md: '/images/members/singles/13/nishinonanase@2x.jpg',
        lg: '/images/members/singles/13/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/12/nishinonanase@1x.jpg',
        md: '/images/members/singles/12/nishinonanase@2x.jpg',
        lg: '/images/members/singles/12/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/11/nishinonanase@1x.jpg',
        md: '/images/members/singles/11/nishinonanase@2x.jpg',
        lg: '/images/members/singles/11/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/10/nishinonanase@1x.jpg',
        md: '/images/members/singles/10/nishinonanase@2x.jpg',
        lg: '/images/members/singles/10/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/9/nishinonanase@1x.jpg',
        md: '/images/members/singles/9/nishinonanase@2x.jpg',
        lg: '/images/members/singles/9/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/8/nishinonanase@1x.jpg',
        md: '/images/members/singles/8/nishinonanase@2x.jpg',
        lg: '/images/members/singles/8/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/7/nishinonanase@1x.jpg',
        md: '/images/members/singles/7/nishinonanase@2x.jpg',
        lg: '/images/members/singles/7/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/6/nishinonanase@1x.jpg',
        md: '/images/members/singles/6/nishinonanase@2x.jpg',
        lg: '/images/members/singles/6/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/5/nishinonanase@1x.jpg',
        md: '/images/members/singles/5/nishinonanase@2x.jpg',
        lg: '/images/members/singles/5/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/4/nishinonanase@1x.jpg',
        md: '/images/members/singles/4/nishinonanase@2x.jpg',
        lg: '/images/members/singles/4/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/3/nishinonanase@1x.jpg',
        md: '/images/members/singles/3/nishinonanase@2x.jpg',
        lg: '/images/members/singles/3/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/2/nishinonanase@1x.jpg',
        md: '/images/members/singles/2/nishinonanase@2x.jpg',
        lg: '/images/members/singles/2/nishinonanase@3x.jpg',
      },
      {
        sm: '/images/members/singles/1/nishinonanase@1x.jpg',
        md: '/images/members/singles/1/nishinonanase@2x.jpg',
        lg: '/images/members/singles/1/nishinonanase@3x.jpg',
      },
    ]);
  });

  test('should have the same amount of single/album/digital images as the amount of singles/albums/digital', () => {
    expect(Object.entries(nanaseProfileImages.singles).length).toEqual(
      singlesRawArray.length
    );
    expect(Object.entries(renkaProfileImages.albums).length).toEqual(
      albumsRawArray.length
    );
    expect(Object.entries(hashimotoProfileImages.digital).length).toEqual(
      digitalRawArray.length
    );
    expect(Object.entries(nishikawaProfileImages.singles).length).toEqual(
      singlesRawArray.length
    );
  });

  test('should use the corresponding file for single', () => {
    expect(nanaseSingleProfileImages[15].url.sm).toMatch(
      /\/images\/members\/singles\/15\/nishinonanase.*@1x.jpg/
    );
  });

  test('should use the closest image if no corresponding file exists', () => {
    expect(nanaseSingleProfileImages[16].url.sm).toMatch(
      /\/images\/members\/singles\/15\/nishinonanase.*@1x.jpg/
    );
    expect(nanaseSingleProfileImages[21].url.sm).toMatch(
      /\/images\/members\/singles\/20\/nishinonanase.*@1x.jpg/
    );
    expect(nanaseSingleProfileImages[23].url.sm).toMatch(
      /\/images\/members\/singles\/22\/nishinonanase.*@1x.jpg/
    );
    expect(nanaseSingleProfileImages[25].url.sm).toMatch(
      /\/images\/members\/others\/nishinonanase_2019-09-21.*@1x.jpg/
    );
    expect(nanaseAlbumProfileImages['U'].url.sm).toMatch(
      /images\/members\/singles\/17\/nishinonanase.*@1x.jpg/
    );
    expect(nanaseDigitalProfileImages[2].url.sm).toMatch(
      /\/images\/members\/others\/nishinonanase_2020-06-11.*@1x.jpg/
    );
  });
});

describe('convertMemberPositionsHistory', () => {
  test("should calculate Hashimoto Nanami's position history correctly", () => {
    expect(nanaminPositionsHistory.slice(0, 16)).toEqual([
      {
        singleNumber: '1',
        position: 'fukujin',
      },
      {
        singleNumber: '2',
        position: 'fukujin',
      },
      {
        singleNumber: '3',
        position: 'fukujin',
      },
      {
        singleNumber: '4',
        position: 'fukujin',
      },
      {
        singleNumber: '5',
        position: 'fukujin',
      },
      {
        singleNumber: '6',
        position: 'fukujin',
      },
      {
        singleNumber: '7',
        position: 'fukujin',
      },
      {
        singleNumber: '8',
        position: 'fukujin',
      },
      {
        singleNumber: '9',
        position: 'fukujin',
      },
      {
        singleNumber: '10',
        position: 'fukujin',
      },
      {
        singleNumber: '11',
        position: 'fukujin',
      },
      {
        singleNumber: '12',
        position: 'fukujin',
      },
      {
        singleNumber: '13',
        position: 'fukujin',
      },
      {
        singleNumber: '14',
        position: 'fukujin',
      },
      {
        singleNumber: '15',
        position: 'fukujin',
      },
      {
        singleNumber: '16',
        position: 'center',
      },
    ]);
  });

  test("should calculate Sagara Iori's position history correctly", () => {
    expect(ioriPositionsHistory.slice(0, 20)).toEqual([
      {
        singleNumber: '1',
        position: 'none',
      },
      {
        singleNumber: '2',
        position: 'none',
      },
      {
        singleNumber: '3',
        position: 'none',
      },
      {
        singleNumber: '4',
        position: 'none',
      },
      {
        singleNumber: '5',
        position: 'none',
      },
      {
        singleNumber: '6',
        position: 'none',
      },
      {
        singleNumber: '7',
        position: 'skip',
      },
      {
        singleNumber: '8',
        position: 'skip',
      },
      {
        singleNumber: '9',
        position: 'trainee',
      },
      {
        singleNumber: '10',
        position: 'trainee',
      },
      {
        singleNumber: '11',
        position: 'selected',
      },
      {
        singleNumber: '12',
        position: 'under',
      },
      {
        singleNumber: '13',
        position: 'under',
      },
      {
        singleNumber: '14',
        position: 'under',
      },
      {
        singleNumber: '15',
        position: 'under',
      },
      {
        singleNumber: '16',
        position: 'under',
      },
      {
        singleNumber: '17',
        position: 'under',
      },
      {
        singleNumber: '18',
        position: 'under',
      },
      {
        singleNumber: '19',
        position: 'under',
      },
      {
        singleNumber: '20',
        position: 'under',
      },
    ]);
  });
});

describe('convertMemberPositionsCounter', () => {
  test("should calculate Hashimoto Nanami's positions counter correctly", () => {
    expect(convertMemberPositionsCounter(nanaminPositionsHistory)).toEqual({
      center: 1,
      fukujin: 16,
      selected: 16,
      under: 0,
    });
  });

  test("should calculate Sagara Iori's positions counter correctly", () => {
    expect(convertMemberPositionsCounter(ioriPositionsHistory)).toEqual({
      center: 0,
      fukujin: 0,
      selected: 1,
      under: 9,
    });
  });
});

describe('convertMemberUnits', () => {
  test("should calculate Nishino Nanase's units correctly", () => {
    expect(
      convertMemberUnits({
        memberName: 'nishinonanase',
        unitsRawArray,
      })
    ).toEqual([
      { name: 'ナスカ', type: 'unit' },
      { name: 'スイカ', type: 'corp' },
    ]);
  });

  test("should calculate Fukagawa Mai's units correctly", () => {
    expect(
      convertMemberUnits({
        memberName: 'fukagawamai',
        unitsRawArray,
      })
    ).toEqual([]);
  });
});
