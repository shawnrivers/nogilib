import sharp from 'sharp';
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
export const getResponsiveImages = async (
  path: string,
  width: number
): Promise<void> => {
  const { width: originalWidth } = await sharp(path).metadata();
  if (originalWidth === undefined) {
    throw new Error(`[${path}] No dimension data`);
  }

  const compressedFilepath = await compress(path, { quality: 89 });

  const [width1x, width2x, width3x] = getResponsiveWidths(width, originalWidth);
  await Promise.all([
    resize(compressedFilepath, { width: width1x, filenameSuffix: '@1x' }),
    resize(compressedFilepath, { width: width2x, filenameSuffix: '@2x' }),
    resize(compressedFilepath, { width: width3x, filenameSuffix: '@3x' }),
  ]);
};

const main = async () => {
  await getResponsiveImages(
    '../public/images/artworks/artwork_no_image.png',
    200
  );
  console.log('DONE');
};

main();
