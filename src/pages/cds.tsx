import * as React from "react";
import { graphql } from "gatsby";
import { Cds } from "components/templates/Cds";
import { RouteComponentProps } from "@reach/router";
import "styles/app.scss";

export const query = graphql`
  query CdsQuery {
    allAlbumsJson {
      edges {
        node {
          title
          number
          artworks {
            medium
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
            medium
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
            medium: string;
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
            medium: string;
          }[];
        };
      }[];
    };
  };
}

export default (props: RouteComponentProps<CdsData>) => {
  return props.data ? (
    <Cds
      query={props.location ? props.location.search : ""}
      singles={props.data.allSinglesJson}
      albums={props.data.allAlbumsJson}
    />
  ) : null;
};
