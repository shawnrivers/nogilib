import { MembersRawArray } from 'db/src/actors/Members/models';
import { FIRST_GEN_MEMBERS } from 'db/src/actors/Members/raw/editor/firstGen';
import { SECOND_GEN_MEMBERS } from 'db/src/actors/Members/raw/editor/secondGen';
import { THIRD_GEN_MEMBERS } from 'db/src/actors/Members/raw/editor/thirdGen';
import { FOURTH_GEN_MEMBERS } from 'db/src/actors/Members/raw/editor/fourthGen';

export const membersRawArray: MembersRawArray = [
  ...FIRST_GEN_MEMBERS,
  ...SECOND_GEN_MEMBERS,
  ...THIRD_GEN_MEMBERS,
  ...FOURTH_GEN_MEMBERS,
];
