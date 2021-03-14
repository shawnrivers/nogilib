import { CdTitle } from 'server/actors/Discography/constants/cdTitle';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';

export type SpotifyAlbumId = {
  key: string;
  title: CdTitle;
  id: string | null;
};
export type SpotifySongId = {
  key: string;
  title: SongTitle;
  id: string | null;
};

export type SpotifyIds = {
  albums: SpotifyAlbumId[];
  songs: SpotifySongId[];
};
