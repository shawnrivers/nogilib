import * as React from 'react';
import { getInitialState, reducer } from 'client/store/app/reducer';
import { ThemeMode } from 'client/types/themeMode';
import { ThemeKey } from 'client/styles/colors';
import {
  LOCAL_STORAGE_LANGUAGE,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from 'client/utils/constants';
import { Language } from 'client/types/language';

const getLocalStorageTheme = () =>
  localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode | null;

const getLocalStorageLanguage = () =>
  localStorage.getItem(LOCAL_STORAGE_LANGUAGE) as Language | null;

type Context = {
  themeMode: ThemeMode;
  themeKey: ThemeKey;
  language: Language;
  setThemeMode(themeMode: ThemeMode): void;
  setThemeKey(themeKey: ThemeKey): void;
  setTheme(themeMode: ThemeMode): void;
  setLanguage(language: Language): void;
};

export const Context = React.createContext<Context>({
  themeMode: 'auto',
  themeKey: 'light',
  language: 'ja',
  setThemeMode: () => null,
  setThemeKey: () => null,
  setTheme: () => null,
  setLanguage: () => null,
});

export const AppContextProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialState(getLocalStorageTheme(), getLocalStorageLanguage())
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

  const setLanguage = React.useCallback(
    (language: Language) => {
      dispatch({
        type: 'UPDATE_LANGUAGE',
        payload: {
          language,
        },
      });

      localStorage.setItem(LOCAL_STORAGE_LANGUAGE, language);
    },
    [dispatch]
  );

  const setTheme = React.useCallback(
    (themeMode: ThemeMode) => {
      if (themeMode === 'light' || themeMode === 'dark') {
        setThemeKey(themeMode);
        setThemeMode(themeMode);
        localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, themeMode);
      } else {
        setThemeMode('auto');
        localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, 'auto');
      }
    },
    [setThemeKey, setThemeMode]
  );

  return (
    <Context.Provider
      value={{
        themeMode: state.themeMode,
        themeKey: state.themeKey,
        language: state.language,
        setThemeMode,
        setThemeKey,
        setTheme,
        setLanguage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
