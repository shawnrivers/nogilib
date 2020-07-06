import * as CdConverters from 'server/actors/Discography/converters';
import { MembersRawObject } from 'server/actors/Members/models';
import { SongsRawObject } from 'server/actors/Songs/models';
import { arrayToObject } from 'utils/arrays';
import {
  DiscographyRawArray,
  DiscographyRawObject,
  DiscographyResultArray,
  DiscographyRaw,
  DiscographyResult,
} from 'server/actors/Discography/models';

export class Discography {
  private rawDataArray: DiscographyRawArray;
  private rawDataObject: DiscographyRawObject;
  private resultData: DiscographyResultArray;

  public constructor(discographyRawArray: DiscographyRawArray) {
    this.rawDataArray = discographyRawArray;
    this.rawDataObject = arrayToObject(discographyRawArray, 'title');
    this.resultData = [];
  }

  public get rawArray(): DiscographyRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): DiscographyRawObject {
    return this.rawDataObject;
  }

  public get result(): DiscographyResultArray {
    return this.resultData;
  }

  public convertDiscography({
    songsRawObject,
    membersRawObject,
  }: {
    songsRawObject: SongsRawObject;
    membersRawObject: MembersRawObject;
  }): DiscographyResultArray {
    const discographyResult = [];

    for (const cdRaw of this.rawDataArray) {
      discographyResult.push(
        this.convertCd({ cdRaw, songsRawObject, membersRawObject })
      );
    }

    this.resultData = discographyResult;
    return discographyResult;
  }

  private convertCd({
    cdRaw,
    songsRawObject,
    membersRawObject,
  }: {
    cdRaw: DiscographyRaw;
    songsRawObject: SongsRawObject;
    membersRawObject: MembersRawObject;
  }): DiscographyResult {
    return {
      title: cdRaw.title,
      type: cdRaw.type,
      number: cdRaw.number,
      release: cdRaw.release,
      shopping: cdRaw.shopping,
      artworks: CdConverters.convertCdArtworks({
        cdArtworkTypes: cdRaw.artworkTypes,
        cdHasArtworks: cdRaw.hasArtworks,
        cdNumber: cdRaw.number,
        cdKind: cdRaw.type,
      }),
      songs: CdConverters.convertCdSongs({
        cdSongsRaw: cdRaw.songs,
        songsRawObject,
        membersRawObject,
      }),
      underMembers: cdRaw.underMembers,
      behindPerformers: cdRaw.behindPerformers,
      previousSingleNumber: cdRaw.previousSingleNumber,
    };
  }
}
