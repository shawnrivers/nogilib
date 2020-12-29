import * as React from 'react';
import { useLanguageContext } from 'client/store/language/hooks/useLanguageContext';
import { getInitialLanguageState } from 'client/store/language/reducer';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'client/store/language/constants/localStorageKey';
import { Language } from 'client/types/language';

export function useLocalStorageLanguage() {
  const { setLanguage } = useLanguageContext();

  React.useEffect(() => {
    const initialLanguage = getInitialLanguageState().language;

    const language =
      (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as Language) ??
      initialLanguage;

    setLanguage(language);
  }, [setLanguage]);
}
