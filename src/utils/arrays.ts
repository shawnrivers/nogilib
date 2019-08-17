export const arrayToObject = <T>(
  array: T[],
  keyField: keyof T
): { [key: string]: T } =>
  Object.assign({}, ...array.map(item => ({ [String(item[keyField])]: item })));

export const sortByDate = <T>(
  array: T[],
  keyField: keyof T,
  order: "asc" | "desc"
): T[] =>
  array
    .slice()
    .sort((itemA, itemB) =>
      order === "asc"
        ? new Date(itemA[keyField] as any).getTime() -
          new Date(itemB[keyField] as any).getTime()
        : new Date(itemB[keyField] as any).getTime() -
          new Date(itemA[keyField] as any).getTime()
    );
