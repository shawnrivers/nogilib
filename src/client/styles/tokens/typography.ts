const serifFontFamily =
  'Playfair Display, Times, Times New Roman, Georgia, serif';

const sansSerifFontFamily = 'Helvetica, Verdana, Arial, sans-serif';

export const FONT_FAMILY: Record<FontFamily, string> = {
  serif: serifFontFamily,
  sans: sansSerifFontFamily,
};

export type FontFamily = 'serif' | 'sans';

export const TYPOGRAPHY = {
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.5625rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.375rem',
    fontWeight: 700,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 700,
  },
  h7: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  h8: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  body3: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  body4: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  em1: {
    fontSize: '1.125rem',
    fontWeight: 700,
  },
  em2: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  em3: {
    fontSize: '0.875rem',
    fontWeight: 700,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  button: {
    fontSize: '1rem',
    fontWeight: 700,
  },
};

export type TypographyKey = keyof typeof TYPOGRAPHY;
