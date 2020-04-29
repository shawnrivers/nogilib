import { CdRaw, CdResult } from "server/actors/Cds/models";
import { MemberName } from "server/editor/constants/names";

export type SingleRaw = CdRaw & {
  underMembers: MemberName[];
  behindPerformers: {
    trainees: MemberName[];
    skips: MemberName[];
  };
};

export type SingleResult = CdResult & {
  underMembers: MemberName[];
  behindPerformers: {
    trainees: MemberName[];
    skips: MemberName[];
  };
};

export type SinglesRawArray = SingleRaw[];
export type SinglesRawObject = { [key: string]: SingleRaw };
export type SinglesResultArray = SingleResult[];
