import { DiscographyType } from 'server/actors/Discography/types';

type AlbumWithType = {
  type: DiscographyType;
};

export function filterSingles<T extends AlbumWithType>(albums: T[]): T[] {
  return albums.filter(album => album.type === 'single');
}

export function filterAlbums<T extends AlbumWithType>(albums: T[]): T[] {
  return albums.filter(album => album.type === 'album');
}

export function filterOtherCds<T extends AlbumWithType>(albums: T[]): T[] {
  return albums.filter(
    album => album.type !== 'single' && album.type !== 'album'
  );
}
