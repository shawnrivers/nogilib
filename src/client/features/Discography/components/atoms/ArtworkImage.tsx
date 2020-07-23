/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Image } from 'client/components/atoms/Image';
import { useTheme } from 'client/styles/tokens';

export const ArtworkImage: React.FC<{
  src: string;
  alt: string;
}> = props => {
  const { src, alt, ...restProps } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        padding-top: 100%;
        position: relative;
        width: 100%;
      `}
    >
      <div
        css={css`
          background-color: ${theme.colors.theme.surface.variant0};
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        `}
      >
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          objectPosition="top"
          css={css`
            background-color: ${theme.colors.global.white};
            display: block;
            height: 100%;
            transform-origin: center;
            width: 100%;
          `}
          {...restProps}
        />
      </div>
    </div>
  );
};
