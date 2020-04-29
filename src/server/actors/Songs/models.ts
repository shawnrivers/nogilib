import { MemberName } from "server/editor/constants/names";
import { FukujinType, SongType } from "server/utils/constants";

export type Creators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

export type Performers = {
  center: MemberName[];
  fukujin: FukujinType | MemberName[];
  solo: MemberName | "";
  unit: string;
};

export type Formations = {
  firstRow: MemberName[];
  secondRow: MemberName[];
  thirdRow: MemberName[];
  fourthRow: MemberName[];
};

export type SongRaw = {
  title: string;
  musicVideo: string;
  type: SongType;
  creators: Creators;
  performers: Performers;
  formations: Formations;
};

export type SongResult = SongRaw & {
  key: string;
  single: {
    title: string;
    number: string;
  };
  albums: {
    title: string;
    number: string;
  }[];
  artwork: string;
  performersTag: {
    name: string;
    singleNumber: string;
  };
};

export type SongsRawArray = SongRaw[];
export type SongsRawObj = { [key: string]: SongRaw };
export type SongsResultArray = SongResult[];
