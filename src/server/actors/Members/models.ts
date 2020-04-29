import { MemberName } from "server/editor/constants/names";
import {
  JoinedGenerationType,
  BloodType,
  GlowStickColorType,
  PhotoAlbumType,
  UnitType,
  PositionType,
} from "server/utils/constants";
import { Site } from "server/models/commons";

export type MemberRaw = {
  name: MemberName;
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
    shopping: Site[];
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
export type MembersRawObj = { [key: string]: MemberRaw };
export type MembersResultArray = MemberResult[];
