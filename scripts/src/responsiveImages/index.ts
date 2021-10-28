import path from 'path';
import fs from 'fs';
import cliProgress from 'cli-progress';
import sharp from 'sharp';
import {
  appendString,
  generateHash,
  getPath,
  getPathname,
} from '../utils/path';
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

  const originalPath = getPath(path);

  // Skip responsive images
  if (/@[1-3]x$/.test(originalPath.filename)) {
    return;
  }

  const compressedFilepath = getPathname({
    dirname: originalPath.dirname,
    extension: originalPath.extension,
    filename: appendString(originalPath.filename, 'compressed'),
  });

  fs.copyFileSync(path, compressedFilepath);

  await compress(compressedFilepath, {
    quality: 100,
  });

  const [width1x, width2x, width3x] = getResponsiveWidths(width, originalWidth);
  const hashedFilename = appendString(originalPath.filename, generateHash());
  await Promise.all([
    resize(compressedFilepath, {
      width: width1x,
      filename: appendString(hashedFilename, '@1x'),
    }),
    resize(compressedFilepath, {
      width: width2x,
      filename: appendString(hashedFilename, '@2x'),
    }),
    resize(compressedFilepath, {
      width: width3x,
      filename: appendString(hashedFilename, '@3x'),
    }),
  ]);

  // Remove compressed files and the original file
  fs.unlinkSync(compressedFilepath);
  fs.unlinkSync(path);
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

      const { filename, dirname, extension } = getPath(pathname);
      if (
        !IGNORE_FILENAMES.includes(filename) &&
        !/@[1-3]x$/.test(filename) &&
        !filename.includes(appendString('', 'compressed')) &&
        !fs.existsSync(
          getPathname({
            dirname,
            extension,
            filename: appendString(filename, '@1x'),
          })
        )
      ) {
        filepaths.push(pathname);
      }
    });
  };

  getFilepathsInDir(dir);
  return filepaths;
};

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.legacy);

const main = async () => {
  const DIRS = [
    '../public/images/artworks',
    '../public/images/members',
    '../public/images/photo-albums',
  ];

  for (let i = 0; i < DIRS.length; i++) {
    const dir = DIRS[i];
    console.log(`Generating images for ${dir}...\n`);

    const filepaths = getAllImageFiles(dir).filter(
      filepath => !fs.statSync(filepath).isDirectory()
    );

    progressBar.start(filepaths.length, 0);

    let progressCounter = 0;
    await Promise.all(
      filepaths.map(async filepath => {
        await getResponsiveImages(filepath, 200);
        progressCounter++;
        progressBar.update(progressCounter);
      })
    );

    progressBar.stop();
    console.log(`${dir} DONE!\n`);
  }
};

main();
