import * as React from 'react';
import { SearchState, getInitialSearchState, searchReducer } from './reducer';

type Context = SearchState & {
  setQuery(query: SearchState['query']): void;
  setResults(results: SearchState['results']): void;
};

export const SearchContext = React.createContext<Context>({
  ...getInitialSearchState(),
  setQuery() {
    return;
  },
  setResults() {
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

  const setQuery = React.useCallback(
    (query: SearchState['query']) => {
      dispatch({
        type: 'UPDATE_SEARCH_QUERY',
        payload: { query },
      });
    },
    [dispatch]
  );

  const setResults = React.useCallback(
    (results: SearchState['results']) => {
      dispatch({
        type: 'UPDATE_SEARCH_RESULTS',
        payload: { results },
      });
    },
    [dispatch]
  );

  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        results: state.results,
        setQuery,
        setResults,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
