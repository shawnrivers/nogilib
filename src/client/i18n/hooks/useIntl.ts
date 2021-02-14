import * as React from 'react';
import { useRouter } from 'next/router';
import { MemberResult } from 'server/actors/Members/models';
import {
  getLocalizedNth,
  getLocalizedWords,
  getLocalizedWordsSplitWithCommas,
  isDefinedLanguage,
} from 'client/i18n/utils';

export type NameNotationsForIntl = Pick<
  MemberResult['nameNotations'],
  'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
>;

export const useIntl = () => {
  const { locale } = useRouter();

  const formatDate = React.useCallback(
    (date: string) => {
      const locales =
        locale === 'en' ? 'en-US' : locale === 'ja' ? 'ja-JP' : 'zh-Hans';

      return new Intl.DateTimeFormat(locales, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(date));
    },
    [locale]
  );

  const formatMemberName = React.useCallback(
    (
      nameNotations: NameNotationsForIntl
    ): {
      name: string;
      lang: 'ja' | 'en';
    } => {
      switch (locale) {
        case 'ja':
          return {
            name: `${nameNotations.lastName}${nameNotations.firstName}`,
            lang: 'ja',
          };
        case 'zh':
          return {
            name: `${nameNotations.lastName}${nameNotations.firstName}`,
            lang: 'ja',
          };
        case 'en':
          return {
            name: `${nameNotations.lastNameEn} ${nameNotations.firstNameEn}`,
            lang: 'en',
          };
        default: {
          return {
            name: `${nameNotations.lastName}${nameNotations.firstName}`,
            lang: 'ja',
          };
        }
      }
    },
    [locale]
  );

  const formatNth = React.useCallback(
    (
      params: Omit<Parameters<typeof getLocalizedNth>[0], 'language'>
    ): string | null => {
      return isDefinedLanguage(locale)
        ? getLocalizedNth({ ...params, locale })
        : null;
    },
    [locale]
  );

  const formatWords = React.useCallback(
    (words: Parameters<typeof getLocalizedWords>[0]['words']): string => {
      return getLocalizedWords({ words, locale });
    },
    [locale]
  );

  const formatWordsWithCommas = React.useCallback(
    (
      words: Parameters<typeof getLocalizedWordsSplitWithCommas>[0]['words']
    ): string => {
      return getLocalizedWordsSplitWithCommas({ words, locale });
    },
    [locale]
  );

  return {
    formatDate,
    formatMemberName,
    formatNth,
    formatWords,
    formatWordsWithCommas,
  };
};
