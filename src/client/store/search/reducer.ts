export type SearchState = {
  searchQuery: string;
};

export function getInitialSearchState(): SearchState {
  return {
    searchQuery: '',
  };
}

type Action = {
  type: 'UPDATE_SEARCH_QUERY';
  payload: {
    searchQuery: string;
  };
};

export function searchReducer(state: SearchState, action: Action): SearchState {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };
    default:
      return state;
  }
}
