/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { useAppTheme } from 'client/styles/tokens';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';

export type GlowStickBadgeProps = {
  color: GlowStickColorType;
  size?: number;
  className?: string;
};

export const GlowStickBadge: React.FC<GlowStickBadgeProps> = props => {
  const theme = useAppTheme();
  const { color, size = 24, className } = props;

  return (
    <div
      css={css`
        border-radius: 50%;
        background-color: ${theme.colors.glowStick[color]};
        box-shadow: ${theme.elevation[
          componentElevationKey.componentOnBackground
        ].boxShadow};
        z-index: ${theme.elevation[componentElevationKey.componentOnBackground]
          .zIndex};
        border: 1px solid ${theme.colors.theme.onBackground.standard};
        width: ${size}px;
        height: ${size}px;
      `}
      className={className}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          background-color: ${theme.elevation[
            componentElevationKey.componentOnBackground
          ].whiteOverlayTransparency};
        `}
      />
    </div>
  );
};
