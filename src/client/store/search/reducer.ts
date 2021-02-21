export type SearchQueryState = {
  searchQuery: string;
};

export function getInitialSearchQueryState(): SearchQueryState {
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

export function searchQueryReducer(
  state: SearchQueryState,
  action: Action
): SearchQueryState {
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
