import sharp from 'sharp';
import { getPath, getPathname } from '../utils/path';

export const resize = async (
  path: string,
  options: {
    width: number;
    filenameSuffix?: string;
  }
): Promise<string> => {
  const { filename, dirname } = getPath(path);
  const { width, filenameSuffix = '' } = options;

  try {
    const outputPathname = getPathname({
      dirname,
      filename: `${filename}${filenameSuffix}`,
      extension: '.jpg',
    });
    await sharp(path).resize(Math.round(width)).jpeg().toFile(outputPathname);
    return outputPathname;
  } catch (error) {
    throw new Error(`[${path}] Something went wrong: ${error}`);
  }
};
