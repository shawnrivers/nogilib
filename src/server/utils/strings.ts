import { MemberName } from "../editor/constants/names";
import { MembersRawObj } from "server/actors/Members/models";

export const convertPerformerNames = (
  names: MemberName[],
  members: MembersRawObj
): string[] => {
  return names.map(name => {
    const { lastName, firstName } = members[name].nameNotations;
    return lastName + firstName;
  });
};
