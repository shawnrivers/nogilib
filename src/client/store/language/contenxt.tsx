import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useAppContext } from 'client/hooks/useAppContext';
import { messages } from 'client/i18n/translations';

export const LanguageProvider: React.FC = props => {
  const { language } = useAppContext();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {props.children}
    </IntlProvider>
  );
};
