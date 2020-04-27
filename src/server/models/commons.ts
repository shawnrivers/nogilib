import { CdType, FocusPerformersType, SongType } from "../utils/constants";

export type Site = {
  title: string;
  url: string;
};

export type CdArtwork = {
  large: string;
  medium: string;
  small: string;
};

export type RawCdSong = {
  number: number;
  title: string;
  inCdType: CdType[];
};

export type RawCd = {
  title: string;
  number: string;
  release: string;
  hasArtworks: boolean;
  artworkTypes: CdType[];
  shopping: Site[];
  songs: RawCdSong[];
};

export type ResultCdSong = {
  number: number;
  title: string;
  key: string;
  inCdType: CdType[];
  type: SongType;
  artwork: CdArtwork;
  focusPerformers: {
    type: FocusPerformersType;
    name: string[];
  };
};

export type ResultCd = {
  title: string;
  number: string;
  release: string;
  artworks: {
    [type: string]: CdArtwork;
  };
  shopping: Site[];
  songs: ResultCdSong[];
};

export type CdResponse = Omit<ResultCd, "artworks"> & {
  artworks: CdArtwork[];
};

export type ResultCdForSingleTemp = ResultCd & {
  hasArtworks: boolean;
};
