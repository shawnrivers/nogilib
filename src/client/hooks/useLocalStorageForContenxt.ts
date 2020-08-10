import * as React from 'react';
import { useAppContext } from 'client/hooks/useAppContext';
import { ThemeMode } from 'client/types/themeMode';
import {
  Language,
  LOCAL_STORAGE_LANGUAGE,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from 'client/utils/constants';

export const useLocalStorageForContext = () => {
  const { setTheme, setLanguage } = useAppContext();

  React.useEffect(() => {
    setTheme(localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode);
    setLanguage(localStorage.getItem(LOCAL_STORAGE_LANGUAGE) as Language);
  }, [setLanguage, setTheme]);
};
