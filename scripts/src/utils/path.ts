import * as path from 'path';

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
