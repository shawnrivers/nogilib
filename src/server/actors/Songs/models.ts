import { MemberName } from "server/constants/names";
import { FukujinType, SongType } from "server/constants/commons";

export type SongRaw = {
  title: string;
  musicVideo: string;
  type: SongType;
  creators: {
    lyrics: string[];
    compose: string[];
    arrange: string[];
    direct: string[];
  };
  performers: {
    center: MemberName[];
    fukujin: FukujinType | MemberName[];
    solo: MemberName | "";
    unit: string;
  };
  formations: {
    firstRow: MemberName[];
    secondRow: MemberName[];
    thirdRow: MemberName[];
    fourthRow: MemberName[];
  };
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
export type SongsRawObject = { [key: string]: SongRaw };
export type SongsResultArray = SongResult[];
