import 'focus-visible';
import * as React from 'react';
import type { AppProps } from 'next/app';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { ThemeContextProvider } from 'client/store/theme/context';
import { Page } from 'client/components/layout/Page';
import { SearchContextProvider } from 'client/store/search/context';
import { setupAxe } from 'client/libs/axe';

const App: React.FC<AppProps> = props => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    setupAxe();
  }, []);

  return (
    <ThemeContextProvider>
      <EmotionThemeProvider>
        <SearchContextProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </SearchContextProvider>
      </EmotionThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
