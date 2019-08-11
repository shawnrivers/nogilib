import * as React from "react";
import { graphql } from "gatsby";
import { Cds } from "components/templates/Cds";
import "styles/app.scss";
import { Layout } from "components/templates/Layout";

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

export default (props: CdsData) => (
  <Layout>
    <Cds
      singles={props.data.allSinglesJson}
      albums={props.data.allAlbumsJson}
    />
  </Layout>
);
