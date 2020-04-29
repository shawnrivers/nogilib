import { MemberName } from "../editor/constants/names";
import { UnitType } from "../constants/commons";

export type RawUnit = {
  name: string;
  members: MemberName[];
  type: UnitType;
  description: string;
};

export type ResultUnit = {
  name: string;
  members: MemberName[];
  type: UnitType;
  songs: string[];
  description: string;
};

export type ResultUnits = {
  [name: string]: ResultUnit;
};
