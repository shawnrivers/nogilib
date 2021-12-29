import { convertImageFilePath } from 'db/src/utils/path';

describe('convertImageFilePath', () => {
  test('should prefix image path when no prefix is added', () => {
    expect(convertImageFilePath('artworks/singles/20/A.jpg')).toBe(
      '/images/artworks/singles/20/A.jpg'
    );
  });

  test('should not prefix image path when prefix is already added', () => {
    expect(convertImageFilePath('/images/artworks/singles/20/A.jpg')).toBe(
      '/images/artworks/singles/20/A.jpg'
    );
  });
});
