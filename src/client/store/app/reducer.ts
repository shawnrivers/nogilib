import { ThemeKey } from 'client/styles/colors';
import { ThemeMode } from 'client/types/themeMode';
import { LOCAL_STORAGE_THEME_MODE_KEY } from 'client/utils/constants';

type State = {
  themeMode: ThemeMode;
  themeKey: ThemeKey;
};

const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as
  | ThemeMode
  | undefined;

export const initialState: State = {
  themeMode: localStorageTheme ?? 'auto',
  themeKey: localStorageTheme === 'dark' ? 'dark' : 'light',
};

export enum ActionType {
  SET_THEME_MODE = 'SET_THEME_MODE',
  SET_THEME_KEY = 'SET_THEME',
}

type Action =
  | {
      type: ActionType.SET_THEME_MODE;
      payload: {
        themeMode: ThemeMode;
      };
    }
  | {
      type: ActionType.SET_THEME_KEY;
      payload: {
        themeKey: ThemeKey;
      };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload.themeMode,
      };
    case ActionType.SET_THEME_KEY:
      return {
        ...state,
        themeKey: action.payload.themeKey,
      };
    default:
      return state;
  }
};
