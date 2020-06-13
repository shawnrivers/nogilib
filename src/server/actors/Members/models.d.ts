import { MemberNameKey } from "server/constants/names";
import {
  JoinedGenerationType,
  BloodType,
  GlowStickColorType,
  PhotoAlbumType,
  UnitType,
  PositionType,
} from "server/constants/commons";
import { Site } from "server/types/commons";

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
  }[];
  graduation: {
    isGraduated: boolean;
    graduatedDate: string;
  };
};
export type MemberResult = MemberRaw & {
  profileImage: string;
  singleImages: string[];
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
export type MembersRawObject = { [key: string]: MemberRaw };
export type MembersResultArray = MemberResult[];
