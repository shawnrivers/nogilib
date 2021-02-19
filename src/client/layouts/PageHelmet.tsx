import * as React from 'react';
import Head from 'next/head';
import { capitalizeFirstLetter, capitalizeText } from 'utils/strings';

const SITE_TITLE = 'NOGILIB';
const SITE_URL = 'https://nogilib.com';
const SITE_DESCRIPTION =
  'NOGILIB is a web app for showing the information about Nogizaka46 in a user-friendly way.';

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
  const pageTitleText = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;

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

  const pageDescription = description ?? SITE_DESCRIPTION;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="url" content={SITE_URL} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={pageDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={SITE_URL} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/shawnrivers/nogilib/main/src/assets/images/design/preview.jpg"
      />
      <meta name="og:image:type" content="image/jpeg" />
      <meta name="og:image:width" content="2560" />
      <meta name="og:image:height" content="1280" />
      <meta name="og:image:alt" content={SITE_TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yuxiao_he" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <title>{pageTitle}</title>
    </Head>
  );
};
