/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Image, ImageProps } from 'client/components/atoms/Image';
import { useTheme } from 'client/styles/tokens';

type ArtworkProps = ImageProps & {
  src: string;
};

const Artwork: React.FC<ArtworkProps> = props => {
  const { src, alt, ...restProps } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        padding-top: 100%;
        width: 100%;
        position: relative;
        border-radius: ${theme.borderRadius.m};
        overflow: hidden;
      `}
    >
      <div
        css={css`
          background-color: ${theme.colors.theme.surface.variant0};
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
        `}
      >
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          objectPosition="top"
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            transform-origin: center;
          `}
          {...restProps}
        />
      </div>
    </div>
  );
};

export const ArtworkImage: React.FC<ArtworkProps> = props => {
  const { src, alt, ...restProps } = props;

  return (
    <div
      css={css`
        position: relative;
        padding-top: 100%;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: blur(4px);
        `}
      >
        <Artwork src={src} alt={alt} {...restProps} />
      </div>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      >
        <Artwork src={src} alt={alt} {...restProps} />
      </div>
    </div>
  );
};
