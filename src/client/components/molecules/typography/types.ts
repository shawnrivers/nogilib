import { TypographyProps } from 'client/components/atoms/Typography';

export type StyledTypographyProps = Omit<
  TypographyProps,
  'variant' | 'textColor' | 'fontFamily' | 'bold'
>;
