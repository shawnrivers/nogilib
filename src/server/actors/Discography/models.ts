import { Site } from 'server/types/commons';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import {
  CdTitle,
  CdType,
  DiscographyType,
} from 'server/actors/Discography/types';
import { UnitName } from 'server/actors/Units/constants/unitName';

export type CdSongRaw = {
  number: number;
  title: SongTitle;
  inCdType: CdType[];
};

export type FocusPerformers =
  | {
      type: 'center' | 'solo' | '';
      members: MemberNameKey[];
    }
  | {
      type: 'unit';
      members: (MemberNameKey | UnitName)[];
    };

export type CdSongResult = CdSongRaw & {
  key: string;
  type: SongType;
  focusPerformers: FocusPerformers;
};

// TODO: Rename to CdRaw
export type DiscographyRaw = {
  title: CdTitle;
  key: string;
  type: DiscographyType;
  number: string;
  release: string;
  hasArtworks: boolean;
  artworkTypes: CdType[];
  shopping: Site[];
  songs: CdSongRaw[];
  underMembers: MemberNameKey[];
  behindPerformers: {
    trainees: MemberNameKey[];
    skips: MemberNameKey[];
  };
  previousSingleNumber: string;
  artworks: {
    url: string;
    type: CdType;
  }[];
};

// TODO: Rename to CdResult
export type DiscographyResult = Pick<
  DiscographyRaw,
  | 'title'
  | 'key'
  | 'type'
  | 'number'
  | 'release'
  | 'shopping'
  | 'underMembers'
  | 'behindPerformers'
  | 'previousSingleNumber'
  | 'artworks'
> & {
  songs: CdSongResult[];
};
export type DiscographyRawArray = DiscographyRaw[];
export type DiscographyRawObject = Record<string, DiscographyRaw>;
export type DiscographyResultArray = DiscographyResult[];
