import * as React from 'react';
import { useLanguageContext } from 'client/store/language/hook';
import { ThemeMode } from 'client/types/themeMode';
import {
  Language,
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from 'client/utils/constants';
import { useThemeContext } from 'client/store/theme/hook';
import { getInitialThemeState } from 'client/store/theme/reducer';
import { getInitialLanguageState } from 'client/store/language/reducer';

export const useLocalStorageForContext = () => {
  const { setLanguage } = useLanguageContext();
  const { setTheme } = useThemeContext();

  React.useEffect(() => {
    const initialThemeMode = getInitialThemeState().themeMode;
    const initialLanguage = getInitialLanguageState().language;

    const themeMode =
      (localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode) ??
      initialThemeMode;
    const language =
      (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as Language) ??
      initialLanguage;

    setTheme(themeMode);
    setLanguage(language);
  }, [setLanguage, setTheme]);
};
