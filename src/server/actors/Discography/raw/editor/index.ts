import { DiscographyRawArray } from 'server/actors/Discography/models';
import { albumsRawArray } from 'server/actors/Discography/raw/editor/albums';
import { singlesRawArray } from 'server/actors/Discography/raw/editor/singles';
import { otherCdsRawArray } from 'server/actors/Discography/raw/editor/others';

export const discographyRawArray: DiscographyRawArray = [
  ...singlesRawArray,
  ...albumsRawArray,
  ...otherCdsRawArray,
];
