import { MemberNameKey } from 'server/actors/Members/types';
import { UnitType } from 'server/actors/Units/constants/unitType';
import { UnitName } from 'server/actors/Units/constants/unitName';

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
