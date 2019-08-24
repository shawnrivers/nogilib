import * as React from "react";
import { graphql } from "gatsby";
import { Cds } from "../../components/templates/Cds";

export const query = graphql`
  query CdsContainerQuery {
    allAlbumsJson {
      edges {
        node {
          title
          number
          artworks {
            large
            medium
            small
          }
        }
      }
    }
    allSinglesJson {
      edges {
        node {
          title
          number
          artworks {
            large
            medium
            small
          }
        }
      }
    }
  }
`;

interface CdsData {
  data: {
    allSinglesJson: {
      edges: {
        node: {
          title: string;
          number: string;
          artworks: {
            large: string;
            medium: string;
            small: string;
          }[];
        };
      }[];
    };
    allAlbumsJson: {
      edges: {
        node: {
          title: string;
          number: string;
          artworks: {
            large: string;
            medium: string;
            small: string;
          }[];
        };
      }[];
    };
  };
  pageContext: {
    cdType: string;
    locale: string;
  };
}

const CdsTemp = ({ data, pageContext }: CdsData) => {
  console.log({ data, pageContext });

  return data ? (
    <Cds
      page={pageContext.cdType}
      singles={data.allSinglesJson}
      albums={data.allAlbumsJson}
    />
  ) : null;
};

export default CdsTemp;
