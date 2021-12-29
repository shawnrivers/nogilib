import { SearchPageData } from 'db/src/pages/search';

export async function getSearchData(): Promise<SearchPageData> {
  return (await import('db/result/search.json')).default[0] as SearchPageData;
}
