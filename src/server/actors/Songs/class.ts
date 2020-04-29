import { arrayToObject } from "client/utils/arrays";
import {
  SinglesRawArray,
  SinglesRawObject,
} from "server/actors/Singles/models";
import * as SongConverters from "server/actors/Songs/converters";
import {
  SongRaw,
  SongResult,
  SongsRawArray,
  SongsRawObject,
  SongsResultArray,
} from "server/actors/Songs/models";
import { SONGS } from "server/constants/titles";
import { rawSongs } from "server/actors/Songs/raw";
import { AlbumsRawArray, AlbumsRawObject } from "server/actors/Albums/models";

export class Songs {
  private rawDataArray: SongsRawArray;
  private rawDataObject: SongsRawObject;
  private resultData: SongsResultArray;

  public constructor() {
    this.rawDataArray = rawSongs;
    this.rawDataObject = arrayToObject(rawSongs, "title");
    this.resultData = [];
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

  public convertSongs({
    singlesRawArray,
    albumsRawArray,
    singlesRawObject,
    albumsRawObject,
  }: {
    singlesRawArray: SinglesRawArray;
    albumsRawArray: AlbumsRawArray;
    singlesRawObject: SinglesRawObject;
    albumsRawObject: AlbumsRawObject;
  }): SongsResultArray {
    const songsResult = [];

    for (const songRaw of this.rawDataArray) {
      songsResult.push(
        this.convertSong({
          songRaw,
          singlesRawArray,
          albumsRawArray,
          singlesRawObject,
          albumsRawObject,
        })
      );
    }

    this.resultData = songsResult;
    return songsResult;
  }

  private convertSong({
    songRaw,
    singlesRawArray,
    albumsRawArray,
    singlesRawObject,
    albumsRawObject,
  }: {
    songRaw: SongRaw;
    singlesRawArray: SinglesRawArray;
    albumsRawArray: AlbumsRawArray;
    singlesRawObject: SinglesRawObject;
    albumsRawObject: AlbumsRawObject;
  }): SongResult {
    const songSingleResult = SongConverters.convertSongSingle({
      songTitle: songRaw.title,
      singlesRawArray,
    });

    const songAlbumsResult = SongConverters.convertSongAlbums({
      songTitle: songRaw.title,
      albumsRawArray,
    });

    return {
      title: songRaw.title,
      key: SONGS[songRaw.title].key,
      single: songSingleResult,
      albums: songAlbumsResult,
      artwork: SongConverters.convertSongArtwork({
        songTitle: songRaw.title,
        songSingleResult,
        songAlbumsResult,
        singlesRawObject,
        albumsRawObject,
      }),
      musicVideo: songRaw.musicVideo,
      type: SongConverters.convertSongType(songRaw.type),
      creators: songRaw.creators,
      performers: songRaw.performers,
      performersTag: SongConverters.convertSongPerformersTag({
        songType: songRaw.type,
        songSingleResult,
        songAlbumsResult,
        songPerformers: songRaw.performers,
        albumsRawObject,
      }),
      formations: songRaw.formations,
    };
  }
}
