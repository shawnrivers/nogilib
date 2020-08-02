import * as React from 'react';
import { useAppContext } from 'client/hooks/useAppContext';

export const useIntl = () => {
  const { language } = useAppContext();

  const formatDate = React.useCallback(
    (date: string) => {
      const locales =
        language === 'en' ? 'en-US' : language === 'ja' ? 'ja-JP' : 'zh-Hans';

      return new Intl.DateTimeFormat(locales, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(date));
    },
    [language]
  );

  return {
    formatDate,
  };
};
