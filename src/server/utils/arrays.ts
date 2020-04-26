export const arrayToObject = <T>(
  array: T[],
  keyField: keyof T
): { [key: string]: T } =>
  Object.assign({}, ...array.map(item => ({ [String(item[keyField])]: item })));
