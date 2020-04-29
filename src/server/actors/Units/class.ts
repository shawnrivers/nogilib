import {
  UnitRaw,
  UnitResult,
  UnitsRawArray,
  UnitsRawObj,
  UnitsResultArray,
} from "server/actors/Units/models";
import { rawUnits } from "server/editor/units";
import { arrayToObject } from "server/utils/arrays";
import * as UnitConverters from "server/actors/Units/converters";

export class Units {
  private rawDataArray: UnitsRawArray;
  private rawDataObj: UnitsRawObj;
  private resultData: UnitsResultArray;

  public constructor() {
    this.rawDataArray = rawUnits;
    this.rawDataObj = arrayToObject(rawUnits, "name");
    this.resultData = [];
  }

  public get rawArray(): UnitsRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): UnitsRawObj {
    return this.rawDataObj;
  }

  public get result(): UnitsResultArray {
    return this.resultData;
  }

  public convertUnits({ songsArray }: { songsArray: any[] }): UnitsResultArray {
    let unitsResult: UnitsResultArray = [];

    for (const unitRaw of this.rawDataArray) {
      unitsResult.push(this.convertUnit({ unitRaw, songsArray }));
    }

    this.resultData = unitsResult;

    return unitsResult;
  }

  private convertUnit({
    unitRaw,
    songsArray,
  }: {
    unitRaw: UnitRaw;
    songsArray: any[];
  }): UnitResult {
    return {
      name: unitRaw.name,
      members: unitRaw.members,
      type: unitRaw.type,
      description: unitRaw.description,
      songs: UnitConverters.convertUnitSongs({
        songsArray,
        unitName: unitRaw.name,
      }),
    };
  }
}
