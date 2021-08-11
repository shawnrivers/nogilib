export function joinClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(className => className !== undefined).join(' ');
}
