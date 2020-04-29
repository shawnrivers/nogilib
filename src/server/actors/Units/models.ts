import { MemberName } from "server/editor/constants/names";
import { UnitType } from "server/utils/constants";

export type UnitRaw = {
  name: string;
  members: MemberName[];
  type: UnitType;
  description: string;
};
export type UnitResult = UnitRaw & {
  songs: string[];
};

export type UnitsRawObj = {
  [key: string]: UnitRaw;
};
export type UnitsRawArray = UnitRaw[];
export type UnitsResultArray = UnitResult[];
