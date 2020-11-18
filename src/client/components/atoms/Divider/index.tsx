/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useAppTheme } from 'client/styles/tokens';
import {
  ThemeColorsForeground,
  ThemeColorVariants,
} from 'client/styles/tokens/colors';

type DividerProps = React.HTMLAttributes<HTMLElement> & {
  lineColor?: {
    on: keyof ThemeColorsForeground;
    variant: keyof ThemeColorVariants;
  };
};

export const Divider: React.FC<DividerProps> = props => {
  const {
    lineColor = {
      on: 'onBackground',
      variant: 'variant0',
    },
    ...hrProps
  } = props;

  const theme = useAppTheme();

  return (
    <hr
      css={css`
        border: 1px solid ${theme.colors.theme[lineColor.on][lineColor.variant]};
      `}
      {...hrProps}
    />
  );
};
