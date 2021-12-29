import { SongPageData } from 'db/src/pages/song';

export async function getSongData(): Promise<SongPageData[]> {
  return (await import('db/result/song.json')).default as SongPageData[];
}
