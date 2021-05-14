import path from 'path';
import fs from 'fs';
import cliProgress from 'cli-progress';
import sharp from 'sharp';
import { getPath } from '../utils/path';
import { compress } from './compress';
import { resize } from './resize';

const getResponsiveWidths = (
  idealWidth: number,
  originalWidth: number
): [sm: number, md: number, lg: number] => {
  const idealWidthSm = idealWidth;
  const idealWidthMd = idealWidth * 2;
  const idealWidthLg = idealWidth * 3;

  if (originalWidth >= idealWidthLg) {
    return [idealWidthSm, idealWidthMd, idealWidthLg];
  }
  if (originalWidth >= idealWidthMd) {
    return [idealWidthSm, idealWidthMd, originalWidth];
  }
  if (originalWidth >= idealWidthSm) {
    return [idealWidthSm, originalWidth, originalWidth];
  }
  return [originalWidth, originalWidth, originalWidth];
};

/**
 * Generate 1x, 2x and 3x images
 * @param {string} path the path of the original image
 * @param {number} width the width of the image component on the UI
 * @return {string[]} the paths of generated images
 */
const getResponsiveImages = async (
  path: string,
  width: number
): Promise<void> => {
  const { width: originalWidth } = await sharp(path).metadata();
  if (originalWidth === undefined) {
    throw new Error(`[${path}] No dimension data`);
  }

  // Skip responsive images
  if (/@[1-3]x$/.test(getPath(path).filename)) {
    return;
  }

  const compressedFilepath = await compress(path, { quality: 89 });

  const [width1x, width2x, width3x] = getResponsiveWidths(width, originalWidth);
  await Promise.all([
    resize(compressedFilepath, { width: width1x, filenameSuffix: '@1x' }),
    resize(compressedFilepath, { width: width2x, filenameSuffix: '@2x' }),
    resize(compressedFilepath, { width: width3x, filenameSuffix: '@3x' }),
  ]);
};

const IGNORE_FILENAMES = ['.DS_Store'];

const getAllImageFiles = (dir: string): string[] => {
  const filepaths: string[] = [];

  const getFilepathsInDir = (dir: string): void => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const pathname = path.join(dir, file);
      if (fs.statSync(pathname).isDirectory()) {
        getFilepathsInDir(pathname);
      }
      if (!IGNORE_FILENAMES.includes(getPath(pathname).filename)) {
        filepaths.push(pathname);
      }
    });
  };

  getFilepathsInDir(dir);
  return filepaths;
};

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.legacy);

const main = () => {
  [
    '../public/images/artworks',
    '../public/images/members',
    '../public/images/photo-albums',
  ].forEach(async dir => {
    console.log(`Generating images for ${dir}...`);

    const filepaths = getAllImageFiles(dir).filter(
      filepath => !fs.statSync(filepath).isDirectory()
    );

    progressBar.start(filepaths.length, 0);

    await Promise.all(
      filepaths.map(async (filepath, i) => {
        await getResponsiveImages(filepath, 200);
        progressBar.update(i + 1);
      })
    );

    progressBar.stop();
    console.log(`${dir} DONE!`);
  });
};

main();
