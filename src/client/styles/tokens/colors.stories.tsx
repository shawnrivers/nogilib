/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
  ThemeColorKey,
  ThemeColorsBackground,
  mapBackgroundToForeground,
} from './colors';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { useThemeContext } from 'client/store/theme/hook';

export default {
  title: 'Design System/Colors',
  decorators: [ThemeDecorator(), withKnobs],
};

const colorVariants: ThemeColorKey[] = ['standard', 'variant0', 'variant1'];

const backgroundTypes: (keyof ThemeColorsBackground)[] = [
  'background',
  'surface',
  'primary',
  'secondary',
];

export const All: React.FC = () => {
  const { setThemeKey } = useThemeContext();
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
    <div>
      {backgroundTypes.map(backgroundType =>
        colorVariants.map(backgroundColorVariant => (
          <div
            key={`${backgroundType} ${backgroundColorVariant}`}
            css={css`
              background-color: ${theme.colors.theme[backgroundType][
                backgroundColorVariant
              ]};
              padding: ${commonStyles.spacing.m};
            `}
          >
            {colorVariants.map(foregroundColorVariant => (
              <Typography
                key={`${backgroundType} ${backgroundColorVariant} text ${foregroundColorVariant}`}
                variant="h4"
                element="p"
                textColor={{
                  on: mapBackgroundToForeground(backgroundType),
                  variant: foregroundColorVariant,
                }}
              >
                {`${backgroundType} ${backgroundColorVariant} text ${foregroundColorVariant}`}
              </Typography>
            ))}
          </div>
        ))
      )}
    </div>
  );
};
