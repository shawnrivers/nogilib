/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { FluidObject } from 'gatsby-image';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/tokens/borderRadius';
import {
  StaticImage,
  StaticImageProps,
} from 'client/components/atoms/images/StaticImage';

type ImageProps = {
  fluid: FluidObject;
  borderRadius: BorderRadiusKey;
  shadow: boolean;
} & StaticImageProps;

const Image: React.FC<ImageProps> = props => {
  const { fluid, borderRadius, shadow, imgStyle, ...staticImageProps } = props;
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
        <StaticImage
          fluid={fluid}
          css={css`
            display: block;
            width: 100%;
            height: 100%;
            transform-origin: center;
          `}
          imgStyle={{
            ...imgStyle,
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
          {...staticImageProps}
        />
      </div>
    </div>
  );
};

export type GridImageProps = Omit<ImageProps, 'borderRadius' | 'shadow'> & {
  borderRadius?: BorderRadiusKey;
  shadow?: boolean;
  ratio?: number;
  fixedSize?: boolean;
  className?: string;
};

export const GridImage: React.FC<GridImageProps> = props => {
  const {
    shadow = false,
    borderRadius = 's',
    ratio = 1,
    fixedSize = false,
    className,
    fluid,
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
    <div css={containerStyles} className={className}>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        `}
      >
        <Image fluid={fluid} shadow={shadow} borderRadius={borderRadius} />
      </div>
    </div>
  );
};
