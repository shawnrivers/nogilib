import { Members } from 'server/actors/Members';
import { membersRawArray } from 'server/actors/Members/raw';
import { Songs } from 'server/actors/Songs';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { songsRawArray } from 'server/actors/Songs/raw';
import {
  convertCdSongType,
  convertCdSongFocusPerformers,
} from 'server/actors/Discography/converters';

const songsRawObject = new Songs(songsRawArray).rawObject;

describe('convertCdSongType', () => {
  test("should return 'coupling' when cd song title is 'OVERTURE'", () => {
    expect(
      convertCdSongType({
        cdSongTitle: SongTitle.Overture,
        songsRawObject,
      })
    ).toEqual(SongType.Coupling);
  });

  test("should return 'coupling' when cd song type is 'selected'", () => {
    expect(
      convertCdSongType({
        cdSongTitle: songsRawObject['月の大きさ'].title,
        songsRawObject,
      })
    ).toEqual(SongType.Coupling);
  });

  test('except for the above cases, should return the exact cd song type', () => {
    expect(
      convertCdSongType({
        cdSongTitle: songsRawObject['ありがちな恋愛'].title,
        songsRawObject,
      })
    ).toEqual(songsRawObject['ありがちな恋愛'].type);

    expect(
      convertCdSongType({
        cdSongTitle: songsRawObject['しあわせの保護色'].title,
        songsRawObject,
      })
    ).toEqual(songsRawObject['しあわせの保護色'].type);
  });
});

describe('convertCdSongFocusPerformers', () => {
  test("should return empty when the song title is 'OVERTURE'", () => {
    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: SongTitle.Overture,
        songsRawObject,
      })
    ).toEqual({
      type: '',
      members: [],
    });
  });

  test('should return member name when it is a solo song', () => {
    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['じゃあね。'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'solo',
      members: ['shiraishimai'],
    });
  });

  test('should return unit name when it is a unit song and the unit has a name', () => {
    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['白米様'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'unit',
      members: ['さゆりんご軍団'],
    });
  });

  test("should return all centers' names or performers' names when it is a unit song and the unit doesn't have a name", () => {
    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['ここじゃないどこか'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'unit',
      members: ['ikutaerika', 'ikomarina', 'hoshinominami'],
    });

    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['せっかちなかたつむり'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'center',
      members: ['matsumurasayuri'],
    });
  });

  test("should return centers' names when it has centers", () => {
    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['インフルエンサー'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'center',
      members: ['nishinonanase', 'shiraishimai'],
    });

    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['裸足でSummer'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'center',
      members: ['saitouasuka'],
    });

    expect(
      convertCdSongFocusPerformers({
        cdSongTitle: songsRawObject['三番目の風'].title,
        songsRawObject,
      })
    ).toEqual({
      type: 'center',
      members: ['oozonomomoko'],
    });
  });
});
