import * as React from 'react';
import {
  SearchQueryState,
  getInitialSearchQueryState,
  searchQueryReducer,
} from './reducer';

export type SearchQueryContext = SearchQueryState & {
  setSearchQuery(searchQuery: string): void;
};

export const searchQueryContext = React.createContext<SearchQueryContext>({
  ...getInitialSearchQueryState(),
  setSearchQuery() {
    return;
  },
});

export const SearchQueryContextProvider: React.FC<{
  children?: React.ReactNode;
}> = props => {
  const [state, dispatch] = React.useReducer(
    searchQueryReducer,
    getInitialSearchQueryState()
  );

  const setSearchQuery = React.useCallback(
    (searchQuery: string) => {
      dispatch({
        type: 'UPDATE_SEARCH_QUERY',
        payload: { searchQuery },
      });
    },
    [dispatch]
  );

  return (
    <searchQueryContext.Provider
      value={{
        searchQuery: state.searchQuery,
        setSearchQuery,
      }}
    >
      {props.children}
    </searchQueryContext.Provider>
  );
};
