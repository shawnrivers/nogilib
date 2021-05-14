import { convertCdArtwork } from 'server/actors/Discography/raw/creators';

describe('convertCdArtwork', () => {
  test('should return correspond image path when image exists in the file system', () => {
    expect(
      convertCdArtwork({
        cdHasArtworks: true,
        cdNumber: '25',
        cdArtworkType: 'A',
        cdKind: 'single',
      })
    ).toEqual('artworks/singles/25/A.jpg');
    expect(
      convertCdArtwork({
        cdHasArtworks: true,
        cdNumber: '4',
        cdArtworkType: 'A',
        cdKind: 'album',
      })
    ).toEqual('artworks/albums/4/A.jpg');
    expect(
      convertCdArtwork({
        cdHasArtworks: true,
        cdNumber: '1',
        cdArtworkType: 'T',
        cdKind: 'digital',
      })
    ).toEqual('artworks/digital/1/T.jpg');
  });

  test('should return no artwork image path when cdHasArtworks flag is false', () => {
    expect(
      convertCdArtwork({
        cdHasArtworks: false,
        cdNumber: '100',
        cdArtworkType: 'A',
        cdKind: 'single',
      })
    ).toEqual('artworks/artwork_no_image.jpg');
    expect(
      convertCdArtwork({
        cdHasArtworks: false,
        cdNumber: '25',
        cdArtworkType: 'A',
        cdKind: 'single',
      })
    ).toEqual('artworks/artwork_no_image.jpg');
  });

  test("should return no artwork image path when image doesn't exist in the file system", () => {
    expect(
      convertCdArtwork({
        cdHasArtworks: true,
        cdNumber: '100',
        cdArtworkType: 'A',
        cdKind: 'single',
      })
    ).toEqual('artworks/artwork_no_image.jpg');
  });
});
