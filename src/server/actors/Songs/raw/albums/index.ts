import { SongRaw } from "server/actors/Songs/models";
import { FIFTH_ALBUM_SONGS } from "server/actors/Songs/raw/albums/5";
import { FIRST_ALBUM_SONGS } from "server/actors/Songs/raw/albums/1";
import { SECOND_ALBUM_SONGS } from "server/actors/Songs/raw/albums/2";
import { THIRD_ALBUM_SONGS } from "server/actors/Songs/raw/albums/3";
import { FOURTH_ALBUM_SONGS } from "server/actors/Songs/raw/albums/4";

export const ALBUM_SONGS: SongRaw[] = [
  ...FIRST_ALBUM_SONGS,
  ...SECOND_ALBUM_SONGS,
  ...THIRD_ALBUM_SONGS,
  ...FOURTH_ALBUM_SONGS,
  ...FIFTH_ALBUM_SONGS,
];
