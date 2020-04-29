import { MemberName } from "../constants/names";
import { MembersRawObject } from "server/actors/Members/models";

export const convertPerformerNames = (
  names: MemberName[],
  members: MembersRawObject
): string[] => {
  return names.map(name => {
    const { lastName, firstName } = members[name].nameNotations;
    return lastName + firstName;
  });
};
