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
}

export default (props: RouteComponentProps<CdsData>) => {
  const query = React.useMemo(() => {
    if (props.location) {
      if (props.location.search !== "") {
        return props.location.search;
      }
    }
    return "?page=singles";
  }, [props.location]);

  console.log({ query, location: props.location });

  return props.data ? (
    <Cds
      query={query}
      singles={props.data.allSinglesJson}
      albums={props.data.allAlbumsJson}
    />
  ) : null;
};
