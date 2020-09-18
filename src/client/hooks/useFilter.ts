import { useLocation } from '@reach/router';
import { FILTER_PARAM_KEY } from 'client/utils/urls';

export const useFilter = (): string => {
  const location = useLocation();

  try {
    return new URL(location.href).searchParams.get(FILTER_PARAM_KEY) ?? '';
  } catch (error) {
    return '';
  }
};
