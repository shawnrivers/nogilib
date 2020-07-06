/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Image } from 'client/components/atoms/Image';

export const ArtworkImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}> = props => {
  const { src, alt, width, height, ...restProps } = props;

  return (
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      objectPosition="top"
      css={css`
        width: ${width ?? 240}px;
        height: ${height ?? 240}px;
      `}
      {...restProps}
    />
  );
};
