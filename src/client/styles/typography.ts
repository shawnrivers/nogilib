export type TypographyKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption';
export type TypographyStyle = {
  fontSize: string;
  fontWeight: string;
};

export const TYPOGRAPHY: Record<TypographyKey, TypographyStyle> = {
  h1: {
    fontSize: '4rem',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
  },
  body3: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
  },
  caption: {
    fontSize: '0.625rem',
    fontWeight: 'normal',
  },
};
