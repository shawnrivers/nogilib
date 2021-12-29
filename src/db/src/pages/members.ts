import { Members } from 'db/src/actors/Members';
import { MemberResult } from 'db/src/actors/Members/models';

export type MembersPageData = {
  name: MemberResult['name'];
  nameNotations: MemberResult['nameNotations'];
  join: MemberResult['join'];
  graduation: MemberResult['graduation'];
  profileImage: MemberResult['profileImages']['gallery'][0];
}[];

export function getMembersPageData(members: Members): MembersPageData {
  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
  }

  return members.result.map(member => ({
    name: member.name,
    nameNotations: member.nameNotations,
    join: member.join,
    graduation: member.graduation,
    profileImage: member.profileImages.gallery[0],
  }));
}
