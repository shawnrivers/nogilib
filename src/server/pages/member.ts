import { Members } from 'server/actors/Members';
import { MemberResult } from 'server/actors/Members/models';

export type MemberPageData = {
  name: MemberResult['name'];
  nameNotations: MemberResult['nameNotations'];
  profileImages: MemberResult['profileImages']['gallery'];
  join: MemberResult['join'];
  graduation: MemberResult['graduation'];
  birthday: MemberResult['birthday'];
  height: MemberResult['height'];
  bloodType: MemberResult['bloodType'];
  origin: MemberResult['origin'];
  units: MemberResult['units'];
  glowStickColor: MemberResult['glowStickColor'];
  sites: MemberResult['sites'];
  photoAlbums: MemberResult['photoAlbums'];
  positionsHistory: MemberResult['positionsHistory'];
  positionsCounter: MemberResult['positionsCounter'];
}[];

export function getMemberPageData(members: Members): MemberPageData {
  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
  }

  const resultData = members.result;
  return resultData.map(member => ({
    name: member.name,
    nameNotations: member.nameNotations,
    profileImages: member.profileImages.gallery,
    join: member.join,
    graduation: member.graduation,
    birthday: member.birthday,
    height: member.height,
    bloodType: member.bloodType,
    origin: member.origin,
    units: member.units,
    glowStickColor: member.glowStickColor,
    sites: member.sites,
    photoAlbums: member.photoAlbums,
    positionsHistory: member.positionsHistory,
    positionsCounter: member.positionsCounter,
  }));
}
