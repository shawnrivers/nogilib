/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ArtworkImage } from 'client/features/Discography/components/atoms/ArtworkImage';
import { Typography } from 'client/components/atoms/Typography';
import { toCdNumber, commaTextArray } from 'utils/strings';
import { FocusPerformers } from 'server/actors/Discography/types';
import { Card, CardProps } from 'client/components/atoms/card/Card';

export const ArtworkCard: React.FC<
  CardProps & {
    artwork: string;
    title: string;
    number: string;
    type: string;
    focusPerformers: FocusPerformers;
  }
> = props => {
  const { artwork, title, number, type, focusPerformers, ...cardProps } = props;
  return (
    <Card {...cardProps}>
      <ArtworkImage src={artwork} alt={number} />
      <Typography
        variant="h5"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
          margin-top: 0.3em;
        `}
      >
        {toCdNumber(number)} {type}
      </Typography>
      <Typography
        variant="em2"
        css={css`
          margin-top: 0.4em;
          line-height: 1.2;
        `}
      >
        {title}
      </Typography>
      {type === 'single' && focusPerformers.name.length > 0 ? (
        <Typography
          variant="body3"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
          css={css`
            text-transform: capitalize;
            margin-top: 0.3em;
          `}
        >
          {focusPerformers.type}: {commaTextArray(focusPerformers.name)}
        </Typography>
      ) : null}
    </Card>
  );
};
