import 'focus-visible';
import type { AppProps } from 'next/app';
import { EmotionThemeProvider } from 'client/store/emotion/provider';
import { ThemeContextProvider } from 'client/store/theme/context';
import { Page } from 'client/components/templates/Page';

const App: React.FC<AppProps> = props => {
  const { Component, pageProps } = props;

  return (
    <ThemeContextProvider>
      <EmotionThemeProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </EmotionThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
