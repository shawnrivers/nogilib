import { ImageUrl } from 'server/types/commons';

export function getImgSrcSet(image: ImageUrl): string {
  return `${image.sm}, ${image.md} 2x, ${image.lg} 3x`;
}
