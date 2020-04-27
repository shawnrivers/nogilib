import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img, { GatsbyImageProps } from "gatsby-image";

type DataType = {
  allFile: {
    edges: {
      node: {
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
      };
    }[];
  };
};

type ImageProps = {
  src: string;
} & GatsbyImageProps;

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const data: DataType = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  return <Img fluid={match?.node.childImageSharp.fluid} {...props} />;
};
