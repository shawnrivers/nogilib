import * as React from 'react';
import { css } from '@emotion/core';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { ThemeContextProvider } from 'client/store/theme/context';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import { Typography } from 'client/components/atoms/Typography';

const ThemeConsumer: React.FC = () => {
  const { themeMode, setTheme } = useThemeContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'light' || value === 'dark') {
      setTheme(value);
    }
  };

  return (
    <div>
      <label
        css={css`
          display: inline-flex;
          align-items: center;
        `}
      >
        <Typography
          variant="body2"
          element="span"
          css={css`
            margin-right: 0.5rem;
          `}
        >
          Color Theme:
        </Typography>
        <select value={themeMode} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export const ThemeDecorator = () => {
  return (Story: any) => {
    return (
      <ThemeContextProvider>
        <EmotionThemeProvider>
          <ThemeConsumer />
          <hr
            css={css`
              margin-top: 1.5rem;
            `}
          />
          <div
            css={css`
              margin-top: 1.5rem;
            `}
          >
            <Story />
          </div>
        </EmotionThemeProvider>
      </ThemeContextProvider>
    );
  };
};
