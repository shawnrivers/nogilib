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

export const sortByDate = <T>(
  array: T[],
  keyField: keyof T,
  order: 'asc' | 'desc'
): T[] => {
  return array.slice().sort((itemA, itemB) => {
    return order === 'asc'
      ? new Date(itemA[keyField] as any).getTime() -
          new Date(itemB[keyField] as any).getTime()
      : new Date(itemB[keyField] as any).getTime() -
          new Date(itemA[keyField] as any).getTime();
  });
};

export const sortByJoin = <T>(
  array: T[],
  keyField: keyof T,
  order: 'asc' | 'desc'
): T[] => {
  const joinWeightMap: Record<string, number> = {
    exchange: 100,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
  };

  return array.slice().sort((itemA, itemB) => {
    return order === 'asc'
      ? joinWeightMap[itemA[keyField] as any] -
          joinWeightMap[itemB[keyField] as any]
      : joinWeightMap[itemB[keyField] as any] -
          joinWeightMap[itemA[keyField] as any];
  });
};
