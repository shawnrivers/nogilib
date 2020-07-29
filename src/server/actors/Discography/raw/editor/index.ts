import { DiscographyRawArray } from 'server/actors/Discography/models';
import { albumsRawArray } from 'server/actors/Discography/raw/editor/albums';
import { singlesRawArray } from 'server/actors/Discography/raw/editor/singles';
import { digitalCdsRawArray } from 'server/actors/Discography/raw/editor/digital';

export const discographyRawArray: DiscographyRawArray = [
  ...singlesRawArray,
  ...albumsRawArray,
  ...digitalCdsRawArray,
];
