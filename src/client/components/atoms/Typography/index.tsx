/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from 'client/styles/tokens';
import { TypographyKey } from 'client/styles/typography';
import {
  ThemeColorsForeground,
  ThemeColorVariants,
} from 'client/styles/colors';

const variantMapping: Record<TypographyKey, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  em1: 'p',
  em2: 'p',
  em3: 'p',
  caption: 'p',
  button: 'span',
};

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyKey;
  element?: React.ElementType;
  bold?: boolean;
  textColor?: {
    on: keyof ThemeColorsForeground;
    variant: keyof ThemeColorVariants;
  };
};

export const Typography: React.FC<TypographyProps> = props => {
  const {
    variant,
    element,
    textColor = {
      on: 'onBackground',
      variant: 'standard',
    },
    bold,
    children,
    ...restProps
  } = props;
  const theme = useTheme();
  const Element = element ?? variantMapping[variant];

  return (
    <Element
      css={[
        theme.typography[variant],
        css`
          color: ${theme.colors.theme[textColor.on][textColor.variant]};
          font-weight: ${bold ? 700 : undefined};
        `,
      ]}
      {...restProps}
    >
      {children}
    </Element>
  );
};
