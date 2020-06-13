import { CdRaw, CdResult } from "server/actors/Cds/models";
import { MemberNameKey } from "server/actors/Members/constants/memberNames";

export type SingleRaw = CdRaw & {
  underMembers: MemberNameKey[];
  behindPerformers: {
    trainees: MemberNameKey[];
    skips: MemberNameKey[];
  };
};

export type SingleResult = CdResult & {
  underMembers: MemberNameKey[];
  behindPerformers: {
    trainees: MemberNameKey[];
    skips: MemberNameKey[];
  };
};

export type SinglesRawArray = SingleRaw[];
export type SinglesRawObject = { [key: string]: SingleRaw };
export type SinglesResultArray = SingleResult[];
