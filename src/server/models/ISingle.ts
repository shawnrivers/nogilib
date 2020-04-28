import { MemberName } from "../editor/constants/names";
import { RawCd, ResultCd, CdResponse } from "./commons";

type BehindPerformers = {
  trainees: MemberName[];
  skips: MemberName[];
};

export type RawSingle = RawCd & {
  underMembers: MemberName[];
  behindPerformers: BehindPerformers;
};

export type ResultSingle = ResultCd & {
  underMembers: MemberName[];
  behindPerformers: BehindPerformers;
};

export type ResultSingles = {
  [title: string]: ResultSingle;
};

export type SingleResponse = CdResponse & {
  underMembers: MemberName[];
  behindPerformers: BehindPerformers;
};

export type SinglesResponse = SingleResponse[];
