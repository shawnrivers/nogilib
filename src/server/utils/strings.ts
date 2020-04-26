import { MemberName } from "../editor/constants/names";
import { ResultMembers } from "../models/IMember";

export const convertPerformerNames = (
  names: MemberName[],
  members: ResultMembers
): string[] => {
  return names.map(name => {
    const { lastName, firstName } = members[name].nameNotations;
    return lastName + firstName;
  });
};
