import * as React from 'react';
import { useAppContext } from 'client/hooks/useAppContext';
import { MemberResult } from 'server/actors/Members/models';
import { getLocalizedNth } from 'client/i18n/utils';

export type NameNotationsForIntl = Pick<
  MemberResult['nameNotations'],
  'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
>;

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
    (nameNotations: NameNotationsForIntl) => {
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

  const formatNth = React.useCallback(
    (
      params: Omit<Parameters<typeof getLocalizedNth>[0], 'language'>
    ): string | null => {
      const { num, unit } = params;
      return getLocalizedNth({ num, unit, language });
    },
    [language]
  );

  return {
    formatDate,
    formatMemberName,
    formatNth,
  };
};
