import { TitleKeyArray } from "server/types/commons";
import { arrayToObject } from "utils/arrays";

export enum AlbumTitle {
  Imagaomoideninarumade = "今が思い出になるまで",
  BokudakenokimiUnderBestAlbum = "僕だけの君〜Under Super Best〜",
  Umaretekarahajimetemitayume = "生まれてから初めて見た夢",
  Sorezorenoisu = "それぞれの椅子",
  Toumeinairo = "透明な色",
}

export const AlbumsTitleKeyArray: TitleKeyArray<AlbumTitle> = [
  {
    title: AlbumTitle.Imagaomoideninarumade,
    key: "imagaomoideninarumade",
  },
  {
    title: AlbumTitle.BokudakenokimiUnderBestAlbum,
    key: "bokudakenokimiunderbestalbum",
  },
  {
    title: AlbumTitle.Umaretekarahajimetemitayume,
    key: "umaretekarahajimetemitayume",
  },
  {
    title: AlbumTitle.Sorezorenoisu,
    key: "sorezorenoisu",
  },
  {
    title: AlbumTitle.Toumeinairo,
    key: "toumeinairo",
  },
];

export const ALBUMS = arrayToObject(AlbumsTitleKeyArray, "title");
