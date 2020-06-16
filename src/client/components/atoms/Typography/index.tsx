/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TypographyKey } from 'client/styles/typography';
import { GlobalColorKey } from 'client/styles/colors';
import { useTheme } from 'client/styles/tokens';

const variantMapping: Record<TypographyKey, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption: 'p',
};

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyKey;
  element?: React.ElementType;
  color?: GlobalColorKey;
};

export const Typography: React.FC<TypographyProps> = props => {
  const { variant, element, color = 'gray8', children, ...restProps } = props;
  const theme = useTheme();
  const Element = element ?? variantMapping[variant];

  return (
    <Element
      css={[
        theme.typography[variant],
        css`
          color: ${theme.colors.global[color]};
        `,
      ]}
      {...restProps}
    >
      {children}
    </Element>
  );
};
