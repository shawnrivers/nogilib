import sharp from 'sharp';
import { getPath, getPathname } from '../utils/path';

export const resize = async (
  path: string,
  options: {
    width: number;
    filename?: string;
  }
): Promise<string> => {
  const imagePath = getPath(path);

  try {
    const outputPathname = getPathname({
      ...imagePath,
      filename: options.filename ?? imagePath.filename,
      extension: '.jpg',
    });
    await sharp(path)
      .resize(Math.round(options.width))
      .jpeg()
      .toFile(outputPathname);
    return outputPathname;
  } catch (error) {
    throw new Error(`[${path}] Something went wrong: ${error}`);
  }
};
