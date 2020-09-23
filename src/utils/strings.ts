import { Language } from 'client/types/language';

export const getUrlWithTrailingSlash = (url: string): string =>
  url.slice(-1) !== '/' ? url + '/' : url;

export const classNames = (
  ...classNames: (string | undefined)[]
): string | undefined =>
  classNames.reduce((acc, curr) => (curr ? acc + ' ' + curr : acc));

export function isNumberCountable(num: string | number): boolean {
  const number = Number(num);
  return number > 0;
}

export function toNth(num: string | number): string | null {
  if (isNumberCountable(num)) {
    const number = Number(num);

    const remainderByTen = number % 10;
    const remainderByHundred = number % 100;
    if (remainderByTen === 1 && remainderByHundred !== 11) {
      return num + 'st.';
    }
    if (remainderByTen === 2 && remainderByHundred !== 12) {
      return num + 'nd.';
    }
    if (remainderByTen === 3 && remainderByHundred !== 13) {
      return num + 'rd.';
    } else {
      return num + 'th.';
    }
  } else {
    return null;
  }
}

export const toCdNumber = (num: string | number): string => {
  const number = Number(num);

  if (number) {
    const remainderByTen = number % 10;
    const remainderByHundred = number % 100;
    if (remainderByTen === 1 && remainderByHundred !== 11) {
      return num + 'st.';
    }
    if (remainderByTen === 2 && remainderByHundred !== 12) {
      return num + 'nd.';
    }
    if (remainderByTen === 3 && remainderByHundred !== 13) {
      return num + 'rd.';
    } else {
      return num + 'th.';
    }
  } else {
    if (num === 'U') {
      return 'Under';
    }

    return num.toString();
  }
};

export const toNumberWithLocale = (
  num: string,
  language: Language,
  type?: 'cd' | 'row'
): string => {
  let counter = {
    ja: '',
    zh: '',
  };

  switch (type) {
    case 'cd':
      counter = {
        ja: '枚',
        zh: '张',
      };
      break;
    case 'row':
      counter = {
        ja: '列',
        zh: '排',
      };
      break;
    default:
      counter = {
        ja: '枚',
        zh: '张',
      };
      break;
  }

  if (language === 'en') {
    return toCdNumber(num);
  }

  const number = Number(num);

  if (number) {
    if (language === 'ja') {
      return num + counter + '目';
    }
    return '第' + num + counter;
  }

  return 'under';
};

export const commaTextArray = (array: string[]): string =>
  array.reduce((acc, curr) => `${acc}, ${curr}`);
