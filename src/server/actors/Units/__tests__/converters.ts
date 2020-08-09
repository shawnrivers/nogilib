import { Songs } from 'server/actors/Songs';
import { songsRawArray } from 'server/actors/Songs/raw';
import { UNIT_NAMES } from 'server/actors/Units/constants/unitName';
import { convertUnitSongs } from 'server/actors/Units/converters';

const songsRawObject = new Songs(songsRawArray).rawObject;

describe('convertUnitSongs', () => {
  test('should return songs when the song performers match the unit', () => {
    const unitName = UNIT_NAMES['さゆりんご軍団'].name;
    const songs = [
      songsRawObject['白米様'],
      songsRawObject['さゆりんご募集中'],
      songsRawObject['無表情'],
      songsRawObject['低体温のキス'],
    ];

    expect(convertUnitSongs({ unitName, songsRawArray: songs })).toEqual([
      '白米様',
      'さゆりんご募集中',
    ]);
  });
});
