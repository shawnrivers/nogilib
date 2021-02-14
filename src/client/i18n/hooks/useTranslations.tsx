import * as React from 'react';
import { useRouter } from 'next/router';
import { DictionaryKey, messages } from 'client/i18n/translations';
import { isDefinedLanguage } from 'client/i18n/utils';

const TranslationComponent: React.FC<{
  text: DictionaryKey;
  locale: string | undefined;
}> = props => {
  return isDefinedLanguage(props.locale) ? (
    <>{messages[props.locale][props.text] ?? props.text}</>
  ) : (
    <>{props.text}</>
  );
};

export const useTranslations = (): {
  getTranslation: (text: DictionaryKey) => string;
  Translation: React.FC<{ text: DictionaryKey }>;
} => {
  const { locale } = useRouter();

  const getTranslation = React.useCallback(
    (text: DictionaryKey) => {
      if (isDefinedLanguage(locale)) {
        return messages[locale][text] ?? text;
      }

      return text;
    },
    [locale]
  );
  const Translation = React.memo((props: { text: DictionaryKey }) => (
    <TranslationComponent text={props.text} locale={locale} />
  ));

  return {
    getTranslation,
    Translation,
  };
};
