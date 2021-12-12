import * as React from 'react';
import { css } from '@emotion/react';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { ThemeContextProvider } from 'client/store/theme/context';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import { ThemeMode } from 'client/types/themeMode';

type ThemeConsumerProps = {
  theme?: ThemeMode;
};

const ThemeConsumer: React.FC<ThemeConsumerProps> = props => {
  const { theme = 'light' } = props;

  const { setTheme } = useThemeContext();
  React.useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);

  return null;
};

export const ThemeDecorator = (options?: Partial<ThemeConsumerProps>) => {
  return (Story: any) => {
    return (
      <ThemeContextProvider>
        <EmotionThemeProvider>
          <div
            css={css`
              padding: 24px;
            `}
          >
            <ThemeConsumer theme={options?.theme} />
            <Story />
          </div>
        </EmotionThemeProvider>
      </ThemeContextProvider>
    );
  };
};
