import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useAppContext } from 'client/hooks/useAppContext';

import en from 'client/i18n/en.json';
import ja from 'client/i18n/ja.json';
import zh from 'client/i18n/zh.json';

const messages = { en, ja, zh };

// let transformedMessage: any = {};

// for (const [langKey, langValue] of Object.entries(messages.en)) {
//   transformedMessage[langKey].en = langValue;
// }
// for (const [langKey, langValue] of Object.entries(messages.ja)) {
//   transformedMessage[langKey].ja = langValue;
// }
// for (const [langKey, langValue] of Object.entries(messages.zh)) {
//   transformedMessage[langKey].zh = langValue;
// }

// console.log(transformedMessage);

export const LanguageProvider: React.FC = props => {
  const { language } = useAppContext();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {props.children}
    </IntlProvider>
  );
};
