import { Site } from "server/types/commons";
import { CdType, FocusPerformersType, SongType } from "server/utils/constants";

export type CdSongRaw = {
  number: number;
  title: string;
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
