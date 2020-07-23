/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ArtworkImage } from 'client/features/Discography/components/atoms/ArtworkImage';
import { Typography } from 'client/components/atoms/Typography';
import { toCdNumber, commaTextArray } from 'utils/strings';
import { FocusPerformers } from 'server/actors/Discography/types';

export const NormalCd: React.FC<{
  artwork: string;
  title: string;
  number: string;
  type: string;
  focusPerformers: FocusPerformers;
}> = props => (
  <div>
    <ArtworkImage
      src={props.artwork}
      alt={props.number}
      css={css`
        margin-bottom: 8px;
      `}
    />
    <Typography
      variant="h4"
      textColor={{ on: 'onBackground', variant: 'variant1' }}
      css={css`
        text-transform: capitalize;
        margin-bottom: 0.5ex;
      `}
    >
      {toCdNumber(props.number)} {props.type}
    </Typography>
    <Typography
      variant="em1"
      css={css`
        margin-bottom: 0.5ex;
      `}
    >
      {props.title}
    </Typography>
    {props.type === 'single' && props.focusPerformers.name.length > 0 ? (
      <Typography
        variant="body3"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
        `}
      >
        {props.focusPerformers.type}:{' '}
        {commaTextArray(props.focusPerformers.name)}
      </Typography>
    ) : null}
  </div>
);
