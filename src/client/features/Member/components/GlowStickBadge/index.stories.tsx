/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { GlowStickBadge } from '.';
import { useAppContext } from 'client/hooks/useAppContext';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { useAppTheme } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';

export default {
  title: 'GlowStickBadge',
  decorators: [ThemeDecorator(), withKnobs],
};

export const All: React.FC = () => {
  const { setThemeKey } = useAppContext();
  const theme = useAppTheme();

  const themeKey = select(
    'Theme',
    {
      Dark: 'dark',
      Light: 'light',
    },
    'dark'
  );

  React.useEffect(() => setThemeKey(themeKey), [themeKey, setThemeKey]);

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        padding: 24px;
        background-color: ${theme.colors.theme.background.standard};
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;

          & > * {
            margin: 8px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Red} />
          <Typography variant="body1">{GlowStickColorType.Red}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Yellow} />
          <Typography variant="body1">{GlowStickColorType.Yellow}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.White} />
          <Typography variant="body1">{GlowStickColorType.White}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Blue} />
          <Typography variant="body1">{GlowStickColorType.Blue}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Green} />
          <Typography variant="body1">{GlowStickColorType.Green}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Purple} />
          <Typography variant="body1">{GlowStickColorType.Purple}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Black} />
          <Typography variant="body1">{GlowStickColorType.Black}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Pink} />
          <Typography variant="body1">{GlowStickColorType.Pink}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.Orange} />
          <Typography variant="body1">{GlowStickColorType.Orange}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.LightBlue} />
          <Typography variant="body1">
            {GlowStickColorType.LightBlue}
          </Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.YellowGreen} />
          <Typography variant="body1">
            {GlowStickColorType.YellowGreen}
          </Typography>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;

            & > * {
              margin: 4px;
            }
          `}
        >
          <GlowStickBadge color={GlowStickColorType.None} />
          <Typography variant="body1">{GlowStickColorType.None}</Typography>
        </div>
      </div>
    </div>
  );
};
