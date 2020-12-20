import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Page } from 'client/components/templates/Page';
import { Helmet } from 'client/layouts/Helmet';
import { AppContextProvider } from 'client/store/app/context';
import { ThemeProvider } from 'client/store/theme/context';
import { AllImagesContextProvider } from 'client/store/images/context';

const AppLayout: React.FC<RouteComponentProps> = props => {
  return (
    <AllImagesContextProvider>
      <AppContextProvider>
        <Helmet />
        <ThemeProvider>
          <Page>{props.children}</Page>
        </ThemeProvider>
      </AppContextProvider>
    </AllImagesContextProvider>
  );
};

export default AppLayout;
