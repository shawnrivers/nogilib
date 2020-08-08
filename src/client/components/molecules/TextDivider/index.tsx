/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';
import { useAppTheme } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';

const TextSideDivider = styled.div`
  width: 128px;
  height: 2px;
  border-top: 2px solid ${props => props.color};
  margin-top: 12px;
`;

export const TextDivider: React.FC<{ text: React.ReactNode }> = props => {
  const theme = useAppTheme();
  const dividerLineColor = theme.colors.theme.onBackground.variant1;

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2ex 0;
      `}
    >
      <TextSideDivider color={dividerLineColor} />
      <Typography
        variant="h3"
        textColor={{ on: 'onBackground', variant: 'standard' }}
        css={css`
          margin: 0 1em;
          text-align: center;
        `}
      >
        {props.text}
      </Typography>
      <TextSideDivider color={dividerLineColor} />
    </div>
  );
};
