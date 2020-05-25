import { AlbumsRawArray } from "server/actors/Cds/Albums/models";
import { FIRST_ALBUM } from "server/actors/Cds/Albums/raw/editor/1";
import { SECOND_ALBUM } from "server/actors/Cds/Albums/raw/editor/2";
import { THIRD_ALBUM } from "server/actors/Cds/Albums/raw/editor/3";
import { FOURTH_ALBUM } from "server/actors/Cds/Albums/raw/editor/4";
import { UNDER_ALBUM } from "server/actors/Cds/Albums/raw/editor/under";

export const albumsRawArray: AlbumsRawArray = [
  FOURTH_ALBUM,
  UNDER_ALBUM,
  THIRD_ALBUM,
  SECOND_ALBUM,
  FIRST_ALBUM,
];
