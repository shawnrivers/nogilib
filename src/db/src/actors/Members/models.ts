import {
  BloodType,
  Generation,
  Position,
  PhotoAlbumType,
  GlowStickColor,
  MemberNameKey,
} from 'db/src/actors/Members/types';
import { UnitType } from 'db/src/actors/Units/types';
import { ImageUrl, Site } from 'db/src/types/commons';

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
    left: GlowStickColor;
    right: GlowStickColor;
  };
  join: Generation;
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
    cover: ImageUrl;
  }[];
  graduation: {
    isGraduated: boolean;
    graduatedDate: string;
  };
};

export type DiscographyProfileImage = {
  url: ImageUrl;
  number: string;
};

export type ProfileImages = {
  gallery: ImageUrl[];
  singles: DiscographyProfileImage[];
  albums: DiscographyProfileImage[];
  digital: DiscographyProfileImage[];
};

export type MemberResult = MemberRaw & {
  profileImages: ProfileImages;
  units: {
    name: string;
    type: UnitType;
  }[];
  positionsHistory: {
    singleNumber: string;
    position: Position;
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
export type MembersResultObject = Record<MemberNameKey, MemberResult>;
