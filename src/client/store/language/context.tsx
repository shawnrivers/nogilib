import * as React from 'react';
import {
  getInitialLanguageState,
  languageReducer,
  LanguageState,
} from 'client/store/language/reducer';
import { Language } from 'client/types/language';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'client/store/language/constants/localStorageKey';

type Context = LanguageState & {
  setLanguage(language: Language): void;
};

export const LanguageContext = React.createContext<Context>({
  ...getInitialLanguageState(),
  setLanguage: () => null,
});

export const LanguageContextProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(
    languageReducer,
    getInitialLanguageState()
  );

  const setLanguage = React.useCallback(
    (language: Language) => {
      dispatch({
        type: 'UPDATE_LANGUAGE',
        payload: {
          language,
        },
      });

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
      }
    },
    [dispatch]
  );

  return (
    <LanguageContext.Provider
      value={{
        language: state.language,
        setLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};
