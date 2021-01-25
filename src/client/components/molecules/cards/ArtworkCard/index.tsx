/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { toCdNumber } from 'utils/strings';
import { Card, CardProps } from 'client/components/atoms/Card';
import {
  GatsbyImage,
  GatsbyImageProps,
} from 'client/components/atoms/images/GatsbyImage';
import { commonStyles } from 'client/styles/tokens';

export const ArtworkCard: React.FC<
  CardProps & {
    title: string;
    image: Omit<GatsbyImageProps, 'alt' | 'role'>;
    titleElement?: TypographyProps['element'];
    number: string;
    type: string;
  }
> = props => {
  const {
    image,
    title,
    titleElement = 'div',
    number,
    type,
    ...cardProps
  } = props;

  const caption = `${toCdNumber(number)} ${type}`;

  return (
    <Card {...cardProps} aria-label={title}>
      <article>
        <GatsbyImage
          {...image}
          alt=""
          role="presentation"
          css={css`
            overflow: auto;
            border-radius: ${commonStyles.borderRadius.s};
          `}
        />
        <Typography
          variant="h7"
          element="div"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
          css={css`
            display: block;
            margin-top: 0.5em;
            text-align: center;
          `}
        >
          {caption}
        </Typography>
        <Typography
          variant="em2"
          element={titleElement}
          ellipsis
          css={css`
            display: block;
            margin-top: 0.5em;
            line-height: 1.2;
            text-align: center;
          `}
          lang="ja"
        >
          {title}
        </Typography>
      </article>
    </Card>
  );
};
