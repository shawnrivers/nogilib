import { css } from '@emotion/react';
import * as React from 'react';
import {
  componentElevationKey,
  ElevationKey,
  getElevationWhiteOverlayTransparencyVarName,
} from 'client/styles/tokens/elevation';
import {
  getColorVarName,
  mapBackgroundToForeground,
  ThemeColorsBackground,
  ThemeColorVariants,
} from 'client/styles/tokens/colors';
import { commonStyles } from 'client/styles/tokens';

export type SurfaceProps = {
  foregroundColor?: keyof ThemeColorVariants;
  backgroundColor?: keyof ThemeColorVariants;
  colorType?: keyof ThemeColorsBackground;
  elevation?: ElevationKey;
  isClickable?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Surface: React.FC<SurfaceProps> = props => {
  const {
    foregroundColor: foregroundColorVariant = 'standard',
    backgroundColor: backgroundColorVariant = 'standard',
    colorType = 'surface',
    elevation = componentElevationKey.background,
    className,
    children,
  } = props;

  const backgroundColorVarName = getColorVarName(
    colorType,
    backgroundColorVariant
  );
  const foregroundColorVarName = getColorVarName(
    mapBackgroundToForeground(colorType),
    foregroundColorVariant
  );

  return (
    <div
      css={css`
        position: relative;
        background-color: var(${backgroundColorVarName});
        color: var(${foregroundColorVarName});
        box-shadow: ${commonStyles.elevations[elevation].boxShadow};
        z-index: ${commonStyles.elevations[elevation].zIndex};
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        transition-property: background-color, box-shadow;
      `}
      className={className}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          background-color: var(
            ${getElevationWhiteOverlayTransparencyVarName(elevation)}
          );
          transition: background-color 0.3s ease-out;
        `}
      >
        {children}
      </div>
    </div>
  );
};
