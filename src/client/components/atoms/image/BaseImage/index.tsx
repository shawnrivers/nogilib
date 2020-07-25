import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import React from 'react';

type DataType = {
  allFile: {
    nodes: {
      relativePath: string;
      childImageSharp: {
        fluid: {
          src: string;
          srcSet: string;
          base64: string;
          aspectRatio: number;
          sizes: string;
        };
      };
    }[];
  };
};

export type BaseImageProps = {
  src: string;
} & React.ComponentProps<typeof Img>;

export const BaseImage: React.FC<BaseImageProps> = ({ src, ...props }) => {
  const data: DataType = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () => data.allFile.nodes.find(({ relativePath }) => src === relativePath),
    [data.allFile.nodes, src]
  );

  return match?.childImageSharp.fluid ? (
    <Img fluid={match?.childImageSharp.fluid} {...props} />
  ) : null;
};
