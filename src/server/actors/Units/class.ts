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

type UnitResult = {
  name: string;
  members: MemberName[];
  type: UnitType;
  songs: string[];
  description: string;
};

export type UnitsRawObj = {
  [key: string]: UnitRaw;
};
export type UnitsRawArray = UnitRaw[];

export type UnitsResultArray = UnitResult[];

export class UnitsConverter {
  private rawDataObj: UnitsRawObj;
  private rawDataArray: UnitsRawArray;
  private resultData: UnitsResultArray;

  public constructor(songsArray: any[]) {
    this.rawDataObj = arrayToObject(rawUnits, "name");
    this.rawDataArray = rawUnits;
    this.resultData = this.convertUnits({
      unitsRawArray: this.rawDataArray,
      songsArray,
    });
  }

  public getRawArray(): UnitsRawArray {
    return this.rawDataArray;
  }

  public getRawObject(): UnitsRawObj {
    return this.rawDataObj;
  }

  public getResult(): UnitsResultArray {
    return this.resultData;
  }

  private convertUnits({
    unitsRawArray,
    songsArray,
  }: {
    unitsRawArray: UnitsRawArray;
    songsArray: any[];
  }): UnitsResultArray {
    let unitsResult: UnitsResultArray = [];

    for (const unitRaw of unitsRawArray) {
      unitsResult.push(this.convertUnit({ unitRaw, songsArray }));
    }

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
  }): string[] {
    let unitSongs: string[] = [];

    for (const song of songsArray) {
      if (song.type === SongType.Unit && song.performers.unit === unitName) {
        unitSongs.push(song.title);
      }
    }

    return unitSongs;
  }
}
