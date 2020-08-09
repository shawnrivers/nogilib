import {
  convertSongSingle,
  convertSongAlbums,
  convertSongArtwork,
  convertSongType,
  convertSongPerformersTag,
  convertSongOtherCds,
} from 'server/actors/Songs/converters';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { Songs } from 'server/actors/Songs';
import { songsRawArray } from 'server/actors/Songs/raw';
import { discographyRawArray } from 'server/actors/Discography/raw/editor';
import { Discography } from 'server/actors/Discography';

const songRawObject = new Songs(songsRawArray).rawObject;
const discography = new Discography(discographyRawArray);
const singlesRawArray = discography.getSinglesRawArray();
const singlesRawObject = discography.getSinglesRawObject();
const albumsRawArray = discography.getAlbumsRawArray();
const albumsRawObject = discography.getAlbumsRawObject();
const otherCdsRawArray = discography.getOtherCdsRawArray();
const otherCdsRawObject = discography.getOtherCdsRawObject();

describe('convertSongSingle', () => {
  test('should return single title and number when the single contains this song', () => {
    expect(
      convertSongSingle({
        songTitle: SONGS['しあわせの保護色'].title,
        singlesRawArray,
      })
    ).toEqual({
      title: 'しあわせの保護色',
      number: '25',
    });
  });

  test('should return empty when no any single contains this song', () => {
    expect(
      convertSongSingle({
        songTitle: SONGS['ありがちな恋愛'].title,
        singlesRawArray,
      })
    ).toEqual({
      title: '',
      number: '',
    });
  });
});

describe('convertSongAlbums', () => {
  test('should return album title and number when the album contains this song', () => {
    expect(
      convertSongAlbums({
        songTitle: SONGS['自分のこと'].title,
        albumsRawArray,
      })
    ).toEqual([
      {
        title: '僕だけの君〜Under Super Best〜',
        number: 'U',
      },
    ]);
  });

  test('should return an empty array when no any album contains this song', () => {
    expect(
      convertSongAlbums({
        songTitle: SONGS['ショパンの嘘つき'].title,
        albumsRawArray,
      })
    ).toEqual([]);
  });
});

describe('convertSongArtwork', () => {
  test('should the first matched single artwork', () => {
    const songTitle = SONGS['シンクロニシティ'].title;

    expect(
      convertSongArtwork({
        songTitle,
        songSingleResult: convertSongSingle({ songTitle, singlesRawArray }),
        songAlbumsResult: convertSongAlbums({ songTitle, albumsRawArray }),
        songOtherCdsResult: convertSongOtherCds({
          songTitle,
          otherCdsRawArray,
        }),
        singlesRawObject,
        albumsRawObject,
        otherCdsRawObject,
      })
    ).toEqual('artworks/singles/20/A.jpg');
  });

  test('should return the first matched album artwork when no single matched', () => {
    const songTitle = SONGS['自分のこと'].title;

    expect(
      convertSongArtwork({
        songTitle,
        songSingleResult: convertSongSingle({ songTitle, singlesRawArray }),
        songAlbumsResult: convertSongAlbums({ songTitle, albumsRawArray }),
        songOtherCdsResult: convertSongOtherCds({
          songTitle,
          otherCdsRawArray,
        }),
        singlesRawObject,
        albumsRawObject,
        otherCdsRawObject,
      })
    ).toEqual('artworks/albums/U/L2.jpg');
  });

  test('should return the first matched other CD artwork when no single nor albums matched', () => {
    const songTitle = SONGS['世界中の隣人よ'].title;

    expect(
      convertSongArtwork({
        songTitle,
        songSingleResult: convertSongSingle({ songTitle, singlesRawArray }),
        songAlbumsResult: convertSongAlbums({ songTitle, albumsRawArray }),
        songOtherCdsResult: convertSongOtherCds({
          songTitle,
          otherCdsRawArray,
        }),
        singlesRawObject,
        albumsRawObject,
        otherCdsRawObject,
      })
    ).toEqual('artworks/digital/1/T.jpg');
  });

  test('should return no image artwork when no single nor albums and other CDs matched', () => {
    const songTitle = SONGS['OVERTURE'].title;

    expect(
      convertSongArtwork({
        songTitle,
        songSingleResult: { title: '', number: '' },
        songAlbumsResult: [],
        songOtherCdsResult: [],
        singlesRawObject,
        albumsRawObject,
        otherCdsRawObject,
      })
    ).toEqual('artworks/artwork_no_image.png');
  });
});

describe('convertSongType', () => {
  test('should return "coupling" when song type is "selected"', () => {
    expect(convertSongType(SongType.Selected)).toEqual('coupling');
  });

  test('except the above, should return exact song type', () => {
    expect(convertSongType(SongType.Title)).toEqual('title');
    expect(convertSongType(SongType.Lead)).toEqual('lead');
    expect(convertSongType(SongType.Under)).toEqual('under');
    expect(convertSongType(SongType.FirstGeneration)).toEqual(
      'first generation'
    );
  });
});

