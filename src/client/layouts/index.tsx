import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Page } from 'client/components/templates/Page';
import { Helmet } from 'client/layouts/Helmet';
import { AppContextProvider } from 'client/store/app/context';
import { LanguageProvider } from 'client/store/language/contenxt';
import { ThemeProvider } from 'client/store/theme/context';

const AppLayout: React.FC<RouteComponentProps> = props => {
  return (
    <AppContextProvider>
      <LanguageProvider>
        <Helmet />
        <ThemeProvider>
          <Page>{props.children}</Page>
        </ThemeProvider>
      </LanguageProvider>
    </AppContextProvider>
  );
};

export default AppLayout;
