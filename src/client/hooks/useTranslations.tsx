import * as React from 'react';
import { useAppContext } from 'client/store/app/useAppContext';
import { DictionaryKey, messages } from 'client/i18n/translations';
import { Language } from 'client/types/language';

const TranslationComponent: React.FC<{
  text: DictionaryKey;
  language: Language;
}> = props => (
  <React.Fragment>
    {messages[props.language][props.text] ?? props.text}
  </React.Fragment>
);

export const useTranslations = (): {
  getTranslation: (text: DictionaryKey) => string;
  Translation: React.FC<{ text: DictionaryKey }>;
} => {
  const { language } = useAppContext();

  const getTranslation = React.useCallback(
    (text: DictionaryKey) => messages[language][text] ?? text,
    [language]
  );
  const Translation = React.memo((props: { text: DictionaryKey }) => (
    <TranslationComponent text={props.text} language={language} />
  ));

  return {
    getTranslation,
    Translation,
  };
};
