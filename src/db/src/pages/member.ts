import { Members } from 'db/src/actors/Members';
import { MemberResult } from 'db/src/actors/Members/models';
import { sortByDate } from 'utils/sorting';

export type MemberPageData = {
  name: MemberResult['name'];
  nameNotations: MemberResult['nameNotations'];
  profileImage: MemberResult['profileImages']['gallery'][0];
  gallery: MemberResult['profileImages']['gallery'];
  join: MemberResult['join'];
  graduation: MemberResult['graduation'];
  birthday: MemberResult['birthday'];
  height: MemberResult['height'];
  bloodType: MemberResult['bloodType'];
  origin: MemberResult['origin'];
  units: MemberResult['units'][0]['name'][];
  corps: MemberResult['units'][0]['name'][];
  glowStickColor: MemberResult['glowStickColor'];
  sites: MemberResult['sites'];
  photoAlbums: MemberResult['photoAlbums'];
  positionsHistory: MemberResult['positionsHistory'];
  positionsCounter: MemberResult['positionsCounter'];
};

export function getMemberPageData(members: Members): MemberPageData[] {
  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
  }

  return members.result.map(member => ({
    name: member.name,
    nameNotations: member.nameNotations,
    profileImage: member.profileImages.gallery[0],
    gallery: member.profileImages.gallery,
    join: member.join,
    graduation: member.graduation,
    birthday: member.birthday,
    height: member.height,
    bloodType: member.bloodType,
    origin: member.origin,
    units: member.units
      .filter(unit => unit.type === 'unit')
      .map(unit => unit.name),
    corps: member.units
      .filter(unit => unit.type === 'corp')
      .map(unit => unit.name),
    glowStickColor: member.glowStickColor,
    sites: member.sites,
    photoAlbums: sortByDate(member.photoAlbums, 'release'),
    positionsHistory: member.positionsHistory,
    positionsCounter: member.positionsCounter,
  }));
}
