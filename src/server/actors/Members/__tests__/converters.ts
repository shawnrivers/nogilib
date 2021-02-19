import { MemberNameKey } from 'server/actors/Members/constants/memberName';
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

const numberOfSingles = singlesRawArray.length;

const nanaminPositionsHistory = convertMemberPositionsHistory({
  memberName: MemberNameKey.HashimotoNanami,
  singlesRawArray,
  songsRawObject,
});
const ioriPositionsHistory = convertMemberPositionsHistory({
  memberName: MemberNameKey.SagaraIori,
  singlesRawArray,
  songsRawObject,
});

describe('convertProfileImages', () => {
  const nanaseProfileImages = convertProfileImages({
    memberName: MemberNameKey.NishinoNanase,
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
    memberName: MemberNameKey.IwamotoRenka,
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });
  const hashimotoProfileImages = convertProfileImages({
    memberName: MemberNameKey.HashimotoNanami,
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });
  const nishikawaProfileImages = convertProfileImages({
    memberName: MemberNameKey.NishikawaNanami,
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  });

  test('should sort gallery by date', () => {
    expect(nanaseProfileImages.gallery).toEqual([
      '/images/members/others/nishinonanase_2020-06-11.jpg',
      '/images/members/others/nishinonanase_2019-09-21.jpg',
      '/images/members/singles/22/nishinonanase.jpg',
      '/images/members/singles/20/nishinonanase.jpg',
      '/images/members/singles/17/nishinonanase.jpg',
      '/images/members/singles/15/nishinonanase.jpg',
      '/images/members/singles/14/nishinonanase.jpg',
      '/images/members/singles/13/nishinonanase.jpg',
      '/images/members/singles/12/nishinonanase.jpg',
      '/images/members/singles/11/nishinonanase.jpg',
      '/images/members/singles/10/nishinonanase.jpg',
      '/images/members/singles/9/nishinonanase.jpg',
      '/images/members/singles/8/nishinonanase.jpg',
      '/images/members/singles/7/nishinonanase.jpg',
      '/images/members/singles/6/nishinonanase.jpg',
      '/images/members/singles/5/nishinonanase.jpg',
      '/images/members/singles/4/nishinonanase.jpg',
      '/images/members/singles/3/nishinonanase.jpg',
      '/images/members/singles/2/nishinonanase.jpg',
      '/images/members/singles/1/nishinonanase.jpg',
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
    expect(nanaseSingleProfileImages[15].url).toEqual(
      '/images/members/singles/15/nishinonanase.jpg'
    );
  });

  test('should use the closest image if no corresponding file exists', () => {
    expect(nanaseSingleProfileImages[16].url).toEqual(
      '/images/members/singles/15/nishinonanase.jpg'
    );
    expect(nanaseSingleProfileImages[21].url).toEqual(
      '/images/members/singles/20/nishinonanase.jpg'
    );
    expect(nanaseSingleProfileImages[23].url).toEqual(
      '/images/members/singles/22/nishinonanase.jpg'
    );
    expect(nanaseSingleProfileImages[25].url).toEqual(
      '/images/members/others/nishinonanase_2019-09-21.jpg'
    );
    expect(nanaseAlbumProfileImages['U'].url).toEqual(
      '/images/members/singles/17/nishinonanase.jpg'
    );
    expect(nanaseDigitalProfileImages[2].url).toEqual(
      '/images/members/others/nishinonanase_2020-06-11.jpg'
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
        memberName: MemberNameKey.NishinoNanase,
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
        memberName: MemberNameKey.FukagawaMai,
        unitsRawArray,
      })
    ).toEqual([]);
  });
});
