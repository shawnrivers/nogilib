import * as React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useAppContext } from 'client/store/app/hook';
import { useSiteMetadata } from 'client/hooks/useSiteMetadata';

export const Helmet: React.FC = () => {
  const { language } = useAppContext();
  const { title, siteUrl, description } = useSiteMetadata();

  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="url" content={siteUrl} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={siteUrl} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/shawnrivers/nogilib/main/src/assets/images/design/preview.jpg"
      />
      <meta name="og:image:type" content="image/jpeg" />
      <meta name="og:image:width" content="2560" />
      <meta name="og:image:height" content="1280" />
      <meta name="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yuxiao_he" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <title>{title}</title>
      <html lang={language} />
    </ReactHelmet>
  );
};
