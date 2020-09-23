import { BloodType } from 'server/actors/Members/constants/bloodType';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { JoinedGenerationType } from 'server/actors/Members/constants/joinedGeneration';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { PhotoAlbumType } from 'server/actors/Members/constants/photoAlbum';
import { PositionType } from 'server/actors/Members/constants/position';
import { UnitType } from 'server/actors/Units/constants/unitType';
import { Site } from 'server/types/commons';

export type MemberRaw = {
  name: MemberNameKey;
  nameNotations: {
    firstName: string;
    lastName: string;
    firstNameFurigana: string;
    lastNameFurigana: string;
    firstNameEn: string;
    lastNameEn: string;
  };
  glowStickColor: {
    left: GlowStickColorType;
    right: GlowStickColorType;
  };
  join: JoinedGenerationType;
  birthday: string;
  height: number;
  bloodType: BloodType;
  origin: string;
  sites: Site[];
  photoAlbums: {
    title: string;
    release: string;
    type: PhotoAlbumType;
    sites: Site[];
    cover: string;
  }[];
  graduation: {
    isGraduated: boolean;
    graduatedDate: string;
  };
};

export type DiscographyProfileImage = {
  url: string;
  number: string;
};

export type ProfileImages = {
  gallery: string[];
  singles: DiscographyProfileImage[];
  albums: DiscographyProfileImage[];
  digital: DiscographyProfileImage[];
};

export type MemberResult = MemberRaw & {
  profileImage: string;
  singleImages: string[];
  profileImages: ProfileImages;
  units: {
    name: string;
    type: UnitType;
  }[];
  positionsHistory: {
    singleNumber: string;
    position: PositionType;
  }[];
  positionsCounter: {
    center: number;
    fukujin: number;
    selected: number;
    under: number;
  };
};

export type MembersRawArray = MemberRaw[];
export type MembersRawObject = Record<MemberNameKey, MemberRaw>;
export type MembersResultArray = MemberResult[];
