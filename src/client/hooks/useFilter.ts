import { useRouter } from 'next/router';
import { FILTER_PARAM_KEY } from 'client/utils/urls';

export const useFilter = (): string => {
  const location = useRouter();
  const filter = location.query[FILTER_PARAM_KEY];

  if (typeof filter === 'string') {
    return filter;
  }

  return '';
};
