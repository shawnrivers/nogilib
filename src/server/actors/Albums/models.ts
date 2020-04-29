import { CdRaw, CdResult } from "server/actors/Cds/models";

export type AlbumRaw = CdRaw & {
  previousSingleNumber: string;
};
export type AlbumResult = CdResult & {
  previousSingleNumber: string;
};

export type AlbumsRawArray = AlbumRaw[];
export type AlbumsRawObject = { [key: string]: AlbumRaw };
export type AlbumsResultArray = AlbumResult[];
