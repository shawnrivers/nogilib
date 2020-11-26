/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import {
  componentElevationKey,
  ElevationKey,
} from 'client/styles/tokens/elevation';
import {
  mapBackgroundToForeground,
  ThemeColorsBackground,
  ThemeColorVariants,
} from 'client/styles/tokens/colors';
import { useAppTheme } from 'client/styles/tokens';

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  foregroundColor?: keyof ThemeColorVariants;
  backgroundColor?: keyof ThemeColorVariants;
  colorType?: keyof ThemeColorsBackground;
  elevation?: ElevationKey;
  isClickable?: boolean;
};

export const Surface: React.FC<SurfaceProps> = props => {
  const theme = useAppTheme();
  const {
    foregroundColor: foregroundColorVariant = 'standard',
    backgroundColor: backgroundColorVariant = 'standard',
    colorType = 'surface',
    elevation = componentElevationKey.background,
    isClickable = false,
    children,
    ...divProps
  } = props;

  const backgroundColor = theme.colors.theme[colorType][backgroundColorVariant];
  const foregroundColor =
    theme.colors.theme[mapBackgroundToForeground(colorType)][
      foregroundColorVariant
    ];

  const normalStyles = React.useMemo(
    () => ({
      container: css`
        position: relative;
        background-color: ${backgroundColor};
        color: ${foregroundColor};
        box-shadow: ${theme.elevation[elevation].boxShadow};
        z-index: ${theme.elevation[elevation].zIndex};
        transition: all 0.3s ease-out;
        transition-property: background-color box-shadow;
      `,
      overlay: css`
        width: 100%;
        height: 100%;
        background-color: ${theme.elevation[elevation]
          .whiteOverlayTransparency};
        transition: background-color 0.3s ease-out;
      `,
    }),
    [backgroundColor, elevation, foregroundColor, theme]
  );

  const hoveredStyles = React.useMemo(
    () => ({
      container: css`
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            box-shadow: ${theme.elevation[
              componentElevationKey.elevatedComponentOnBackground
            ].boxShadow};
          }
        }
      `,
      overlay: css`
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            background-color: ${theme.elevation[
              componentElevationKey.elevatedComponentOnBackground
            ].whiteOverlayTransparency};
          }
        }
      `,
    }),
    [theme]
  );

  return (
    <div
      css={
        isClickable
          ? [normalStyles.container, hoveredStyles.container]
          : normalStyles.container
      }
      {...divProps}
    >
      <div
        css={
          isClickable
            ? [normalStyles.overlay, hoveredStyles.overlay]
            : normalStyles.overlay
        }
      >
        {children}
      </div>
    </div>
  );
};
