import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Page } from 'client/components/templates/Page';
import { Helmet } from 'client/layouts/Helmet';
import { AppContextProvider } from 'client/store/app/context';
import { ThemeProvider } from 'client/store/theme/context';
import { LoadingPage } from 'client/components/templates/LoadingPage';

const AppLayout: React.FC<RouteComponentProps> = props => {
  return typeof localStorage !== 'undefined' ? (
    <AppContextProvider>
      <Helmet />
      <ThemeProvider>
        <Page>{props.children}</Page>
      </ThemeProvider>
    </AppContextProvider>
  ) : (
    <LoadingPage />
  );
};

export default AppLayout;
