import * as CdConverters from "server/actors/Cds/converters";
import { MembersRawObject } from "server/actors/Members/models";
import {
  SingleRaw,
  SingleResult,
  SinglesRawArray,
  SinglesRawObject,
  SinglesResultArray,
} from "server/actors/Cds/Singles/models";
import { SongsRawObject } from "server/actors/Songs/models";
import { arrayToObject } from "utils/arrays";

export class Singles {
  private rawDataArray: SinglesRawArray;
  private rawDataObject: SinglesRawObject;
  private resultData: SinglesResultArray;

  public constructor(singlesRawArray: SinglesRawArray) {
    this.rawDataArray = singlesRawArray;
    this.rawDataObject = arrayToObject(singlesRawArray, "title");
    this.resultData = [];
  }

  public get rawArray(): SinglesRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): SinglesRawObject {
    return this.rawDataObject;
  }

  public get result(): SinglesResultArray {
    return this.resultData;
  }

  public convertSingles({
    songsRawObject,
    membersRawObject,
  }: {
    songsRawObject: SongsRawObject;
    membersRawObject: MembersRawObject;
  }): SinglesResultArray {
    const singlesResult = [];

    for (const singleRaw of this.rawDataArray) {
      singlesResult.push(
        this.convertSingle({ singleRaw, songsRawObject, membersRawObject })
      );
    }

    this.resultData = singlesResult;
    return singlesResult;
  }

  private convertSingle({
    singleRaw,
    songsRawObject,
    membersRawObject,
  }: {
    singleRaw: SingleRaw;
    songsRawObject: SongsRawObject;
    membersRawObject: MembersRawObject;
  }): SingleResult {
    return {
      title: singleRaw.title,
      number: singleRaw.number,
      release: singleRaw.release,
      shopping: singleRaw.shopping,
      artworks: CdConverters.convertCdArtworks({
        cdArtworkTypes: singleRaw.artworkTypes,
        cdHasArtworks: singleRaw.hasArtworks,
        cdNumber: singleRaw.number,
        cdKind: "single",
      }),
      songs: CdConverters.convertCdSongs({
        cdSongsRaw: singleRaw.songs,
        songsRawObject,
        membersRawObject,
      }),
      underMembers: singleRaw.underMembers,
      behindPerformers: singleRaw.behindPerformers,
    };
  }
}
