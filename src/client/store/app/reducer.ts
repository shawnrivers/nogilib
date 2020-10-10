import { ThemeKey } from 'client/styles/colors';
import { Language } from 'client/types/language';
import { ThemeMode } from 'client/types/themeMode';

export type State = {
  themeMode: ThemeMode;
  themeKey: ThemeKey;
  language: Language;
};

export const getInitialState = (): State => ({
  themeMode: 'auto',
  themeKey: 'dark',
  language: 'ja',
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
    }
  | {
      type: 'UPDATE_LANGUAGE';
      payload: {
        language: Language;
      };
    };

export const reducer = (state: State, action: Action): State => {
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
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};
