/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';

const TextSideDivider = styled.div`
  width: 128px;
  border-top: 2px solid ${props => props.color};
  margin-top: 1.5ex;
`;

export const TextDivider: React.FC<{ text: string | number }> = props => {
  const theme = useTheme();
  const dividerLineColor = theme.colors.theme.onBackground.variant1;

  return (
    <Typography
      variant="h3"
      textColor={{ on: 'onBackground', variant: 'standard' }}
      css={css`
        display: flex;
        justify-content: center;
        margin: 2ex 0;
      `}
    >
      <TextSideDivider color={dividerLineColor} />
      <div
        css={css`
          margin: 0 1em;
        `}
      >
        {props.text}
      </div>
      <TextSideDivider color={dividerLineColor} />
    </Typography>
  );
};
