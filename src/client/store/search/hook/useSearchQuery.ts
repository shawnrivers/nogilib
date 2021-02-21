import * as React from 'react';
import {
  searchQueryContext,
  SearchQueryContext,
} from 'client/store/search/context';

export function useSearchQuery(): [
  SearchQueryContext['searchQuery'],
  SearchQueryContext['setSearchQuery']
] {
  const { searchQuery, setSearchQuery } = React.useContext(searchQueryContext);

  return [searchQuery, setSearchQuery];
}
