import * as React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useAppContext } from 'client/hooks/useAppContext';

export const Helmet: React.FC = () => {
  const { language } = useAppContext();

  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="title" content="Nogizaka Lib" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@yuxiao_he" />
      <meta
        name="description"
        content="Nogizaka Lib is a Gatsby powered web application aiming at showing the information about Nogizaka46 in a user-friendly way."
      />
      <meta
        name="url"
        content="https://shawnrivers.github.io/nogizaka-lib-redesign/"
      />
      <meta name="og:title" content="Nogizaka Lib" />
      <meta
        name="og:description"
        content="Nogizaka Lib is a Gatsby powered web application aiming at showing the information about Nogizaka46 in a user-friendly way."
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/design/nogizakalib-preview.jpg"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <title>Nogizaka Lib</title>
      <html lang={language} />
    </ReactHelmet>
  );
};
