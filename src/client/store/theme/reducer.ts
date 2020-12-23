import { ThemeKey } from 'client/styles/tokens/colors';
import { ThemeMode } from 'client/types/themeMode';

export type ThemeState = {
  themeMode: ThemeMode;
  themeKey: ThemeKey;
};

export const getInitialThemeState = (): ThemeState => ({
  themeMode: 'auto',
  themeKey: 'dark',
});

type Action =
  | {
      type: 'UPDATE_THEME_MODE';
      payload: {
        themeMode: ThemeMode;
      };
    }
  | {
      type: 'UPDATE_THEME_KEY';
      payload: {
        themeKey: ThemeKey;
      };
    };

export const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case 'UPDATE_THEME_MODE':
      return {
        ...state,
        themeMode: action.payload.themeMode,
      };
    case 'UPDATE_THEME_KEY':
      return {
        ...state,
        themeKey: action.payload.themeKey,
      };
    default:
      return state;
  }
};
