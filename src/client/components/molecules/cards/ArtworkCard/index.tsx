/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import Image from 'next/image';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { toCdNumber } from 'utils/strings';
import { Card, CardProps } from 'client/components/atoms/Card';
import { commonStyles } from 'client/styles/tokens';

export const ArtworkCard: React.FC<
  Omit<CardProps, 'children'> & {
    title: string;
    titleElement?: TypographyProps['element'];
    number: string;
    type: string;
    image: string;
    width: number;
  }
> = props => {
  const {
    image,
    title,
    titleElement = 'div',
    borderRadius = 'm',
    number,
    type,
    width,
    ...cardProps
  } = props;

  const caption = `${toCdNumber(number)} ${type}`;

  return (
    <Card
      css={css`
        width: ${175}px;
      `}
      aria-label={title}
      borderRadius={borderRadius}
      {...cardProps}
    >
      <article>
        <Image
          src={image}
          width={width}
          height={width}
          alt=""
          role="presentation"
          objectFit="cover"
          objectPosition="top"
          css={css`
            border-radius: ${commonStyles.borderRadius[borderRadius]};
          `}
        ></Image>
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
