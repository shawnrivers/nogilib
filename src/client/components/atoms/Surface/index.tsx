/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ThemeColorVariants } from 'client/styles/colors';
import { ElevationKey } from 'client/styles/elevation';
import { useAppTheme } from 'client/styles/tokens';

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  foregroundColor?: keyof ThemeColorVariants;
  backgroundColor?: keyof ThemeColorVariants;
  elevation?: ElevationKey;
};

export const Surface: React.FC<SurfaceProps> = props => {
  const theme = useAppTheme();
  const {
    foregroundColor = 'standard',
    backgroundColor = 'standard',
    elevation = 4,
    children,
    ...divProps
  } = props;

  return (
    <div
      css={css`
        position: relative;
        overflow: hidden;
        background-color: ${theme.colors.theme.surface[backgroundColor]};
        color: ${theme.colors.theme.onSurface[foregroundColor]};
        box-shadow: ${theme.elevation[elevation].boxShadow};
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
