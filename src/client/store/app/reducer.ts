import { ThemeKey } from 'client/styles/colors';
import { ThemeMode } from 'client/types/themeMode';

type State = {
  themeMode: ThemeMode;
  themeKey: ThemeKey;
};

export const getInitialState = (
  localStorageTheme: ThemeMode | null
): State => ({
  themeMode: localStorageTheme ?? 'auto',
  themeKey: localStorageTheme === 'dark' ? 'dark' : 'light',
});

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
