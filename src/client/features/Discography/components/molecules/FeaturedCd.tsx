/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ArtworkImage } from 'client/features/Discography/components/atoms/ArtworkImage';
import { Typography } from 'client/components/atoms/Typography';
import { toCdNumber, commaTextArray } from 'utils/strings';
import { FocusPerformers } from 'server/actors/Discography/types';

export const FeatureCd: React.FC<{
  artwork: string;
  title: string;
  number: string;
  type: string;
  focusPerformers: FocusPerformers;
  release: string;
}> = props => (
  <div
    css={css`
      display: flex;
    `}
  >
    <ArtworkImage
      src={props.artwork}
      alt={props.number}
      width={360}
      height={360}
      css={css`
        margin-right: 32px;
      `}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <Typography
        variant="h1"
        element="h4"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
          line-height: 1;
          margin-bottom: 1.5ex;
        `}
      >
        {toCdNumber(props.number)} <br /> {props.type}
      </Typography>
      <div>
        <Typography variant="h4" element="p">
          {props.title}
        </Typography>
        {props.focusPerformers.name.length > 0 ? (
          <Typography
            variant="body1"
            css={css`
              text-transform: capitalize;
            `}
          >
            {props.focusPerformers.type}:{' '}
            {commaTextArray(props.focusPerformers.name)}
          </Typography>
        ) : null}
        <Typography
          variant="body1"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
        >
          発売日：{props.release}
        </Typography>
      </div>
    </div>
  </div>
);
