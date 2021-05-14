import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import { getPath, getPathname } from '../utils/path';

export const compress = async (
  path: string,
  options: {
    quality: number;
    filenameSuffix?: string;
  }
): Promise<string> => {
  const { quality, filenameSuffix = '' } = options;

  const imagePath = getPath(path);
  const outputPathname = getPathname({
    ...imagePath,
    filename: `${imagePath.filename}${filenameSuffix}`,
  });

  await imagemin([path], {
    destination: `${imagePath.dirname}`,
    plugins: [
      imageminMozjpeg({
        quality,
      }),
    ],
  });

  return outputPathname;
};
