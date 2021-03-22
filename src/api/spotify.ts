import { SpotifyIds } from 'server/actors/Spotify/models';

export async function loadSpotifyIdsData(): Promise<SpotifyIds> {
  return (await import('data/spotify.json')) as SpotifyIds;
}