describe('convertSongPerformersTag', () => {
  test('should return the single number when song only has a single', () => {
    const song = songRawObject['あの教室'];

    expect(
      convertSongPerformersTag({
        songType: song.type,
        songSingleResult: convertSongSingle({
          songTitle: song.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: song.title,
          albumsRawArray,
        }),
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: '',
      singleNumber: '16',
    });
  });

  test('should return the previous single number of the album when song only has album', () => {
    const song = songRawObject['頬杖をついては眠れない'];

    expect(
      convertSongPerformersTag({
        songType: song.type,
        songSingleResult: convertSongSingle({
          songTitle: song.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: song.title,
          albumsRawArray,
        }),
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: '',
      singleNumber: '22',
    });
  });

  test('should return "selected" when song type is "title"/"selected"', () => {
    const titleSong = songRawObject['しあわせの保護色'];
    const couplingSong = songRawObject['女は一人じゃ眠れない'];

    expect(
      convertSongPerformersTag({
        songType: titleSong.type,
        songSingleResult: convertSongSingle({
          songTitle: titleSong.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: titleSong.title,
          albumsRawArray,
        }),
        songPerformers: titleSong.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'selected',
      singleNumber: '25',
    });

    expect(
      convertSongPerformersTag({
        songType: couplingSong.type,
        songSingleResult: convertSongSingle({
          songTitle: couplingSong.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: couplingSong.title,
          albumsRawArray,
        }),
        songPerformers: couplingSong.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'selected',
      singleNumber: '18',
    });
  });

  test('should return "selected" when song type is "lead"', () => {
    const song = songRawObject['ありがちな恋愛'];

    expect(
      convertSongPerformersTag({
        songType: song.type,
        songSingleResult: convertSongSingle({
          songTitle: song.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: song.title,
          albumsRawArray,
        }),
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'selected',
      singleNumber: '22',
    });
  });

  test('should return "selected" and 12 as the single number when song type is "selected-12"', () => {
    const song = songRawObject['悲しみの忘れ方'];

    expect(
      convertSongPerformersTag({
        songType: song.type,
        songSingleResult: convertSongSingle({
          songTitle: song.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: song.title,
          albumsRawArray,
        }),
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'selected',
      singleNumber: '12',
    });
  });

  test('should return unit name when the song type is unit and the unit has name', () => {
    const song = songRawObject['告白の順番'];

    expect(
      convertSongPerformersTag({
        songType: song.type,
        songSingleResult: convertSongSingle({
          songTitle: song.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: song.title,
          albumsRawArray,
        }),
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: '女子校カルテット',
      singleNumber: '22',
    });
  });

  test('should return "under" when the song type is under', () => {
    const song = songRawObject['シークレットグラフィティー'];

    expect(
      convertSongPerformersTag({
        songType: song.type,
        songSingleResult: convertSongSingle({
          songTitle: song.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: song.title,
          albumsRawArray,
        }),
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'under',
      singleNumber: '15',
    });
  });

  test('should return generation when the song type is generation', () => {
    const firstGenSong = songRawObject['Against'];
    const secondGenSong = songRawObject['アナスターシャ'];
    const thirdGenSong = songRawObject['三番目の風'];
    const fourthGenSong = songRawObject['4番目の光'];

    expect(
      convertSongPerformersTag({
        songType: firstGenSong.type,
        songSingleResult: convertSongSingle({
          songTitle: firstGenSong.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: firstGenSong.title,
          albumsRawArray,
        }),
        songPerformers: firstGenSong.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'first generation',
      singleNumber: '20',
    });

    expect(
      convertSongPerformersTag({
        songType: secondGenSong.type,
        songSingleResult: convertSongSingle({
          songTitle: secondGenSong.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: secondGenSong.title,
          albumsRawArray,
        }),
        songPerformers: secondGenSong.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'second generation',
      singleNumber: '25',
    });

    expect(
      convertSongPerformersTag({
        songType: thirdGenSong.type,
        songSingleResult: convertSongSingle({
          songTitle: thirdGenSong.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: thirdGenSong.title,
          albumsRawArray,
        }),
        songPerformers: thirdGenSong.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'third generation',
      singleNumber: '17',
    });

    expect(
      convertSongPerformersTag({
        songType: fourthGenSong.type,
        songSingleResult: convertSongSingle({
          songTitle: fourthGenSong.title,
          singlesRawArray,
        }),
        songAlbumsResult: convertSongAlbums({
          songTitle: fourthGenSong.title,
          albumsRawArray,
        }),
        songPerformers: fourthGenSong.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: 'fourth generation',
      singleNumber: '23',
    });
  });

  test('should return empty when song type is none', () => {
    const song = songRawObject['世界中の隣人よ'];

    expect(
      convertSongPerformersTag({
        songType: SongType.None,
        songSingleResult: { title: '', number: '' },
        songAlbumsResult: [],
        songPerformers: song.performers,
        albumsRawObject,
      })
    ).toEqual({
      name: '',
      singleNumber: '',
    });
  });
});
