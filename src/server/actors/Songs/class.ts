import { arrayToObject } from "client/utils/arrays";
import { SinglesRawArray, SinglesRawObj } from "server/actors/Singles/models";
import * as SongConverters from "server/actors/Songs/converters";
import {
  SongRaw,
  SongResult,
  SongsRawArray,
  SongsRawObj,
  SongsResultArray,
} from "server/actors/Songs/models";
import { SONGS } from "server/editor/constants/titles";
import { rawSongs } from "server/editor/songs";
import { AlbumsRawArray, AlbumsRawObj } from "server/actors/Albums/models";

export class Songs {
  private rawDataArray: SongsRawArray;
  private rawDataObj: SongsRawObj;
  private resultData: SongsResultArray;

  public constructor() {
    this.rawDataArray = rawSongs;
    this.rawDataObj = arrayToObject(rawSongs, "title");
    this.resultData = [];
  }

  public get rawArray(): SongsRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): SongsRawObj {
    return this.rawDataObj;
  }

  public get result(): SongsResultArray {
    return this.resultData;
  }

  public convertSongs({
    singlesRawArray,
    albumsRawArray,
    singlesRawObj,
    albumsRawObj,
  }: {
    singlesRawArray: SinglesRawArray;
    albumsRawArray: AlbumsRawArray;
    singlesRawObj: SinglesRawObj;
    albumsRawObj: AlbumsRawObj;
  }): SongsResultArray {
    let songsResult: SongsResultArray = [];

    for (const songRaw of this.rawDataArray) {
      songsResult.push(
        this.convertSong({
          songRaw,
          singlesRawArray,
          albumsRawArray,
          singlesRawObj,
          albumsRawObj,
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
    singlesRawObj,
    albumsRawObj,
  }: {
    songRaw: SongRaw;
    singlesRawArray: SinglesRawArray;
    albumsRawArray: AlbumsRawArray;
    singlesRawObj: SinglesRawObj;
    albumsRawObj: AlbumsRawObj;
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
        singlesRawObj,
        albumsRawObj,
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
        albumsRawObj,
      }),
      formations: songRaw.formations,
    };
  }
}
