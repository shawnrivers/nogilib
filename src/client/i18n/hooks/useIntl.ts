import * as React from 'react';
import { useRouter } from 'next/router';
import { MemberResult } from 'server/actors/Members/models';
import {
  getLocalizedNth,
  getLocalizedWords,
  getLocalizedWordsSplitWithCommas,
  isDefinedLanguage,
} from 'client/i18n/utils';
import { DiscographyType } from 'server/actors/Discography/types';
import { toCdNumber } from 'utils/string';
import { useTranslations } from 'client/i18n/hooks/useTranslations';

export type NameNotationsForIntl = Pick<
  MemberResult['nameNotations'],
  'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
>;

export const useIntl = () => {
  const { locale } = useRouter();
  const { getTranslation } = useTranslations();

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
        case 'en':
          return {
            name: `${nameNotations.lastNameEn} ${nameNotations.firstNameEn}`,
            lang: 'en',
          };
        case 'ja':
        case 'zh':
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

  const formatAlbumType = React.useCallback(
    (type: DiscographyType, number: string): string =>
      type === 'album' || type === 'single'
        ? `${toCdNumber(number)} ${type}`
        : getTranslation(type),
    [getTranslation]
  );

  return {
    formatDate,
    formatMemberName,
    formatNth,
    formatWords,
    formatWordsWithCommas,
    formatAlbumType,
    locale,
  };
};
