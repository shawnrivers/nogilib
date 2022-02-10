import * as React from 'react';
import { SearchPageData } from 'db/src/pages/search';

type SearchQuery = string;
type SearchResults = (
  | SearchPageData['members'][0]
  | SearchPageData['albums'][0]
  | SearchPageData['songs'][0]
)[];

type Context = {
  query: SearchQuery;
  results: SearchResults;
  setQuery(query: SearchQuery): void;
  setResults(results: SearchResults): void;
};

export const SearchContext = React.createContext<Context | undefined>(
  undefined
);

export const SearchContextProvider: React.FC<{
  children?: React.ReactNode;
}> = props => {
  const [query, setQuery] = React.useState<SearchQuery>('');
  const [results, setResults] = React.useState<SearchResults>([]);

  return (
    <SearchContext.Provider
      value={{
        query: query,
        results: results,
        setQuery,
        setResults,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearchQuery = () => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error(
      'useSearchQuery must be used within a <SearchContextProvider>.'
    );
  }
  return context;
};
