import SpotifyWebApi from 'spotify-web-api-node';
import { config as dotEnvConfig } from 'dotenv';
import { SPOTIFY_NOGIZAKA_ARTIST_IDS } from 'server/libs/spotify/const';

dotEnvConfig();

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN ?? '');

export async function getSpotifyAlbum(title: string) {
  try {
    const searchResult = await spotifyApi.searchAlbums(title, { market: 'JP' });
    const foundAlbums =
      searchResult.body.albums?.items.filter(album => {
        const artist = album.artists[0];

        if (SPOTIFY_NOGIZAKA_ARTIST_IDS.includes(artist.id)) {
          return true;
        }

        return false;
      }) ?? [];

    return foundAlbums[0] ?? null;
  } catch (error) {
    console.error(error);

    return null;
  }
}

export async function getSpotifySong(title: string, spotifyAlbumId?: string) {
  try {
    const searchResult = await spotifyApi.searchTracks(title, { market: 'JP' });
    const foundSongs =
      searchResult.body.tracks?.items.filter(track => {
        const artist = track.artists[0];

        if (SPOTIFY_NOGIZAKA_ARTIST_IDS.includes(artist.id)) {
          return true;
        }

        return false;
      }) ?? [];

    if (spotifyAlbumId) {
      const songsWithMatchedAlbum = foundSongs.filter(
        song => song.album.id === spotifyAlbumId
      );

      if (songsWithMatchedAlbum.length > 0) {
        return songsWithMatchedAlbum[0];
      }
    }

    return foundSongs[0] ?? null;
  } catch (error) {
    console.error(error);

    return null;
  }
}
