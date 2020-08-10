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
      <meta name="title" content="NOGILIB" />
      <meta
        name="description"
        content="NOGILIB is a Gatsby powered web application aiming at showing the information about Nogizaka46 in a user-friendly way."
      />
      <meta name="url" content="https://shawnrivers.github.io/nogilib/" />
      <meta name="og:title" content="NOGILIB" />
      <meta
        name="og:description"
        content="NOGILIB is a Gatsby powered web application aiming at showing the information about Nogizaka46 in a user-friendly way."
      />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://shawnrivers.github.io/nogilib/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/shawnrivers/nogilib/master/src/assets/images/design/preview.jpg"
      />
      <meta name="og:image:type" content="image/jpeg" />
      <meta name="og:image:width" content="2560" />
      <meta name="og:image:height" content="1280" />
      <meta name="og:image:alt" content="NOGILIB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yuxiao_he" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <title>NOGILIB</title>
      <html lang={language} />
    </ReactHelmet>
  );
};
