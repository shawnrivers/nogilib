import { MemberNameKey } from 'db/src/actors/Members/types';
import { SongType } from 'db/src/actors/Songs/types';
import { SongTitle } from 'db/src/actors/Songs/constants/songTitle';
import { UnitName } from 'db/src/actors/Units/constants/unitName';
import { DiscographyType } from 'db/src/actors/Discography/types';
import { ImageUrl } from 'db/src/types/commons';

export type PerformersType =
  | { name: 'unit' | 'solo'; single?: string }
  | { name: 'selected' | 'under'; single: string }
  | {
      name: 'generation';
      generation: number;
      single?: string;
    };

export type SongRaw = {
  title: SongTitle;
  musicVideo: string;
  type: SongType;
  creators: {
    lyrics: string[];
    compose: string[];
    arrange: string[];
    direct: string[];
  };
  performers: {
    center: MemberNameKey[];
    fukujin: {
      type: 'row-1' | 'row-1-2' | 'irregular' | null;
      members: MemberNameKey[];
    };
    solo: MemberNameKey | '';
    unit: UnitName | '';
    type?: PerformersType;
  };
  formations: {
    firstRow: MemberNameKey[];
    secondRow: MemberNameKey[];
    thirdRow: MemberNameKey[];
    fourthRow: MemberNameKey[];
  };
};

type InCd = {
  title: string;
  number: string;
};

export type SongResult = SongRaw & {
  key: string;
  single: InCd;
  albums: InCd[];
  otherCds: InCd[];
  artwork: ImageUrl;
  performersTag: {
    name: string;
    album:
      | {
          type: DiscographyType;
          number: string;
        }
      | {
          type: null;
          number: null;
        };
  };
};

export type SongsRawArray = SongRaw[];
export type SongsRawObject = Record<SongTitle, SongRaw>;
export type SongsResultArray = SongResult[];
