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
