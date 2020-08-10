/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { StyledTypographyProps } from 'client/components/molecules/typography/types';

export const SectionSubtitle: React.FC<StyledTypographyProps> = props => {
  const { children, ...typographyProps } = props;

  return (
    <Typography
      variant="h5"
      element="h3"
      fontFamily="sans"
      capitalize
      css={css`
        text-align: center;
      `}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};
