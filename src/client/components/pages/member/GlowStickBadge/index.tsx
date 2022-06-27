import { css } from '@emotion/react';
import {
  componentElevationKey,
  getElevationWhiteOverlayTransparencyVarName,
} from 'client/styles/tokens/elevation';
import { commonStyles } from 'client/styles/tokens';
import { GlowStickColor } from 'db/src/actors/Members/types';
import {
  getColorVarName,
  getGlowStickColorVarName,
} from 'client/styles/tokens/colors';
import { Typography } from 'client/components/atoms/Typography';
import { useTranslations } from 'client/i18n/hooks/useTranslations';

export type GlowStickBadgeProps = {
  color: GlowStickColor;
  size?: number;
  className?: string;
};

export const GlowStickBadge: React.FC<GlowStickBadgeProps> = props => {
  const { color, size = 16, className } = props;
  const { getTranslation } = useTranslations();

  return (
    <span
      css={css`
        display: inline-flex;
        align-items: center;
      `}
      className={className}
    >
      <span
        css={css`
          border-radius: 50%;
          background-color: var(${getGlowStickColorVarName(color)});
          border: 2px solid var(${getColorVarName('onBackground', 'standard')});
          width: ${size}px;
          height: ${size}px;
        `}
      >
        <span
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
      </span>
      <Typography
        capitalize
        variant="body3"
        as="span"
        textColor={{ on: 'onBackground', variant: 'variant0' }}
        css={css`
          margin-left: ${commonStyles.spacing.xxs};
          line-height: 1;
        `}
      >
        {getTranslation(color)}
      </Typography>
    </span>
  );
};
