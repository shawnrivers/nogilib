import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { DiscographyPageData } from 'server/pages/discography';

export type DiscographyPageDataNode = {
  title: DiscographyPageData[0]['title'];
  key: DiscographyPageData[0]['key'];
  type: DiscographyPageData[0]['type'];
  number: DiscographyPageData[0]['number'];
  artwork: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  release: DiscographyPageData[0]['release'];
};

export const useDiscographyPageQuery = () =>
  useStaticQuery<{
    allDiscographyJson: {
      nodes: DiscographyPageDataNode[];
    };
  }>(graphql`
    query {
      allDiscographyJson {
        nodes {
          title
          key
          type
          number
          artwork {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          release
        }
      }
    }
  `);
