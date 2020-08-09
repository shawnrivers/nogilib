import * as React from 'react';
import { useAppContext } from 'client/hooks/useAppContext';
import { MemberResult } from 'server/actors/Members/models';

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

  const formatMemberName = React.useCallback(
    (
      nameNotations: Pick<
        MemberResult['nameNotations'],
        'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
      >
    ) => {
      switch (language) {
        case 'ja':
          return `${nameNotations.lastName}${nameNotations.firstName}`;
        case 'zh':
          return `${nameNotations.lastName}${nameNotations.firstName}`;
        case 'en':
          return `${nameNotations.lastNameEn} ${nameNotations.firstNameEn}`;
      }
    },
    [language]
  );

  return {
    formatDate,
    formatMemberName,
  };
};
