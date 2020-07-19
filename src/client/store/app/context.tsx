import * as React from 'react';
import { ActionType, getInitialState, reducer } from 'client/store/app/reducer';
import { ThemeMode } from 'client/types/themeMode';
import { ThemeKey } from 'client/styles/colors';
import { LOCAL_STORAGE_THEME_MODE_KEY } from 'client/utils/constants';

const getLocalStorageTheme = () =>
  localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode | null;

type Context = {
  themeMode: ThemeMode;
  themeKey: ThemeKey;
  setThemeMode(themeMode: ThemeMode): void;
  setThemeKey(themeKey: ThemeKey): void;
  setTheme(themeMode: ThemeMode): void;
};

export const Context = React.createContext<Context>({
  themeMode: 'auto',
  themeKey: 'light',
  setThemeMode: () => null,
  setThemeKey: () => null,
  setTheme: () => null,
});

export const ContextProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialState(getLocalStorageTheme())
  );

  const setThemeMode = React.useCallback(
    (themeMode: ThemeMode) => {
      dispatch({
        type: ActionType.SET_THEME_MODE,
        payload: { themeMode },
      });
    },
    [dispatch]
  );

  const setThemeKey = React.useCallback(
    (themeKey: ThemeKey) => {
      dispatch({
        type: ActionType.SET_THEME_KEY,
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
        setThemeMode,
        setThemeKey,
        setTheme,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
