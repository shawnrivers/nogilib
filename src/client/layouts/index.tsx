import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Page } from 'client/components/templates/Page';
import { Helmet } from 'client/layouts/Helmet';
import { AppContextProvider } from 'client/store/app/context';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { AllImagesContextProvider } from 'client/store/images/context';
import { ThemeContextProvider } from 'client/store/theme/context';

const AppLayout: React.FC<RouteComponentProps> = props => {
  return (
    <AllImagesContextProvider>
      <AppContextProvider>
        <ThemeContextProvider>
          <Helmet />
          <EmotionThemeProvider>
            <Page>{props.children}</Page>
          </EmotionThemeProvider>
        </ThemeContextProvider>
      </AppContextProvider>
    </AllImagesContextProvider>
  );
};

export default AppLayout;
