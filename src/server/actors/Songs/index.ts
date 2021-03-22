import * as SongConverters from 'server/actors/Songs/converters';
import {
  SongRaw,
  SongResult,
  SongsRawArray,
  SongsRawObject,
  SongsResultArray,
} from 'server/actors/Songs/models';

import { arrayToObject } from 'utils/array';
import {
  DiscographyRawArray,
  DiscographyRawObject,
} from 'server/actors/Discography/models';

export class Songs {
  private rawDataArray: SongsRawArray;
  private rawDataObject: SongsRawObject;
  private resultData: SongsResultArray;
  public isConverted: boolean;

  public constructor(songsRawArray: SongsRawArray) {
    this.rawDataArray = songsRawArray;
    this.rawDataObject = arrayToObject(songsRawArray, 'title');
    this.resultData = [];
    this.isConverted = false;
  }

  public get rawArray(): SongsRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): SongsRawObject {
    return this.rawDataObject;
  }

  public get result(): SongsResultArray {
    return this.resultData;
  }

  public convertSongs(params: {
    singlesRawArray: DiscographyRawArray;
    singlesRawObject: DiscographyRawObject;
    albumsRawArray: DiscographyRawArray;
    albumsRawObject: DiscographyRawObject;
    otherCdsRawArray: DiscographyRawArray;
    otherCdsRawObject: DiscographyRawObject;
  }): SongsResultArray {
    const {
      singlesRawArray,
      albumsRawArray,
      singlesRawObject,
      albumsRawObject,
      otherCdsRawArray,
      otherCdsRawObject,
    } = params;

    const songsResult = [];

    for (const songRaw of this.rawDataArray) {
      songsResult.push(
        this.convertSong({
          songRaw,
          singlesRawArray,
          albumsRawArray,
          singlesRawObject,
          albumsRawObject,
          otherCdsRawArray,
          otherCdsRawObject,
        })
      );
    }

    this.resultData = songsResult;
    this.isConverted = true;
    return songsResult;
  }

  private convertSong(params: {
    songRaw: SongRaw;
    singlesRawArray: DiscographyRawArray;
    singlesRawObject: DiscographyRawObject;
    albumsRawArray: DiscographyRawArray;
    albumsRawObject: DiscographyRawObject;
    otherCdsRawArray: DiscographyRawArray;
    otherCdsRawObject: DiscographyRawObject;
  }): SongResult {
    const {
      songRaw,
      singlesRawArray,
      albumsRawArray,
      singlesRawObject,
      albumsRawObject,
      otherCdsRawArray,
      otherCdsRawObject,
    } = params;

    const songSingleResult = SongConverters.convertSongSingle({
      songTitle: songRaw.title,
      singlesRawArray,
    });
    const songAlbumsResult = SongConverters.convertSongAlbums({
      songTitle: songRaw.title,
      albumsRawArray,
    });
    const songOtherCdsResult = SongConverters.convertSongOtherCds({
      songTitle: songRaw.title,
      otherCdsRawArray,
    });

    return {
      title: songRaw.title,
      key: songRaw.key,
      single: songSingleResult,
      albums: songAlbumsResult,
      otherCds: songOtherCdsResult,
      artwork: SongConverters.convertSongArtwork({
        songTitle: songRaw.title,
        songSingleResult,
        songAlbumsResult,
        songOtherCdsResult,
        singlesRawObject,
        albumsRawObject,
        otherCdsRawObject,
      }),
      musicVideo: songRaw.musicVideo,
      type: SongConverters.convertSongType(songRaw.type),
      creators: songRaw.creators,
      performers: songRaw.performers,
      performersTag: SongConverters.convertSongPerformersTag({
        songType: songRaw.type,
        songSingleResult,
        songAlbumsResult,
        songOtherCdsResult,
        songPerformers: songRaw.performers,
        albumsRawObject,
        otherCdsRawObject,
      }),
      formations: songRaw.formations,
    };
  }
}
