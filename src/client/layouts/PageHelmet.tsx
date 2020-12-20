import * as React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useSiteMetadata } from 'client/hooks/useSiteMetadata';

type PageHelmetProps = {
  title?: string;
  description?: string;
};

export const PageHelmet: React.FC<PageHelmetProps> = props => {
  const { title, description } = props;
  const { title: siteTitle, description: siteDescription } = useSiteMetadata();

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description ?? siteDescription;

  return (
    <ReactHelmet>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={pageDescription} />
      <title>{pageTitle}</title>
    </ReactHelmet>
  );
};
