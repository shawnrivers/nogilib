import * as path from 'path';
import { v4 as uuid } from '@lukeed/uuid';

type Path = {
  dirname: string;
  extension: string;
  filename: string;
};

export const getPath = (pathname: string): Path => {
  const dirname = path.dirname(pathname);
  const extension = path.extname(pathname);
  const filename = path.basename(pathname, extension);

  return { dirname, extension, filename };
};

export const getPathname = (path: Path): string =>
  `${path.dirname}/${path.filename}${path.extension}`;

export const appendString = (original: string, appendant: string): string =>
  `${original}_${appendant}`;

export const generateHash = (): string => uuid();
