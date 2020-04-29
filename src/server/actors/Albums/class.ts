import {
  AlbumRaw,
  AlbumResult,
  AlbumsRawArray,
  AlbumsRawObj,
  AlbumsResultArray,
} from "server/actors/Albums/models";
import * as CdConverters from "server/actors/Cds/converters";
import { rawAlbums } from "server/editor/albums";
import { arrayToObject } from "server/utils/arrays";
import { SongsRawObj } from "server/actors/Songs/models";
import { MembersRawObj } from "server/actors/Members/models";

export class Albums {
  private rawDataArray: AlbumsRawArray;
  private rawDataObj: AlbumsRawObj;
  private resultData: AlbumsResultArray;

  public constructor() {
    this.rawDataArray = rawAlbums;
    this.rawDataObj = arrayToObject(rawAlbums, "title");
    this.resultData = [];
  }

  public get rawArray(): AlbumsRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): AlbumsRawObj {
    return this.rawDataObj;
  }

  public get result(): AlbumsResultArray {
    return this.resultData;
  }

  public convertAlbums({
    songsRawObj,
    membersRawObj,
  }: {
    songsRawObj: SongsRawObj;
    membersRawObj: MembersRawObj;
  }): AlbumsResultArray {
    const albumsResult = [];

    for (const albumRaw of this.rawDataArray) {
      albumsResult.push(
        this.convertAlbum({ albumRaw, songsRawObj, membersRawObj })
      );
    }

    this.resultData = albumsResult;
    return albumsResult;
  }

  private convertAlbum({
    albumRaw,
    songsRawObj,
    membersRawObj,
  }: {
    albumRaw: AlbumRaw;
    songsRawObj: SongsRawObj;
    membersRawObj: MembersRawObj;
  }): AlbumResult {
    return {
      title: albumRaw.title,
      number: albumRaw.number,
      release: albumRaw.release,
      shopping: albumRaw.shopping,
      artworks: CdConverters.convertCdArtworks({
        cdArtworkTypes: albumRaw.artworkTypes,
        cdHasArtworks: albumRaw.hasArtworks,
        cdNumber: albumRaw.number,
        cdKind: "album",
      }),
      songs: CdConverters.convertCdSongs({
        cdSongsRaw: albumRaw.songs,
        songsRawObj,
        membersRawObj,
      }),
      previousSingleNumber: albumRaw.previousSingleNumber,
    };
  }
}
