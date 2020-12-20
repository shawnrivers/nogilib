import { useStaticQuery, graphql } from 'gatsby';
import { useTranslations } from 'client/hooks/useTranslations';

type SiteMetadata = {
  title: string;
  siteUrl: string;
  description: string;
};

export const useSiteMetadata = (): SiteMetadata => {
  const { getTranslation } = useTranslations();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return {
    ...siteMetadata,
    description: getTranslation(siteMetadata.description),
  };
};
