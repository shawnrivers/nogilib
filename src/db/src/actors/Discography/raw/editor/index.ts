import { DiscographyRawArray } from 'db/src/actors/Discography/models';
import { albumsRawArray } from 'db/src/actors/Discography/raw/editor/albums';
import { singlesRawArray } from 'db/src/actors/Discography/raw/editor/singles';
import { otherCdsRawArray } from 'db/src/actors/Discography/raw/editor/others';

export const discographyRawArray: DiscographyRawArray = [
  ...singlesRawArray,
  ...albumsRawArray,
  ...otherCdsRawArray,
];
