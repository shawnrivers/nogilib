/**@jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { themes } from 'client/styles/tokens';
import { useDarkModeMediaQuery } from 'client/hooks/useDarkModeMediaQuery';
import { useLocalStorageForContext } from 'client/hooks/useLocalStorageForContext';
import 'focus-visible';
import { useThemeContext } from 'client/store/theme/hook';

/**
 * NOTE:
 * EmotionThemeProvider should be put used as a descendant of ThemeContextProvider.
 */
export const EmotionThemeProvider: React.FC = props => {
  const { themeKey } = useThemeContext();

  useDarkModeMediaQuery();
  useLocalStorageForContext();

  return (
    <ThemeProvider theme={themes[themeKey]}>
      <Global
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          ul,
          ol,
          li {
            margin-block-end: 0;
            margin-block-start: 0;
            margin-inline-end: 0;
            margin-inline-start: 0;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
          }

          a {
            color: inherit;
            text-decoration: inherit;
            outline: inherit;

            :focus {
              outline-offset: 0;
            }
          }

          ul,
          ol {
            list-style-type: none;
            padding-inline-start: 0;
          }

          button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font: inherit;
            margin: 0;
            outline: inherit;
            padding: 0;
          }

          input {
            margin: 0;
            border: 0;
            padding: 0;
            display: inline-block;
            vertical-align: middle;
            white-space: normal;
            background: none;
          }

          .js-focus-visible :focus:not(.focus-visible) {
            outline: none;
          }

          .focus-visible {
            outline: auto;
          }
        `}
      />
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
    </ThemeProvider>
  );
};
