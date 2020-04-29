import {
  AlbumRaw,
  AlbumResult,
  AlbumsRawArray,
  AlbumsRawObject,
  AlbumsResultArray,
} from "server/actors/Albums/models";
import * as CdConverters from "server/actors/Cds/converters";
import { rawAlbums } from "server/actors/Albums/raw";
import { arrayToObject } from "utils/arrays";
import { SongsRawObject } from "server/actors/Songs/models";
import { MembersRawObject } from "server/actors/Members/models";

export class Albums {
  private rawDataArray: AlbumsRawArray;
  private rawDataObject: AlbumsRawObject;
  private resultData: AlbumsResultArray;

  public constructor() {
    this.rawDataArray = rawAlbums;
    this.rawDataObject = arrayToObject(rawAlbums, "title");
    this.resultData = [];
  }

  public get rawArray(): AlbumsRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): AlbumsRawObject {
    return this.rawDataObject;
  }

  public get result(): AlbumsResultArray {
    return this.resultData;
  }

  public convertAlbums({
    songsRawObject,
    membersRawObject,
  }: {
    songsRawObject: SongsRawObject;
    membersRawObject: MembersRawObject;
  }): AlbumsResultArray {
    const albumsResult = [];

    for (const albumRaw of this.rawDataArray) {
      albumsResult.push(
        this.convertAlbum({ albumRaw, songsRawObject, membersRawObject })
      );
    }

    this.resultData = albumsResult;
    return albumsResult;
  }

  private convertAlbum({
    albumRaw,
    songsRawObject,
    membersRawObject,
  }: {
    albumRaw: AlbumRaw;
    songsRawObject: SongsRawObject;
    membersRawObject: MembersRawObject;
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
        songsRawObject,
        membersRawObject,
      }),
      previousSingleNumber: albumRaw.previousSingleNumber,
    };
  }
}
