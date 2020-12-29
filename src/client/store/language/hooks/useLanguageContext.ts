import * as React from 'react';
import { LanguageContext } from 'client/store/language/context';

export const useLanguageContext = () => {
  return React.useContext(LanguageContext);
};
