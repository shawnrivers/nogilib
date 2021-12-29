import { AlbumPageData } from 'db/src/pages/album';

export async function getAlbumData(): Promise<AlbumPageData[]> {
  return (await import('db/result/album.json')).default as AlbumPageData[];
}
