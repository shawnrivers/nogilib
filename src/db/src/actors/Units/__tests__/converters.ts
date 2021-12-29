import { Songs } from 'db/src/actors/Songs';
import { songsRawArray } from 'db/src/actors/Songs/raw';
import { convertUnitSongs } from 'db/src/actors/Units/converters';

const songsRawObject = new Songs(songsRawArray).rawObject;

describe('convertUnitSongs', () => {
  test('should return songs when the song performers match the unit', () => {
    const unitName = 'さゆりんご軍団';
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
