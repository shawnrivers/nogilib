import * as React from 'react';
import { SearchContext } from 'client/store/search/context';

export const useSearchQuery = () => React.useContext(SearchContext);
