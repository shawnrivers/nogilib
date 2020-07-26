/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useAppTheme } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';

export const Hashtag: React.FC = props => {
  const theme = useAppTheme();
  const { children, ...restProps } = props;

  return (
    <Typography
      variant="body2"
      element="span"
      textColor={{ on: 'onBackground', variant: 'standard' }}
      css={css`
        border-radius: ${theme.borderRadius.xl};
        border: 1px solid ${theme.colors.theme.onBackground.standard};
        padding: ${theme.spacing.xs};
      `}
      {...restProps}
    >
      #{children}
    </Typography>
  );
};
