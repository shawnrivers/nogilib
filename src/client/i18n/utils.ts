import { Language } from 'client/types/language';
import { isNumberCountable, toNth } from 'utils/strings';

type CounterUnit = 'cd' | 'row';
const COUNTER_TRANSLATIONS: Record<CounterUnit, Record<Language, string>> = {
  cd: {
    ja: '枚',
    zh: '张',
    en: '',
  },
  row: {
    ja: '列',
    zh: '排',
    en: 'row',
  },
};

export function getLocalizedNth(params: {
  num: string | number;
  unit: CounterUnit;
  locale: string | undefined;
}): string | null {
  const { num, unit, locale } = params;

  if (isNumberCountable(num)) {
    switch (locale) {
      case 'ja':
        return `${num}${COUNTER_TRANSLATIONS[unit].ja}目`;
      case 'zh':
        return `第${num}${COUNTER_TRANSLATIONS[unit].zh}`;
      case 'en':
        return [toNth(num), COUNTER_TRANSLATIONS[unit].en]
          .filter(element => element !== '')
          .join(' ');
      default:
        return `${num}${COUNTER_TRANSLATIONS[unit].ja}目`;
    }
  } else {
    return null;
  }
}

export function getLocalizedWords(params: {
  words: readonly string[];
  locale: string | undefined;
}): string {
  const { words, locale } = params;

  if (locale === 'en') {
    return words.join(' ');
  } else {
    return words.join('');
  }
}

export function getLocalizedWordsSplitWithCommas(params: {
  words: readonly string[];
  locale: string | undefined;
}): string {
  const { words, locale } = params;

  if (locale === 'en') {
    return words.join(', ');
  } else {
    return words.join('、');
  }
}

export function isDefinedLanguage(
  locale: string | undefined
): locale is Language {
  return locale === 'ja' || locale === 'en' || locale === 'zh';
}
