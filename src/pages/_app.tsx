import 'focus-visible';
import type { AppProps } from 'next/app';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { ThemeContextProvider } from 'client/store/theme/context';
import { Page } from 'client/components/layout/Page';
import { SearchQueryContextProvider } from 'client/store/search/context';

const App: React.FC<AppProps> = props => {
  const { Component, pageProps } = props;

  return (
    <ThemeContextProvider>
      <EmotionThemeProvider>
        <SearchQueryContextProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </SearchQueryContextProvider>
      </EmotionThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
