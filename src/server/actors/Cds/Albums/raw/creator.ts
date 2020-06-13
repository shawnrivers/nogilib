import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { AlbumTitle } from "server/actors/Cds/Albums/constants/albumTitles";

type CreateAlbumRawParams = {
  title: AlbumTitle;
  number: AlbumRaw["number"];
  release: AlbumRaw["release"];
  previousSingle: AlbumRaw["previousSingleNumber"];
  cdTypes?: AlbumRaw["artworkTypes"];
  shopping?: AlbumRaw["shopping"];
  songs: Omit<AlbumRaw["songs"][0], "number">[];
};

export const createAlbumRaw = (params: CreateAlbumRawParams): AlbumRaw => {
  return {
    title: params.title,
    number: params.number,
    release: params.release,
    previousSingleNumber: params.previousSingle,
    hasArtworks:
      params.cdTypes !== undefined && params.cdTypes.length > 0 ? true : false,
    artworkTypes: params.cdTypes ?? [],
    shopping: params.shopping ?? [],
    songs: params.songs.map((song, index) => ({
      number: index + 1,
      title: song.title,
      inCdType: song.inCdType,
    })),
  };
};
