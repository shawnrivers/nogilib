/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import {
  GatsbyImage,
  GatsbyImageProps,
} from 'client/components/atoms/images/GatsbyImage';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/tokens/borderRadius';

type ImageProps = GatsbyImageProps & {
  borderRadius: BorderRadiusKey;
  shadow: boolean;
};

const Image: React.FC<ImageProps> = props => {
  const { src, alt, borderRadius, shadow, ...restProps } = props;
  const theme = useAppTheme();

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: ${commonStyles.borderRadius[borderRadius]};
        box-shadow: ${shadow
          ? theme.elevation[componentElevationKey.componentOnBackground]
              .boxShadow
          : 'none'};
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

export type GridImageProps = Omit<ImageProps, 'borderRadius' | 'shadow'> & {
  ratio?: number;
  fixedSize?: boolean;
  borderRadius?: BorderRadiusKey;
  shadow?: boolean;
};

export const GridImage: React.FC<GridImageProps> = props => {
  const {
    src,
    alt,
    ratio = 1,
    fixedSize = false,
    shadow = false,
    borderRadius = 's',
    className,
    ...restProps
  } = props;

  const theme = useAppTheme();

  const containerStyles = React.useMemo(() => {
    const baseStyles = css`
      position: relative;
      overflow: auto;
      border-radius: ${commonStyles.borderRadius[borderRadius]};
      box-shadow: ${shadow
        ? theme.elevation[componentElevationKey.componentOnBackground].boxShadow
        : 'none'};
    `;

    return !fixedSize
      ? [
          baseStyles,
          css`
            padding-top: ${ratio * 100}%;
          `,
        ]
      : baseStyles;
  }, [borderRadius, fixedSize, ratio, shadow, theme.elevation]);

  return (
    <div css={containerStyles} className={className as string}>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        `}
      >
        <Image
          src={src}
          alt={alt}
          shadow={shadow}
          borderRadius={borderRadius}
          {...restProps}
        />
      </div>
    </div>
  );
};
