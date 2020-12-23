import * as React from 'react';
import { useLanguageContext } from 'client/store/language/hook';
import { ThemeMode } from 'client/types/themeMode';
import {
  Language,
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from 'client/utils/constants';
import { useThemeContext } from 'client/store/theme/hook';

export const useLocalStorageForContext = () => {
  const { setLanguage } = useLanguageContext();
  const { setTheme } = useThemeContext();

  React.useEffect(() => {
    const themeMode = (localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) ??
      'auto') as ThemeMode;
    const language = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) ??
      'ja') as Language;

    setTheme(themeMode);
    setLanguage(language);
  }, [setLanguage, setTheme]);
};
