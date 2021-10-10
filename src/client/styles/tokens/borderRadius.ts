export const BORDER_RADIUS = {
  none: '0',
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
} as const;

export type BorderRadiusKey = keyof typeof BORDER_RADIUS;
