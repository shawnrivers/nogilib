import {
  CdType,
  FocusPerformersType,
  SongType,
} from "server/constants/commons";
import { Site } from "server/types/commons";
import { SongTitle } from "server/constants/songs";

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

export type CdRaw = {
  title: string;
  number: string;
  release: string;
  hasArtworks: boolean;
  artworkTypes: CdType[];
  shopping: Site[];
  songs: CdSongRaw[];
};
export type CdResult = Pick<
  CdRaw,
  "title" | "number" | "release" | "shopping"
> & {
  artworks: string[];
  songs: CdSongResult[];
};
