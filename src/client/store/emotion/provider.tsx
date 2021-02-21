/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/core';
import { ThemeProvider } from '@emotion/react';
import * as React from 'react';
import 'focus-visible';
import { themes } from 'client/styles/tokens';
import { useDarkModeMediaQuery } from 'client/store/theme/hook/useDarkModeMediaQuery';
import { useLocalStorageThemeMode } from 'client/store/theme/hook/useLocalStorageThemeMode';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';

/**
 * NOTE:
 * EmotionThemeProvider should be put used as a descendant of ThemeContextProvider.
 */
export const EmotionThemeProvider: React.FC = props => {
  const { themeKey } = useThemeContext();

  useDarkModeMediaQuery();
  useLocalStorageThemeMode();

  return (
    <ThemeProvider theme={themes[themeKey]}>
      <Global
        styles={css`
          html[data-theme='light'] body {
            --color-primary-standard: #cb78d9;
            --color-primary-variant0: #ae37c3;
            --color-primary-variant1: #812990;
            --color-secondary-standard: #fbe297;
            --color-secondary-variant0: #fad566;
            --color-secondary-variant1: #f8c630;
            --color-background-standard: #ffffff;
            --color-background-variant0: #cccccc;
            --color-background-variant1: #999999;
            --color-surface-standard: #ffffff;
            --color-surface-variant0: #cccccc;
            --color-surface-variant1: #999999;
            --color-onPrimary-standard: #ffffff;
            --color-onPrimary-variant0: #cccccc;
            --color-onPrimary-variant1: #999999;
            --color-onSecondary-standard: #1a1a1a;
            --color-onSecondary-variant0: #4d4d4d;
            --color-onSecondary-variant1: #808080;
            --color-onBackground-standard: #1a1a1a;
            --color-onBackground-variant0: #666666;
            --color-onBackground-variant1: #999999;
            --color-onSurface-standard: #1a1a1a;
            --color-onSurface-variant0: #666666;
            --color-onSurface-variant1: #999999;

            --elevation-white-overlay-transparency-0: none;
            --elevation-white-overlay-transparency-1: none;
            --elevation-white-overlay-transparency-2: none;
            --elevation-white-overlay-transparency-3: none;
            --elevation-white-overlay-transparency-4: none;
            --elevation-white-overlay-transparency-5: none;
            --elevation-white-overlay-transparency-6: none;
            --elevation-white-overlay-transparency-7: none;
            --elevation-white-overlay-transparency-8: none;
            --elevation-white-overlay-transparency-9: none;
            --elevation-white-overlay-transparency-10: none;
            --elevation-white-overlay-transparency-11: none;
            --elevation-white-overlay-transparency-12: none;
            --elevation-white-overlay-transparency-13: none;
            --elevation-white-overlay-transparency-14: none;
            --elevation-white-overlay-transparency-15: none;
            --elevation-white-overlay-transparency-16: none;
            --elevation-white-overlay-transparency-17: none;
            --elevation-white-overlay-transparency-18: none;
            --elevation-white-overlay-transparency-19: none;
            --elevation-white-overlay-transparency-20: none;
            --elevation-white-overlay-transparency-21: none;
            --elevation-white-overlay-transparency-23: none;
            --elevation-white-overlay-transparency-24: none;
          }

          html[data-theme='dark'] body {
            --color-primary-standard: #cb78d9;
            --color-primary-variant0: #ae37c3;
            --color-primary-variant1: #812990;
            --color-secondary-standard: #fbe297;
            --color-secondary-variant0: #fad566;
            --color-secondary-variant1: #f8c630;
            --color-background-standard: #1a1a1a;
            --color-background-variant0: #4d4d4d;
            --color-background-variant1: #808080;
            --color-surface-standard: #1a1a1a;
            --color-surface-variant0: #4d4d4d;
            --color-surface-variant1: #808080;
            --color-onPrimary-standard: #ffffff;
            --color-onPrimary-variant0: #cccccc;
            --color-onPrimary-variant1: #999999;
            --color-onSecondary-standard: #1a1a1a;
            --color-onSecondary-variant0: #4d4d4d;
            --color-onSecondary-variant1: #808080;
            --color-onBackground-standard: #ffffff;
            --color-onBackground-variant0: #cccccc;
            --color-onBackground-variant1: #999999;
            --color-onSurface-standard: #ffffff;
            --color-onSurface-variant0: #cccccc;
            --color-onSurface-variant1: #999999;

            --elevation-white-overlay-transparency-0: rgba(255, 255, 255, 0);
            --elevation-white-overlay-transparency-1: rgba(255, 255, 255, 0.05);
            --elevation-white-overlay-transparency-2: rgba(255, 255, 255, 0.07);
            --elevation-white-overlay-transparency-3: rgba(255, 255, 255, 0.08);
            --elevation-white-overlay-transparency-4: rgba(255, 255, 255, 0.09);
            --elevation-white-overlay-transparency-5: rgba(255, 255, 255, 0.1);
            --elevation-white-overlay-transparency-6: rgba(255, 255, 255, 0.11);
            --elevation-white-overlay-transparency-7: rgba(255, 255, 255, 0.11);
            --elevation-white-overlay-transparency-8: rgba(255, 255, 255, 0.12);
            --elevation-white-overlay-transparency-9: rgba(255, 255, 255, 0.12);
            --elevation-white-overlay-transparency-10: rgba(
              255,
              255,
              255,
              0.13
            );
            --elevation-white-overlay-transparency-11: rgba(
              255,
              255,
              255,
              0.13
            );
            --elevation-white-overlay-transparency-12: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-13: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-14: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-15: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-16: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-17: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-18: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-19: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-20: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-21: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-23: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-24: rgba(
              255,
              255,
              255,
              0.16
            );
          }

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
            background-color: var(--color-background-standard);
            /* transition-property: background-color, color;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out; */
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
      <div>{props.children}</div>
    </ThemeProvider>
  );
};
