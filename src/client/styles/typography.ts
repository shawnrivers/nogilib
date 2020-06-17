export type TypographyStyle = {
  fontSize: string;
  fontWeight: 400 | 700;
  fontFamily: string;
};

const serif = {
  fontFamily: 'Playfair Display, Times, Times New Roman, Georgia, serif',
};

const sansSerif = {
  fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
};

export type TypographyKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'button';

export const TYPOGRAPHY: Record<TypographyKey, TypographyStyle> = {
  h1: {
    fontSize: '4rem',
    fontWeight: 700,
    ...serif,
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    ...serif,
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 700,
    ...serif,
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 700,
    ...serif,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 700,
    ...serif,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 700,
    ...serif,
  },
  h7: {
    fontSize: '1rem',
    fontWeight: 400,
    ...serif,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    ...sansSerif,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    ...sansSerif,
  },
  body3: {
    fontSize: '0.75rem',
    fontWeight: 400,
    ...sansSerif,
  },
  caption: {
    fontSize: '0.625rem',
    fontWeight: 400,
    ...sansSerif,
  },
  button: {
    fontSize: '1rem',
    fontWeight: 700,
    ...sansSerif,
  },
};
