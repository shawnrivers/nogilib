import { Site } from 'server/types/commons';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export type FocusPerformersType = 'center' | 'solo' | 'unit' | '';

export type CdType = 'A' | 'B' | 'C' | 'D' | 'T' | 'L' | 'L1' | 'L2';

export type CdSongRaw = {
  number: number;
  title: SongTitle;
  inCdType: CdType[];
};

export type CdSongResult = CdSongRaw & {
  key: string;
  type: SongType;
  focusPerformers: {
    type: FocusPerformersType;
    name: string[];
  };
};

// TODO: Rename to CdRaw
export type DiscographyRaw = {
  title: string;
  type: 'single' | 'album' | 'other';
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
};

// TODO: Rename to CdResult
export type DiscographyResult = Pick<
  DiscographyRaw,
  | 'title'
  | 'type'
  | 'number'
  | 'release'
  | 'shopping'
  | 'underMembers'
  | 'behindPerformers'
  | 'previousSingleNumber'
> & {
  artworks: string[];
  songs: CdSongResult[];
};
export type DiscographyRawArray = DiscographyRaw[];
export type DiscographyRawObject = Record<string, DiscographyRaw>;
export type DiscographyResultArray = DiscographyResult[];
