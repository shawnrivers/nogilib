import { MemberName } from "../editor/constants/names";
import { FukujinType, SongType } from "../utils/constants";

type Creators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

type Performers = {
  center: MemberName[];
  fukujin: FukujinType | MemberName[];
  solo: MemberName | "";
  unit: string;
};

type Formations = {
  firstRow: MemberName[];
  secondRow: MemberName[];
  thirdRow: MemberName[];
  fourthRow: MemberName[];
};

export type RawSong = {
  title: string;
  musicVideo: string;
  type: SongType;
  creators: Creators;
  performers: Performers;
  formations: Formations;
};

export type ResultSong = {
  title: string;
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
  musicVideo: string;
  type: SongType;
  creators: Creators;
  performers: Performers;
  performersTag: {
    name: string;
    singleNumber: string;
  };
  formations: Formations;
};

export type ResultSongs = {
  [title: string]: ResultSong;
};
