import { MembersRawArray } from "server/actors/Members/models";
import { FIRST_GEN_MEMBERS } from "server/actors/Members/raw/editors/firstGen";
import { SECOND_GEN_MEMBERS } from "server/actors/Members/raw/editors/secondGen";
import { THIRD_GEN_MEMBERS } from "server/actors/Members/raw/editors/thirdGen";
import { FOURTH_GEN_MEMBERS } from "server/actors/Members/raw/editors/fourthGen";

export const membersRawArray: MembersRawArray = [
  ...FIRST_GEN_MEMBERS,
  ...SECOND_GEN_MEMBERS,
  ...THIRD_GEN_MEMBERS,
  ...FOURTH_GEN_MEMBERS,
];
