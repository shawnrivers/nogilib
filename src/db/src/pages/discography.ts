import { Discography } from 'db/src/actors/Discography';
import { DiscographyResult } from 'db/src/actors/Discography/models';

export type DiscographyPageData = {
  title: DiscographyResult['title'];
  key: DiscographyResult['key'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artwork: DiscographyResult['artworks'][0]['url'];
  release: DiscographyResult['release'];
}[];

export function getDiscographyPageData(
  discography: Discography
): DiscographyPageData {
  if (!discography.isConverted) {
    throw new Error('Please convert Discography data at first.');
  }

  return discography.result.map(item => ({
    title: item.title,
    key: item.key,
    type: item.type,
    number: item.number,
    artwork: item.artworks[0].url,
    release: item.release,
  }));
}
