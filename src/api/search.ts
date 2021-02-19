import { SearchPageData } from 'server/pages/search';

export async function getSearchData(): Promise<SearchPageData> {
  return (await import('data/search.json')).default[0] as SearchPageData;
}
