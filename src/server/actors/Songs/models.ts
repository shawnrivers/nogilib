import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongType } from 'server/actors/Songs/constants/songType';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import { UnitName } from 'server/actors/Units/constants/unitName';
import { DiscographyType } from 'server/actors/Discography/types';

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
    fukujin: 'row-1' | 'row-1-2' | MemberNameKey[];
    solo: MemberNameKey | '';
    unit: UnitName | '';
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
  artwork: string;
  performersTag: {
    name: string;
    singleNumber: string;
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
