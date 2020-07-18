import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Context } from 'client/store/app/context';
import { themes } from 'client/styles/tokens';
import { useDarkModeMediaQuery } from 'client/hooks/useDarkModeMediaQuery';

export const ThemeProvider: React.FC = props => {
  const { themeKey } = React.useContext(Context);

  useDarkModeMediaQuery();

  return (
    <EmotionThemeProvider theme={themes[themeKey]}>
      {props.children}
    </EmotionThemeProvider>
  );
};
