import { DiscographyPageData } from 'server/pages/discography';

export async function getDiscographyData(): Promise<DiscographyPageData> {
  return (await import('data/discography.json')).default as DiscographyPageData;
}
