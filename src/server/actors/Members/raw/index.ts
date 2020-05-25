import { MembersRawArray } from "server/actors/Members/models";
import { FIRST_GEN_MEMBERS } from "server/actors/Members/raw/generations/1";
import { SECOND_GEN_MEMBERS } from "server/actors/Members/raw/generations/2";
import { THIRD_GEN_MEMBERS } from "server/actors/Members/raw/generations/3";
import { FOURTH_GEN_MEMBERS } from "server/actors/Members/raw/generations/4";

export const membersRawArray: MembersRawArray = [
  ...FIRST_GEN_MEMBERS,
  ...SECOND_GEN_MEMBERS,
  ...THIRD_GEN_MEMBERS,
  ...FOURTH_GEN_MEMBERS,
];
