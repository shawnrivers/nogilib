import { AlbumPageData } from 'server/pages/album';

export async function getAlbumData(): Promise<AlbumPageData[]> {
  return (await import('data/album.json')).default as AlbumPageData[];
}
