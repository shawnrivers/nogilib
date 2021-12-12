export const arrayToObject = <T, K extends keyof T>(
  array: T[],
  keyField: K
): Record<
  T[K] extends string | number | symbol ? T[K] : string | number | symbol,
  T
> => {
  return Object.assign(
    {},
    ...array.map(item => {
      const key = String(item[keyField]);

      return { [key]: item };
    })
  );
};

export const filterDuplicate = <
  T extends string | number | bigint | boolean | symbol
>(
  array: T[]
): T[] => {
  let uniqueList: T[] = [];

  for (const item of array) {
    let isSeen = false;

    for (const seenItem of uniqueList) {
      if (seenItem === item) {
        isSeen = true;
        break;
      }
    }

    if (!isSeen) {
      uniqueList.push(item);
    }
  }

  return uniqueList;
};

const checkIndexParams = (current: number, length: number): void => {
  if (length < 1) {
    throw new Error('Pass a length that is larger than 0');
  }

  if (current > length - 1 || current < 0) {
    throw new Error(
      `Pass a current index that is between ${0} and ${length - 1}`
    );
  }
};

export const getNextIndex = (current: number, length: number): number => {
  checkIndexParams(current, length);
  let nextIndex = current + 1;
  return nextIndex % length;
};

export const getPreviousIndex = (current: number, length: number): number => {
  checkIndexParams(current, length);
  let previousIndex = current - 1;
  return previousIndex >= 0 ? previousIndex % length : length - 1;
};
