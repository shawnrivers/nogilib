import { arrayToObject } from "client/utils/arrays";
import { rawSongs } from "server/editor/songs";
import {
  SongsRawArray,
  SongsRawObj,
  SongsResultArray,
  SongResult,
  SongRaw,
} from "server/actors/Songs/models";
import { SONGS } from "server/editor/constants/titles";
import * as SongConverters from "server/actors/Songs/converters";

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

  public convertSongs(): SongsResultArray {
    let songsResult: SongsResultArray = [];

    for (const songRaw of this.rawDataArray) {
      songsResult.push(this.convertSong({ songRaw }));
    }

    this.resultData = songsResult;
    return songsResult;
  }

  private convertSong({ songRaw }: { songRaw: SongRaw }): SongResult {
    return {
      title: songRaw.title,
      key: SONGS[songRaw.title].key,
      single: SongConverters.convertSongSingle(),
      albums: SongConverters.convertSongAlbums(),
      artwork: SongConverters.convertSongArtwork(),
      musicVideo: songRaw.musicVideo,
      type: songRaw.type,
      creators: songRaw.creators,
      performers: songRaw.performers,
      performersTag: SongConverters.convertSongPerformersTag(),
      formations: songRaw.formations,
    };
  }
}
