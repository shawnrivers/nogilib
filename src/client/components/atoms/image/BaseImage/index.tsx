/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  GatsbyImage,
  GatsbyImageProps,
} from 'client/components/atoms/image/GatsbyImage';
import { useTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/borderRadius';

type ImageProps = GatsbyImageProps & {
  borderRadius?: BorderRadiusKey;
};

const Image: React.FC<ImageProps> = props => {
  const { src, alt, borderRadius = 'm', ...restProps } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: ${theme.borderRadius[borderRadius]};
        overflow: hidden;
      `}
    >
      <div
        css={css`
          background-color: ${theme.colors.theme.surface.variant0};
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          position: absolute;
        `}
      >
        <GatsbyImage
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

export type BaseImageProps = ImageProps & {
  ratio?: number;
  glow?: boolean;
};

export const BaseImage: React.FC<BaseImageProps> = props => {
  const { src, alt, ratio = 1, glow = false, ...restProps } = props;

  return (
    <div
      css={css`
        position: relative;
        padding-top: ${ratio * 100}%;
      `}
    >
      {glow ? (
        <div
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            filter: blur(4px);
          `}
        >
          <Image src={src} alt={alt} {...restProps} />
        </div>
      ) : null}
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        `}
      >
        <Image src={src} alt={alt} {...restProps} />
      </div>
    </div>
  );
};
