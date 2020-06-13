import { MemberNameKey } from "server/actors/Songs/constants";
import { UnitType } from "server/constants/commons";

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
