import { convertPathnameToClientStaticFileUrl } from 'db/src/utils/path';

describe('convertPathnameToClientStaticFileUrl', () => {
  test('should remove "public" in front', () => {
    expect(
      convertPathnameToClientStaticFileUrl(
        './public/images/artworks/singles/20/A.jpg'
      )
    ).toBe('/images/artworks/singles/20/A.jpg');
    expect(
      convertPathnameToClientStaticFileUrl(
        'public/images/artworks/singles/20/A.jpg'
      )
    ).toBe('/images/artworks/singles/20/A.jpg');
  });

  test('should add "/" in front if there is no one yet', () => {
    expect(
      convertPathnameToClientStaticFileUrl('images/artworks/singles/20/A.jpg')
    ).toBe('/images/artworks/singles/20/A.jpg');
  });

  test('should not add "/" in front if there is one already', () => {
    expect(
      convertPathnameToClientStaticFileUrl('./images/artworks/singles/20/A.jpg')
    ).toBe('/images/artworks/singles/20/A.jpg');
  });
});
