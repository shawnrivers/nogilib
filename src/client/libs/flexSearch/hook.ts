import * as React from 'react';
import FlexSearch from 'flexsearch';
import type { Index } from 'flexsearch';

/**
 * Tokenize for searching in both English and Japanese.
 * Split non-ASCII codes by characters.
 * @param str The original search query string
 */
export function tokenize(str: string): string[] {
  return str
    .split(' ')
    .map(subStr => {
      const charCount = subStr.length;
      const result = [];
      let currentStr = '';

      for (let i = 0; i < charCount; i++) {
        const char = subStr.charAt(i);

        if (char.match(/[a-zA-Z]/g)) {
          currentStr += char;
        } else {
          if (currentStr !== '') {
            result.push(currentStr);
            currentStr = '';
          }
          result.push(char);
        }

        if (currentStr !== '' && i === charCount - 1) {
          result.push(currentStr);
        }
      }

      return result;
    })
    .flat();
}

export function useSearchIndex<
  T,
  U extends keyof T,
  V extends keyof T
>(params: { docs: T[]; searchField: U; idField: V }): Index<T> | undefined {
  const { docs, searchField, idField } = params;
  const [index, setIndex] = React.useState<Index<T>>();

  React.useEffect(() => {
    if (typeof idField !== 'string') {
      throw new Error('The idField must be a string');
    }

    const index = FlexSearch.create<T>({
      doc: {
        id: idField,
        field: [searchField],
      },
      tokenize,
    });

    /**
     * Index.add() supports adding multiple documents at once.
     * But the type definition seems to only allow one single doc
     * as the argument. Add `as any` as a typing workaround.
     */
    index.add(docs as any);

    setIndex(index);
  }, [docs, searchField, idField]);

  return index;
}
