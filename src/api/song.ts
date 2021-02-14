import { SongPageData } from 'server/pages/song';

export async function getSongData(): Promise<SongPageData[]> {
  return (await import('data/song.json')).default as SongPageData[];
}
