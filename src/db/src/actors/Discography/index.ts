import * as CdConverters from 'db/src/actors/Discography/converters';
import { SongsRawObject } from 'db/src/actors/Songs/models';
import { arrayToObject } from 'utils/array';
import {
  DiscographyRawArray,
  DiscographyRawObject,
  DiscographyResultArray,
  DiscographyRaw,
  DiscographyResult,
} from 'db/src/actors/Discography/models';

export class Discography {
  private rawDataArray: DiscographyRawArray;
  private rawDataObject: DiscographyRawObject;
  private singlesRawArray: DiscographyRawArray;
  private singlesRawObject: DiscographyRawObject;
  private albumsRawArray: DiscographyRawArray;
  private albumsRawObject: DiscographyRawObject;
  private otherCdsRawArray: DiscographyRawArray;
  private otherCdsRawObject: DiscographyRawObject;
  private resultData: DiscographyResultArray;
  public isConverted: boolean;

  public constructor(discographyRawArray: DiscographyRawArray) {
    this.rawDataArray = discographyRawArray;
    this.rawDataObject = arrayToObject(discographyRawArray, 'title');
    this.singlesRawArray = discographyRawArray.filter(
      cd => cd.type === 'single'
    );
    this.singlesRawObject = arrayToObject(this.singlesRawArray, 'title');
    this.albumsRawArray = discographyRawArray.filter(cd => cd.type === 'album');
    this.albumsRawObject = arrayToObject(this.albumsRawArray, 'title');
    this.otherCdsRawArray = discographyRawArray.filter(
      cd => cd.type !== 'single' && cd.type !== 'album'
    );
    this.otherCdsRawObject = arrayToObject(this.otherCdsRawArray, 'title');
    this.resultData = [];
    this.isConverted = false;
  }

  public get rawArray(): DiscographyRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): DiscographyRawObject {
    return this.rawDataObject;
  }

  public getSinglesRawArray(): DiscographyRawArray {
    return this.singlesRawArray;
  }

  public getSinglesRawObject(): DiscographyRawObject {
    return this.singlesRawObject;
  }

  public getAlbumsRawArray(): DiscographyRawArray {
    return this.albumsRawArray;
  }

  public getAlbumsRawObject(): DiscographyRawObject {
    return this.albumsRawObject;
  }

  public getOtherCdsRawArray(): DiscographyRawArray {
    return this.otherCdsRawArray;
  }

  public getOtherCdsRawObject(): DiscographyRawObject {
    return this.otherCdsRawObject;
  }

  public get result(): DiscographyResultArray {
    return this.resultData;
  }

  public convertDiscography({
    songsRawObject,
  }: {
    songsRawObject: SongsRawObject;
  }): DiscographyResultArray {
    const discographyResult = [];

    for (const cdRaw of this.rawDataArray) {
      discographyResult.push(this.convertCd({ cdRaw, songsRawObject }));
    }

    this.resultData = discographyResult;
    this.isConverted = true;
    return discographyResult;
  }

  private convertCd({
    cdRaw,
    songsRawObject,
  }: {
    cdRaw: DiscographyRaw;
    songsRawObject: SongsRawObject;
  }): DiscographyResult {
    return {
      title: cdRaw.title,
      key: cdRaw.key,
      type: cdRaw.type,
      number: cdRaw.number,
      release: cdRaw.release,
      shopping: cdRaw.shopping,
      artworks: cdRaw.artworks,
      songs: CdConverters.convertCdSongs({
        cdSongsRaw: cdRaw.songs,
        songsRawObject,
      }),
      underMembers: cdRaw.underMembers,
      behindPerformers: cdRaw.behindPerformers,
      previousSingleNumber: cdRaw.previousSingleNumber,
    };
  }
}
