import * as React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useSiteMetadata } from 'client/hooks/useSiteMetadata';
import { capitalizeFirstLetter, capitalizeText } from 'utils/strings';

type PageHelmetProps = {
  title?: string;
  description?: string;
  options?: {
    textTransform?: 'capitalize-first-letter' | 'capitalize' | 'none';
  };
};

export const PageHelmet: React.FC<PageHelmetProps> = props => {
  const {
    title,
    description,
    options = { textTransform: 'capitalize-first-letter' },
  } = props;
  const { title: siteTitle, description: siteDescription } = useSiteMetadata();

  const pageTitleText = title ? `${title} | ${siteTitle}` : siteTitle;

  let pageTitle;

  switch (options.textTransform) {
    case 'capitalize':
      pageTitle = capitalizeText(pageTitleText);
      break;
    case 'capitalize-first-letter':
      pageTitle = capitalizeFirstLetter(pageTitleText);
      break;
    default:
      pageTitle = pageTitleText;
      break;
  }

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
