import { RawCd, ResultCd, CdResponse } from "./commons";

export type RawAlbum = RawCd & {
  previousSingleNumber: string;
};

export type ResultAlbum = ResultCd & {
  previousSingleNumber: string;
};

export type ResultAlbums = {
  [title: string]: ResultAlbum;
};

export type AlbumResponse = CdResponse & {
  previousSingleNumber: string;
};

export type AlbumsResponse = AlbumResponse[];
