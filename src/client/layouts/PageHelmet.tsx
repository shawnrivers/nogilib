import * as React from 'react';
import Head from 'next/head';
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
  const pageTitleText = title ? `${title} | NOGILIB` : 'NOGILIB';

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

  const pageDescription =
    description ??
    'NOGILIB is a web app for showing the information about Nogizaka46 in a user-friendly way.';

  return (
    <Head>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={pageDescription} />
      <title>{pageTitle}</title>
    </Head>
  );
};
