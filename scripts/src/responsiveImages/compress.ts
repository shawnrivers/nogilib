import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import { getPath } from '../utils/path';

export const compress = async (
  path: string,
  options: {
    quality: number;
  }
): Promise<string> => {
  const imagePath = getPath(path);

  await imagemin([path], {
    destination: `${imagePath.dirname}`,
    plugins: [
      imageminMozjpeg({
        quality: options.quality,
      }),
    ],
  });

  return path;
};
