import * as React from "react";
import { graphql } from "gatsby";
import { Cds } from "components/templates/Cds";
import { CdType } from "types/responseTypes";

export const query = graphql`
  query CdsQuery {
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

const CdsContainer = ({
  data: { allSinglesJson, allAlbumsJson },
  pageContext: { cdType },
}: CdsData) => {
  const cds = React.useMemo(
    () =>
      cdType === CdType.Singles ? allSinglesJson.edges : allAlbumsJson.edges,
    [cdType, allSinglesJson, allAlbumsJson]
  );

  return allSinglesJson !== undefined && allAlbumsJson !== undefined ? (
    <Cds page={cdType} cds={cds} />
  ) : null;
};

export default CdsContainer;
