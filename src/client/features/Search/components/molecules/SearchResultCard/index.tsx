/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Card, CardProps } from 'client/components/atoms/card/Card';
import { useAppTheme } from 'client/styles/tokens';
import { GridImage } from 'client/components/atoms/image/GirdImage';
import { Typography } from 'client/components/atoms/Typography';

type SearchResultCardProps = {
  to: string;
  imgSrc: string;
  title: string;
  caption: string;
  secondCaption?: string;
} & CardProps;

export const SearchResultCard: React.FC<SearchResultCardProps> = props => {
  const { to, imgSrc, title, caption, secondCaption, ...cardProps } = props;
  const theme = useAppTheme();

  return (
    <Card to={to} borderRadius="m" padding="xs" {...cardProps}>
      <div
        css={css`
          display: grid;
          grid-template-columns: 100px auto;
          grid-template-rows: auto;
          grid-gap: ${theme.spacing.m};
          padding: ${theme.spacing.xs};
          overflow: hidden;
        `}
      >
        <GridImage src={imgSrc} alt={title} glow />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            flex-wrap: nowrap;
            overflow: hidden;
          `}
        >
          <Typography variant="h7" element="p" bold ellipsis>
            {title}
          </Typography>
          <Typography
            variant="body2"
            textColor={{ on: 'onSurface', variant: 'variant1' }}
            ellipsis
          >
            {caption} {secondCaption ?? null}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
