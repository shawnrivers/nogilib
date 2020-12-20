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
  const nTh = toNth(num);

  if (nTh) {
    return nTh;
  } else {
    if (num === 'U') {
      return 'under';
    }

    return num.toString();
  }
};

export function capitalizeFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

export function capitalizeText(text: string): string {
  return text.split(' ').map(capitalizeFirstLetter).join(' ');
}
