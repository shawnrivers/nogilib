import { SINGLE_SONGS } from 'db/src/actors/Songs/raw/editor/singles';
import { OTHER_SONGS } from 'db/src/actors/Songs/raw/editor/others';
import { ALBUM_SONGS } from 'db/src/actors/Songs/raw/editor/albums';
import { SongsRawArray } from 'db/src/actors/Songs/models';

export const songsRawArray: SongsRawArray = [
  ...SINGLE_SONGS,
  ...ALBUM_SONGS,
  ...OTHER_SONGS,
];
