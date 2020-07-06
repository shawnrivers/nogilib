import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongType } from 'server/actors/Songs/constants/songType';
import { FukujinType } from 'server/actors/Cds/Singles/constants/fukujinType';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';

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
    fukujin: FukujinType | MemberNameKey[];
    solo: MemberNameKey | '';
    unit: string;
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
  };
};

export type SongsRawArray = SongRaw[];
export type SongsRawObject = Record<SongTitle, SongRaw>;
export type SongsResultArray = SongResult[];
