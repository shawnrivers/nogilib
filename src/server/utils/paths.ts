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
