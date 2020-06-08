export function arrayToObject<T, K extends keyof T>(
  array: T[],
  keyField: K
): Record<
  T[K] extends string | number | symbol ? T[K] : string | number | symbol,
  T
> {
  return Object.assign(
    {},
    ...array.map(item => {
      const key = String(item[keyField]);

      return { [key]: item };
    })
  );
}

export function sortByDate<T>(
  array: T[],
  keyField: keyof T,
  order: "asc" | "desc"
): T[] {
  return array.slice().sort((itemA, itemB) => {
    return order === "asc"
      ? new Date(itemA[keyField] as any).getTime() -
          new Date(itemB[keyField] as any).getTime()
      : new Date(itemB[keyField] as any).getTime() -
          new Date(itemA[keyField] as any).getTime();
  });
}
