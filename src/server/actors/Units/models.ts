import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { UnitType } from "server/actors/Units/constants/unitType";

export type UnitRaw = {
  name: string;
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
