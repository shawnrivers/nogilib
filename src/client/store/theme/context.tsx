/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { themes } from 'client/styles/tokens';
import { useDarkModeMediaQuery } from 'client/hooks/useDarkModeMediaQuery';
import { useAppContext } from 'client/hooks/useAppContext';

export const ThemeProvider: React.FC = props => {
  const { themeKey } = useAppContext();

  useDarkModeMediaQuery();

  return (
    <EmotionThemeProvider theme={themes[themeKey]}>
      <div
        css={css`
          & * {
            transition-property: background-color, color;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
          }
        `}
      >
        {props.children}
      </div>
    </EmotionThemeProvider>
  );
};
