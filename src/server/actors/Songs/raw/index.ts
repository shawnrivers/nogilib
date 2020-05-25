import { SINGLE_SONGS } from "server/actors/Songs/raw/editors/singles";
import { OTHER_SONGS } from "server/actors/Songs/raw/editors/others";
import { ALBUM_SONGS } from "server/actors/Songs/raw/editors";
import { SongsRawArray } from "server/actors/Songs/models";

export const songsRawArray: SongsRawArray = [
  ...SINGLE_SONGS,
  ...ALBUM_SONGS,
  ...OTHER_SONGS,
];
