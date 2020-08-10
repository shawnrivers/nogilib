/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useAppTheme } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';

export const TextDivider: React.FC<{ text: React.ReactNode }> = props => {
  const theme = useAppTheme();
  const dividerLineColor = theme.colors.theme.onBackground.variant1;
  const dividerLineStyles = css`
    border-top: 2px solid ${dividerLineColor};
    height: 2px;
    margin-top: 10px;
    width: 100%;
  `;

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: minmax(auto, 120px) minmax(max-content, auto) minmax(
            auto,
            120px
          );
        justify-content: center;
        align-items: center;
        margin: 2em auto;
      `}
    >
      <div
        css={css`
          ${dividerLineStyles};
          justify-self: end;
        `}
      />
      <Typography
        variant="h3"
        element="span"
        textColor={{ on: 'onBackground', variant: 'standard' }}
        css={css`
          margin: 0 1em;
          text-align: center;
          text-transform: capitalize;
          line-height: 1;
        `}
      >
        {props.text}
      </Typography>
      <div
        css={css`
          ${dividerLineStyles};
          justify-self: start;
        `}
      />
    </div>
  );
};
