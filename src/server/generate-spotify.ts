import { discographyRawArray } from 'server/actors/Discography/raw/editor';
import { songsRawArray } from 'server/actors/Songs/raw';
import { generateSpotifyIds } from 'server/actors/Spotify';

generateSpotifyIds(discographyRawArray, songsRawArray, {
  batchSize: 20,
  timeout: 2000,
});
