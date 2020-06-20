import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import { themes } from 'client/styles/tokens';

export const ThemeDecorator = () => {
  return (Story: any) => (
    <ThemeProvider theme={themes.light}>
      <Story />
    </ThemeProvider>
  );
};
