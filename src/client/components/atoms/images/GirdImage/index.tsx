/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  GatsbyImage,
  GatsbyImageProps,
} from 'client/components/atoms/images/GatsbyImage';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/borderRadius';

type ImageProps = GatsbyImageProps & {
  borderRadius?: BorderRadiusKey;
};

const Image: React.FC<ImageProps> = props => {
  const { src, alt, borderRadius = 's', ...restProps } = props;
  const theme = useAppTheme();

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: ${commonStyles.borderRadius[borderRadius]};
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
  fixedSize?: boolean;
  glow?: boolean;
};

export const GridImage: React.FC<BaseImageProps> = props => {
  const {
    src,
    alt,
    ratio = 1,
    fixedSize = false,
    glow = false,
    className,
    ...restProps
  } = props;

  const containerStyles = !fixedSize
    ? css`
        position: relative;
        padding-top: ${ratio * 100}%;
      `
    : css`
        position: relative;
      `;

  return (
    <div css={containerStyles} className={className as string}>
      {glow ? (
        <div
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
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
