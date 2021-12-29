import {
  UnitRaw,
  UnitResult,
  UnitsRawArray,
  UnitsRawObject,
  UnitsResultArray,
} from 'db/src/actors/Units/models';
import { arrayToObject } from 'utils/array';
import * as UnitConverters from 'db/src/actors/Units/converters';
import { SongsRawArray } from 'db/src/actors/Songs/models';

export class Units {
  private rawDataArray: UnitsRawArray;
  private rawDataObject: UnitsRawObject;
  private resultData: UnitsResultArray;

  public constructor(unitsRawArray: UnitsRawArray) {
    this.rawDataArray = unitsRawArray;
    this.rawDataObject = arrayToObject(unitsRawArray, 'name');
    this.resultData = [];
  }

  public get rawArray(): UnitsRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): UnitsRawObject {
    return this.rawDataObject;
  }

  public get result(): UnitsResultArray {
    return this.resultData;
  }

  public convertUnits({
    songsRawArray,
  }: {
    songsRawArray: SongsRawArray;
  }): UnitsResultArray {
    const unitsResult = [];

    for (const unitRaw of this.rawDataArray) {
      unitsResult.push(this.convertUnit({ unitRaw, songsRawArray }));
    }

    this.resultData = unitsResult;

    return unitsResult;
  }

  private convertUnit({
    unitRaw,
    songsRawArray,
  }: {
    unitRaw: UnitRaw;
    songsRawArray: SongsRawArray;
  }): UnitResult {
    return {
      name: unitRaw.name,
      members: unitRaw.members,
      type: unitRaw.type,
      description: unitRaw.description,
      songs: UnitConverters.convertUnitSongs({
        songsRawArray,
        unitName: unitRaw.name,
      }),
    };
  }
}
