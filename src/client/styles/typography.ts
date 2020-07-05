const serifFontFamily =
  'Playfair Display, Times, Times New Roman, Georgia, serif';

const sansSerifFontFamily = 'Verdana, Arial, Helvetica, sans-serif';

export const TYPOGRAPHY = {
  h1: {
    fontSize: '4rem',
    fontWeight: 700,
    fontFamily: serifFontFamily,
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    fontFamily: serifFontFamily,
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 700,
    fontFamily: serifFontFamily,
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 700,
    fontFamily: serifFontFamily,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: serifFontFamily,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 700,
    fontFamily: serifFontFamily,
  },
  h7: {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: serifFontFamily,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: sansSerifFontFamily,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    fontFamily: sansSerifFontFamily,
  },
  body3: {
    fontSize: '0.75rem',
    fontWeight: 400,
    fontFamily: sansSerifFontFamily,
  },
  caption: {
    fontSize: '0.625rem',
    fontWeight: 400,
    fontFamily: sansSerifFontFamily,
  },
  button: {
    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: sansSerifFontFamily,
  },
};

export type TypographyKey = keyof typeof TYPOGRAPHY;
