/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Hashtag } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { useAppContext } from 'client/hooks/useAppContext';
import { useAppTheme, commonStyles } from 'client/styles/tokens';

export default {
  title: 'HashTag',
  decorators: [ThemeDecorator(), withKnobs],
};

export const All: React.FC = () => {
  const { setThemeKey } = useAppContext();

  const selectThemeKey = select(
    'Theme',
    {
      Dark: 'dark',
      Light: 'light',
    },
    'dark'
  );

  React.useEffect(() => setThemeKey(selectThemeKey), [
    selectThemeKey,
    setThemeKey,
  ]);
  const theme = useAppTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background.standard};
        min-width: 100vw;
        min-height: 100vh;
        padding: ${commonStyles.spacing.l};
      `}
    >
      <Hashtag>hashtag</Hashtag>
    </div>
  );
};
