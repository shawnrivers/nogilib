/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useAppTheme } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';
import { componentElevationKey } from 'client/styles/elevation';
import { POSITION_STYLES } from 'client/features/Member/constants/positionStyles';

interface PositionCounterProps {
  center: number;
  fukujin: number;
  selected: number;
  under: number;
}

export const PositionCounter: React.FC<PositionCounterProps> = props => {
  const { center, fukujin, selected, under } = props;
  const theme = useAppTheme();

  return (
    <div
      css={css`
        border-color: ${theme.colors.theme.onBackground.standard};
        border-radius: 32px;
        border-style: solid;
        border-width: 2px;
        box-sizing: border-box;
        box-shadow: ${theme.elevation[
          componentElevationKey.componentOnBackground
        ].boxShadow};
        display: flex;
        height: 32px;
        max-width: 480px;
        width: 100%;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          line-height: 28px;
          width: 100%;

          &:not(:last-child) {
            border-color: ${theme.colors.theme.onBackground.standard};
            border-radius: 0;
            border-right-style: solid;
            border-right-width: 2px;
          }
        `}
      >
        {center !== 0 && (
          <div
            css={css`
              background-color: ${theme.colors.theme[
                POSITION_STYLES.center.backgroundColor
              ][POSITION_STYLES.center.backgroundColorVariant]};
              border-color: ${theme.colors.theme[
                POSITION_STYLES.center.foregroundColor
              ][POSITION_STYLES.center.textColorVariant]};
              text-align: center;
              width: ${(center / (under + selected)) * 100}%;
              min-width: max-content;
            `}
          >
            <Typography
              variant="body2"
              element="span"
              textColor={{
                on: POSITION_STYLES.center.foregroundColor,
                variant: POSITION_STYLES.center.textColorVariant,
              }}
              bold
              css={css`
                margin: 0 0.2em;
              `}
            >
              {center}
            </Typography>
          </div>
        )}
        {fukujin - center !== 0 && (
          <div
            css={css`
              background-color: ${theme.colors.theme[
                POSITION_STYLES.fukujin.backgroundColor
              ][POSITION_STYLES.fukujin.backgroundColorVariant]};
              border-color: ${theme.colors.theme[
                POSITION_STYLES.fukujin.foregroundColor
              ][POSITION_STYLES.fukujin.textColorVariant]};
              text-align: center;
              width: ${((fukujin - center) / (under + selected)) * 100}%;
              min-width: max-content;
            `}
          >
            <Typography
              variant="body2"
              element="span"
              textColor={{
                on: POSITION_STYLES.fukujin.foregroundColor,
                variant: POSITION_STYLES.fukujin.textColorVariant,
              }}
              bold
              css={css`
                margin: 0 0.2em;
              `}
            >
              {fukujin - center}
            </Typography>
          </div>
        )}
        {selected - fukujin !== 0 && (
          <div
            css={css`
              background-color: ${theme.colors.theme[
                POSITION_STYLES.selected.backgroundColor
              ][POSITION_STYLES.selected.backgroundColorVariant]};
              border-color: ${theme.colors.theme[
                POSITION_STYLES.selected.foregroundColor
              ][POSITION_STYLES.selected.textColorVariant]};
              text-align: center;
              width: ${((selected - fukujin) / (under + selected)) * 100}%;
              min-width: max-content;
            `}
          >
            <Typography
              variant="body2"
              element="span"
              textColor={{
                on: POSITION_STYLES.selected.foregroundColor,
                variant: POSITION_STYLES.selected.textColorVariant,
              }}
              bold
              css={css`
                margin: 0 0.2em;
              `}
            >
              {selected - fukujin}
            </Typography>
          </div>
        )}
        {under !== 0 && (
          <div
            css={css`
              background-color: ${theme.colors.theme[
                POSITION_STYLES.under.backgroundColor
              ][POSITION_STYLES.under.backgroundColorVariant]};
              border-color: ${theme.colors.theme[
                POSITION_STYLES.under.foregroundColor
              ][POSITION_STYLES.under.textColorVariant]};
              text-align: center;
              line-height: 28px;
              width: ${(under / (under + selected)) * 100}%;
              min-width: max-content;
            `}
          >
            <Typography
              variant="body2"
              element="span"
              textColor={{
                on: POSITION_STYLES.under.foregroundColor,
                variant: POSITION_STYLES.under.textColorVariant,
              }}
              bold
              css={css`
                margin: 0 0.2em;
              `}
            >
              {under}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
