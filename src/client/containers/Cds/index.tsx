import * as React from "react";
import { graphql } from "gatsby";
import { Cds } from "client/components/templates/Cds";
import { CdTabType } from "client/types/tabs";
import { CdResponse } from "server/models/commons";

export const query = graphql`
  query CdsQuery {
    allAlbumsJson {
      edges {
        node {
          title
          number
          artworks
        }
      }
    }
    allSinglesJson {
      edges {
        node {
          title
          number
          artworks
        }
      }
    }
  }
`;

type CdsData = {
  data: {
    allSinglesJson: {
      edges: {
        node: Pick<CdResponse, "number" | "artworks" | "title">;
      }[];
    };
    allAlbumsJson: {
      edges: {
        node: Pick<CdResponse, "number" | "artworks" | "title">;
      }[];
    };
  };
  pageContext: {
    currentTab: CdTabType;
    locale: string;
  };
};

const CdsContainer = ({
  data: { allSinglesJson, allAlbumsJson },
  pageContext: { currentTab },
}: CdsData) => {
  const cds = React.useMemo(
    () =>
      currentTab === CdTabType.Singles
        ? allSinglesJson.edges
        : allAlbumsJson.edges,
    [currentTab, allSinglesJson, allAlbumsJson]
  );

  return allSinglesJson !== undefined && allAlbumsJson !== undefined ? (
    <Cds page={currentTab} cds={cds} />
  ) : null;
};

export default CdsContainer;
