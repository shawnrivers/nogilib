import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Page } from 'client/components/templates/Page';
import { Helmet } from 'client/layouts/Helmet';
import { LanguageContextProvider } from 'client/store/language/context';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { ThemeContextProvider } from 'client/store/theme/context';

const AppLayout: React.FC<RouteComponentProps> = props => {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <Helmet />
        <EmotionThemeProvider>
          <Page>{props.children}</Page>
        </EmotionThemeProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
};

export default AppLayout;
