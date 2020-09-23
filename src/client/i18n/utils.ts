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
  language: Language;
}): string | null {
  const { num, unit, language } = params;

  if (isNumberCountable(num)) {
    switch (language) {
      case 'ja':
        return `${num}${COUNTER_TRANSLATIONS[unit][language]}目`;
      case 'zh':
        return `第${num}${COUNTER_TRANSLATIONS[unit][language]}`;
      case 'en':
        return [toNth(num), COUNTER_TRANSLATIONS[unit][language]]
          .filter(element => element !== '')
          .join(' ');
    }
  } else {
    return null;
  }
}

export function getLocalizedWords(params: {
  words: string[];
  language: Language;
}): string {
  const { words, language } = params;

  if (language === 'en') {
    return words.join(' ');
  } else {
    return words.join('');
  }
}
