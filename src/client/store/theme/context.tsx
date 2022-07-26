import * as React from 'react';
import { ThemeMode } from 'client/types/themeMode';
import { ThemeKey } from 'client/styles/tokens/colors';
import { LOCAL_STORAGE_THEME_MODE_KEY } from 'client/utils/constant';
import {
  getInitialThemeState,
  ThemeState,
  themeReducer,
} from 'client/store/theme/reducer';

type Context = ThemeState & {
  setThemeKey(themeKey: ThemeKey): void;
  setTheme(themeMode: ThemeMode): void;
};

export const ThemeContext = React.createContext<Context>({
  ...getInitialThemeState(),
  setThemeKey: () => null,
  setTheme: () => null,
});

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = props => {
  const [state, dispatch] = React.useReducer(
    themeReducer,
    getInitialThemeState()
  );

  const setThemeMode = React.useCallback(
    (themeMode: ThemeMode) => {
      dispatch({
        type: 'UPDATE_THEME_MODE',
        payload: { themeMode },
      });
    },
    [dispatch]
  );

  const setThemeKey = React.useCallback(
    (themeKey: ThemeKey) => {
      dispatch({
        type: 'UPDATE_THEME_KEY',
        payload: { themeKey },
      });
    },
    [dispatch]
  );

  const setTheme = React.useCallback(
    (themeMode: ThemeMode) => {
      if (themeMode === 'light' || themeMode === 'dark') {
        setThemeKey(themeMode);
        setThemeMode(themeMode);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, themeMode);
        }
      } else {
        setThemeMode('auto');
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, 'auto');
        }
      }

      window.__setThemeMode(themeMode);
    },
    [setThemeKey, setThemeMode]
  );

  return (
    <ThemeContext.Provider
      value={{
        themeMode: state.themeMode,
        themeKey: state.themeKey,
        setThemeKey,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
