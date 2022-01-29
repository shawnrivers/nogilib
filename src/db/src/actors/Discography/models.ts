import { ImageUrl, Site } from 'db/src/types/commons';
import { SongTitle } from 'db/src/actors/Songs/constants/songTitle';
import { SongType } from 'db/src/actors/Songs/types';
import { MemberNameKey } from 'db/src/actors/Members/types';
import { CdType, DiscographyType } from 'db/src/actors/Discography/types';
import { UnitName } from 'db/src/actors/Units/constants/unitName';
import { CdTitle } from 'db/src/actors/Discography/constants/cdTitle';

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

// TODO: Rename to AlbumRaw
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
    url: ImageUrl;
    type: CdType;
  }[];
};

// TODO: Rename to AlbumResult
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
