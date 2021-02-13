/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  GatsbyImage,
  GatsbyImageProps,
} from 'client/components/atoms/images/GatsbyImage';

export type GridImageProps = GatsbyImageProps & {
  shadow?: boolean;
  ratio?: number;
  fixedSize?: boolean;
  className?: string;
};

export const GridImage: React.FC<GridImageProps> = props => {
  const {
    borderRadius = 's',
    shadow = false,
    ratio = 1,
    fixedSize = false,
    className,
    imgStyle,
    ...gatsbyImageProps
  } = props;

  const theme = useAppTheme();

  const wrapperStyles = React.useMemo(() => {
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
    <div css={wrapperStyles} className={className}>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        `}
      >
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
              borderRadius={borderRadius}
              {...gatsbyImageProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
