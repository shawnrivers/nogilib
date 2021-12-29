import { DiscographyPageData } from 'db/src/pages/discography';

export async function getDiscographyData(): Promise<DiscographyPageData> {
  return (await import('db/result/discography.json'))
    .default as DiscographyPageData;
}
