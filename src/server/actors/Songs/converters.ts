import { SongResult } from "server/actors/Songs/models";

export const convertSongSingle = (): SongResult["single"] => {
  return { title: "", number: "" };
};

export const convertSongAlbums = (): SongResult["albums"] => {
  return [];
};

export const convertSongArtwork = (): SongResult["artwork"] => {
  return "";
};

export const convertSongPerformersTag = (): SongResult["performersTag"] => {
  return {
    name: "",
    singleNumber: "",
  };
};
