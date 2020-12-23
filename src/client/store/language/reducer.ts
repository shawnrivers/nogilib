import { Language } from 'client/types/language';

export type LanguageState = {
  language: Language;
};

export const getInitialLanguageState = (): LanguageState => ({
  language: 'en',
});

type Action = {
  type: 'UPDATE_LANGUAGE';
  payload: {
    language: Language;
  };
};

export const languageReducer = (
  state: LanguageState,
  action: Action
): LanguageState => {
  switch (action.type) {
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};
