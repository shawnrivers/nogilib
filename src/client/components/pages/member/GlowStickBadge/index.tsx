/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  componentElevationKey,
  getElevationWhiteOverlayTransparencyVarName,
} from 'client/styles/tokens/elevation';
import { commonStyles } from 'client/styles/tokens';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import {
  getColorVarName,
  getGlowStickColorVarName,
} from 'client/styles/tokens/colors';

export type GlowStickBadgeProps = {
  color: GlowStickColorType;
  size?: number;
  className?: string;
};

export const GlowStickBadge: React.FC<GlowStickBadgeProps> = props => {
  const { color, size = 24, className } = props;

  return (
    <div
      css={css`
        border-radius: 50%;
        background-color: var(${getGlowStickColorVarName(color)});
        box-shadow: ${commonStyles.elevations[
          componentElevationKey.componentOnBackground
        ].boxShadow};
        z-index: ${commonStyles.elevations[
          componentElevationKey.componentOnBackground
        ].zIndex};
        border: 1px solid var(${getColorVarName('onBackground', 'standard')});
        width: ${size}px;
        height: ${size}px;
      `}
      className={className}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          background-color: var(
            ${getElevationWhiteOverlayTransparencyVarName(
              componentElevationKey.componentOnBackground
            )}
          );
        `}
      />
    </div>
  );
};
