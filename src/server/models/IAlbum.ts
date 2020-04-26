import { RawCd, ResultCd } from "./commons";

export type RawAlbum = RawCd & {
  previousSingleNumber: string;
};

export type ResultAlbum = ResultCd & {
  previousSingleNumber: string;
};

export type ResultAlbums = {
  [title: string]: ResultAlbum;
};
