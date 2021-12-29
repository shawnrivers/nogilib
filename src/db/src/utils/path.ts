import * as path from 'path';
import * as fs from 'fs';
import { ImageUrl } from 'db/src/types/commons';

export const appendString = (original: string, appendant: string): string =>
  `${original}_${appendant}`;

/**
 * Convert Node file system file pathname to URL that is accessible from the client side.
 * @param pathname pathname in the file system
 * @returns URL to access on the client
 *
 * @example
 * convertPathnameToClientStaticFileUrl('./public/images/singles/28/saitouasuka-xxx_@1x.jpg');
 * // returns '/images/singles/28/saitouasuka-xxx_@1x.jpg'
 */
export const convertPathnameToClientStaticFileUrl = (
  pathname: string
): string => {
  const [firstSubPath, ...restSubPaths] = path
    .normalize(pathname)
    .split(path.sep);
  if (firstSubPath === 'public') {
    return `/${restSubPaths.join('/')}`;
  }
  return `/${[firstSubPath, ...restSubPaths].join('/')}`;
};

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

export const getPathname = (filePath: Path): string =>
  path.join(filePath.dirname, `${filePath.filename}${filePath.extension}`);

export const getResponsiveImageUrl = (pathname: string): ImageUrl => {
  const { dirname, extension, filename } = getPath(pathname);

  return {
    sm: getPathname({
      dirname,
      extension,
      filename: /@[1-3]x$/.test(filename)
        ? filename.replace(/@[1-3]x$/, '@1x')
        : appendString(filename, '@1x'),
    }),
    md: getPathname({
      dirname,
      extension,
      filename: /@[1-3]x$/.test(filename)
        ? filename.replace(/@[1-3]x$/, '@2x')
        : appendString(filename, '@2x'),
    }),
    lg: getPathname({
      dirname,
      extension,
      filename: /@[1-3]x$/.test(filename)
        ? filename.replace(/@[1-3]x$/, '@3x')
        : appendString(filename, '@3x'),
    }),
  };
};

export const findFilePathname = (
  dir: string,
  pattern: string
): string | null => {
  if (!fs.existsSync(dir)) {
    return null;
  }

  let foundPathname: string | null = null;

  const files = fs.readdirSync(dir);
  files.forEach(filename => {
    const filePathname = path.join(dir, filename);
    if (filePathname.includes(pattern)) {
      foundPathname = filePathname;
      return;
    }
  });

  return foundPathname;
};
