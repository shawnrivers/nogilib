import { MemberNameKey } from 'db/src/actors/Members/types';
import { UnitType } from 'db/src/actors/Units/types';
import { UnitName } from 'db/src/actors/Units/constants/unitName';

export type UnitRaw = {
  name: UnitName;
  members: MemberNameKey[];
  type: UnitType;
  description: string;
};
export type UnitResult = UnitRaw & {
  songs: string[];
};

export type UnitsRawObject = {
  [key: string]: UnitRaw;
};
export type UnitsRawArray = UnitRaw[];
export type UnitsResultArray = UnitResult[];
