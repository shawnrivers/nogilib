import * as React from 'react';
import { ThemeMode } from 'client/types/themeMode';
import { LOCAL_STORAGE_THEME_MODE_KEY } from 'client/utils/constants';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import { getInitialThemeState } from 'client/store/theme/reducer';

export const useLocalStorageThemeMode = () => {
  const { setTheme } = useThemeContext();

  React.useEffect(() => {
    const initialThemeMode = getInitialThemeState().themeMode;

    const themeMode =
      (localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode) ??
      initialThemeMode;

    setTheme(themeMode);
  }, [setTheme]);
};
