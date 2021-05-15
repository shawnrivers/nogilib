import * as path from 'path';
import { ImageUrl } from 'server/types/commons';

/**
 * Convert the image file path to a relative path for Next asset filesystem
 * @param imagePath Image path like `"photo-albums/akimotomanatsu_1.jpg"`
 */
export function convertImageFilePath(imagePath: string): string {
  if (imagePath.startsWith('/images/')) {
    return imagePath;
  }

  return `/images/${imagePath}`;
}

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
      filename: /@[1-3]x$/.test(filename) ? filename : `${filename}@1x`,
    }),
    md: getPathname({
      dirname,
      extension,
      filename: /@[1-3]x$/.test(filename) ? filename : `${filename}@2x`,
    }),
    lg: getPathname({
      dirname,
      extension,
      filename: /@[1-3]x$/.test(filename) ? filename : `${filename}@3x`,
    }),
  };
};
