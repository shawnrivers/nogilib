/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'client/store/theme/context';
import { AppContextProvider } from 'client/store/app/context';

export const ThemeDecorator = () => {
  return (Story: any) => (
    <AppContextProvider>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </AppContextProvider>
  );
};
