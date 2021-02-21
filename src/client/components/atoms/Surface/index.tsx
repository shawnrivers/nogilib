/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
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
    isClickable = false,
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

  const normalStyles = React.useMemo(
    () => ({
      container: css`
        position: relative;
        background-color: var(${backgroundColorVarName});
        color: var(${foregroundColorVarName});
        box-shadow: ${commonStyles.elevations[elevation].boxShadow};
        z-index: ${commonStyles.elevations[elevation].zIndex};
        transition: all 0.3s ease-out;
        transition-property: background-color box-shadow;
      `,
      overlay: css`
        width: 100%;
        height: 100%;
        background-color: var(
          ${getElevationWhiteOverlayTransparencyVarName(elevation)}
        );
        transition: background-color 0.3s ease-out;
      `,
    }),
    [backgroundColorVarName, elevation, foregroundColorVarName]
  );

  const hoveredStyles = React.useMemo(
    () => ({
      container: css`
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            box-shadow: ${commonStyles.elevations[
              componentElevationKey.elevatedComponentOnBackground
            ].boxShadow};
          }
        }
      `,
      overlay: css`
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            background-color: var(
              ${getElevationWhiteOverlayTransparencyVarName(
                componentElevationKey.elevatedComponentOnBackground
              )}
            );
          }
        }
      `,
    }),
    []
  );

  return (
    <div
      css={
        isClickable
          ? [normalStyles.container, hoveredStyles.container]
          : normalStyles.container
      }
      className={className}
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
