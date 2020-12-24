/**
 * Convert the image file path to a relative path for Gatsby source filesystem
 * @param imagePath Image path like `"photo-albums/akimotomanatsu_1.jpg"`
 */
export function convertImageFilePath(imagePath: string): string {
  if (imagePath.startsWith('../assets/images/')) {
    return imagePath;
  }

  return `../assets/images/${imagePath}`;
}
