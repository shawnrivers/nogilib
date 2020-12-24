import { Members } from 'server/actors/Members';
import { MemberResult } from 'server/actors/Members/models';

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

  const resultData = members.result;
  return resultData.map(member => ({
    name: member.name,
    nameNotations: member.nameNotations,
    join: member.join,
    graduation: member.graduation,
    profileImage: member.profileImages.gallery[0],
  }));
}
