/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import {
  mapBackgroundToForeground,
  ThemeColorsBackground,
  ThemeColorVariants,
} from 'client/styles/colors';
import { componentElevationKey, ElevationKey } from 'client/styles/elevation';
import { useAppTheme } from 'client/styles/tokens';

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  foregroundColor?: keyof ThemeColorVariants;
  backgroundColor?: keyof ThemeColorVariants;
  colorType?: keyof ThemeColorsBackground;
  elevation?: ElevationKey;
};

export const Surface: React.FC<SurfaceProps> = props => {
  const theme = useAppTheme();
  const {
    foregroundColor: foregroundColorVariant = 'standard',
    backgroundColor: backgroundColorVariant = 'standard',
    colorType = 'surface',
    elevation = componentElevationKey.background,
    children,
    ...divProps
  } = props;

  const backgroundColor = theme.colors.theme[colorType][backgroundColorVariant];
  const foregroundColor =
    theme.colors.theme[mapBackgroundToForeground(colorType)][
      foregroundColorVariant
    ];

  return (
    <div
      css={css`
        position: relative;
        background-color: ${backgroundColor};
        color: ${foregroundColor};
        box-shadow: ${theme.elevation[elevation].boxShadow};
        z-index: ${theme.elevation[elevation].zIndex};
      `}
      {...divProps}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          background-color: ${theme.elevation[elevation]
            .whiteOverlayTransparency};
        `}
      >
        {children}
      </div>
    </div>
  );
};
