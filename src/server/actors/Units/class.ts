import { MemberName } from "server/editor/constants/names";
import { UnitType, SongType } from "server/utils/constants";
import { rawUnits } from "server/editor/units";
import { arrayToObject } from "server/utils/arrays";

type UnitRaw = {
  name: string;
  members: MemberName[];
  type: UnitType;
  description: string;
};
type UnitResult = UnitRaw & {
  songs: string[];
};

export type UnitsRawObj = {
  [key: string]: UnitRaw;
};
export type UnitsRawArray = UnitRaw[];
export type UnitsResultArray = UnitResult[];

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
      songs: this.convertUnitSongs({ songsArray, unitName: unitRaw.name }),
    };
  }

  private convertUnitSongs({
    unitName,
    songsArray,
  }: {
    unitName: string;
    songsArray: any[];
  }): UnitResult["songs"] {
    let unitSongs: string[] = [];

    for (const song of songsArray) {
      if (song.type === SongType.Unit && song.performers.unit === unitName) {
        unitSongs.push(song.title);
      }
    }

    return unitSongs;
  }
}
