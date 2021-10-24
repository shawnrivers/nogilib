import * as path from 'path';
import * as fs from 'fs';
import { ImageUrl } from 'server/types/commons';

export const appendString = (original: string, appendant: string): string =>
  `${original}_${appendant}`;

/**
 * Convert the image file path to a relative path for Next asset filesystem
 * @param pathname Image path like `"photo-albums/akimotomanatsu_1.jpg"`
 */
export function convertImageFilePath(pathname: string): string {
  if (pathname.startsWith('/images/')) {
    return pathname;
  }

  return `/images/${pathname}`;
}

export const complementImageFilePathname = (pathname: string): string => {
  if (pathname.startsWith('./public/')) {
    return pathname;
  }
  return path.join('./public', convertImageFilePath(pathname));
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

export const getPathname = (path: Path): string =>
  `${path.dirname}/${path.filename}${path.extension}`;

export const getResponsiveImageUrls = (path: string): ImageUrl => {
  const { dirname, extension, filename } = getPath(path);

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

export const findPathname = (dir: string, pattern: string): string | null => {
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
