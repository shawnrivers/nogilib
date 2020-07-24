/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ArtworkImage } from 'client/features/Discography/components/atoms/ArtworkImage';
import { Typography } from 'client/components/atoms/Typography';
import { toCdNumber } from 'utils/strings';
import { FocusPerformers } from 'server/actors/Discography/types';
import { Card, CardProps } from 'client/components/atoms/card/Card';

export const ArtworkCard: React.FC<
  CardProps & {
    artwork: string;
    title: string;
    number: string;
    type: string;
    focusPerformers?: FocusPerformers;
  }
> = props => {
  const { artwork, title, number, type, ...cardProps } = props;
  return (
    <Card {...cardProps}>
      <ArtworkImage src={artwork} alt={number} />
      <Typography
        variant="h6"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
          margin-top: 0.5em;
        `}
      >
        {toCdNumber(number)} {type}
      </Typography>
      <Typography
        variant="em2"
        css={css`
          margin-top: 0.5em;
          line-height: 1.2;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `}
      >
        {title}
      </Typography>
    </Card>
  );
};
