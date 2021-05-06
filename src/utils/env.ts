export const isDevelopment = (): boolean =>
  process.env.NODE_ENV === 'development';
export const isProduction = (): boolean =>
  process.env.NODE_ENV === 'production';

export const isServer = (): boolean => typeof window === 'undefined';
