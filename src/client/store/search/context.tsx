import * as React from 'react';
import { SearchState, getInitialSearchState, searchReducer } from './reducer';

type Context = SearchState & {
  setSearchQuery(searchQuery: string): void;
};

export const SearchContext = React.createContext<Context>({
  ...getInitialSearchState(),
  setSearchQuery() {
    return;
  },
});

export const SearchContextProvider: React.FC<{
  children?: React.ReactNode;
}> = props => {
  const [state, dispatch] = React.useReducer(
    searchReducer,
    getInitialSearchState()
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
    <SearchContext.Provider
      value={{
        searchQuery: state.searchQuery,
        setSearchQuery,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
