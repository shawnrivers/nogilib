import * as React from "react";
import { graphql } from "gatsby";
import { Cds } from "client/components/templates/Cds";
import { CdType } from "client/types/responseTypes";

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
    currentTab: CdType;
    locale: string;
  };
}

const CdsContainer = ({
  data: { allSinglesJson, allAlbumsJson },
  pageContext: { currentTab },
}: CdsData) => {
  const cds = React.useMemo(
    () =>
      currentTab === CdType.Singles
        ? allSinglesJson.edges
        : allAlbumsJson.edges,
    [currentTab, allSinglesJson, allAlbumsJson]
  );

  return allSinglesJson !== undefined && allAlbumsJson !== undefined ? (
    <Cds page={currentTab} cds={cds} />
  ) : null;
};

export default CdsContainer;
