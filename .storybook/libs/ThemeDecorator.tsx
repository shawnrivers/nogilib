/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import { ThemeProvider } from '@emotion/react';
import { themes } from 'client/styles/tokens';

export const ThemeDecorator = () => {
  return (Story: any, context: any) => {
    console.log({ Story, context });

    const themeKey = context.globals.theme as 'light' | 'dark';

    return (
      <ThemeProvider theme={themes[themeKey]}>
        <div
          css={css`
            padding: 24px;
            background-color: ${themeKey === 'dark'
              ? themes.dark.colors.global.gray8
              : themes.dark.colors.global.white};
          `}
        >
          <Story />
        </div>
      </ThemeProvider>
    );
  };
};
