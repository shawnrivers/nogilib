import { Site } from "server/types/commons";
import { SongTitle } from "server/actors/Songs/constants/songTitle";
import { FocusPerformersType } from "server/actors/Cds/constants/focusPerformers";
import { CdType } from "server/actors/Cds/constants/cdType";
import { SongType } from "server/actors/Songs/constants/songType";

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
