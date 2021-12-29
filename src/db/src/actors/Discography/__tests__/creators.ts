import { convertCdArtworkUrl } from 'db/src/actors/Discography/raw/creators';

describe('convertCdArtwork', () => {
  test('should return correspond image path when image exists in the file system', () => {
    expect(
      convertCdArtworkUrl({
        cdHasArtworks: true,
        cdNumber: '25',
        cdArtworkType: 'A',
        cdKind: 'single',
      }).lg
    ).toMatch(/artworks\/singles\/25\/A.*/);
    expect(
      convertCdArtworkUrl({
        cdHasArtworks: true,
        cdNumber: '4',
        cdArtworkType: 'A',
        cdKind: 'album',
      }).lg
    ).toMatch(/artworks\/albums\/4\/A.*/);
    expect(
      convertCdArtworkUrl({
        cdHasArtworks: true,
        cdNumber: '1',
        cdArtworkType: 'T',
        cdKind: 'digital',
      }).lg
    ).toMatch(/artworks\/digital\/1\/T.*/);
  });

  test('should return no artwork image path when cdHasArtworks flag is false', () => {
    expect(
      convertCdArtworkUrl({
        cdHasArtworks: false,
        cdNumber: '100',
        cdArtworkType: 'A',
        cdKind: 'single',
      }).lg
    ).toMatch(/artworks\/artwork_no_image.*/);
    expect(
      convertCdArtworkUrl({
        cdHasArtworks: false,
        cdNumber: '25',
        cdArtworkType: 'A',
        cdKind: 'single',
      }).lg
    ).toMatch(/artworks\/artwork_no_image.*/);
  });

  test("should return no artwork image path when image doesn't exist in the file system", () => {
    expect(
      convertCdArtworkUrl({
        cdHasArtworks: true,
        cdNumber: '100',
        cdArtworkType: 'A',
        cdKind: 'single',
      }).lg
    ).toMatch(/artworks\/artwork_no_image.*/);
  });
});
