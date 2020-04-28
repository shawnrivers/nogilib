import { MemberName } from "../editor/constants/names";
import {
  BloodType,
  GlowStickColorType,
  JoinedGenerationType,
  PhotoAlbumType,
  PositionType,
  UnitType,
} from "../utils/constants";
import { Site } from "./commons";

type NameNotations = {
  firstName: string;
  lastName: string;
  firstNameFurigana: string;
  lastNameFurigana: string;
  firstNameEn: string;
  lastNameEn: string;
};

type GlowStickColor = {
  left: GlowStickColorType;
  right: GlowStickColorType;
};

type PhotoAlbum = {
  title: string;
  release: string;
  type: PhotoAlbumType;
  shopping: Site[];
};

type Graduation = {
  isGraduated: boolean;
  graduatedDate: string;
};

export type RawMember = {
  name: MemberName;
  nameNotations: NameNotations;
  glowStickColor: GlowStickColor;
  join: JoinedGenerationType;
  birthday: string;
  height: number;
  bloodType: BloodType;
  origin: string;
  sites: Site[];
  photoAlbums: PhotoAlbum[];
  graduation: Graduation;
};

export type ResultMember = {
  name: MemberName;
  nameNotations: NameNotations;
  glowStickColor: GlowStickColor;
  profileImage: string;
  singleImages: string[];
  join: JoinedGenerationType;
  birthday: string;
  height: number;
  bloodType: BloodType;
  origin: string;
  sites: Site[];
  photoAlbums: PhotoAlbum[];
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
  graduation: Graduation;
};

export type ResultMembers = {
  [name: string]: ResultMember;
};
