import { SearchPageData } from 'db/src/pages/search';

export type SearchState = {
  query: string;
  results: (
    | SearchPageData['members'][0]
    | SearchPageData['albums'][0]
    | SearchPageData['songs'][0]
  )[];
};

export function getInitialSearchState(): SearchState {
  return {
    query: '',
    results: [],
  };
}

type Action =
  | {
      type: 'UPDATE_SEARCH_QUERY';
      payload: {
        query: string;
      };
    }
  | {
      type: 'UPDATE_SEARCH_RESULTS';
      payload: {
        results: SearchState['results'];
      };
    };

export function searchReducer(state: SearchState, action: Action): SearchState {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return {
        ...state,
        query: action.payload.query,
      };
    case 'UPDATE_SEARCH_RESULTS':
      return {
        ...state,
        results: action.payload.results,
      };
    default:
      return state;
  }
}
