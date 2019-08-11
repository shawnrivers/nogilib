import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "@reach/router";

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

export default (props: CdsData) => {
  const singles = props.data.allSinglesJson.edges;
  const albums = props.data.allAlbumsJson.edges;

  return (
    <div>
      <nav>
        <Link to="#singles">Singles</Link>
        <br />
        <Link to="#albums">Albums</Link>
      </nav>
      <h1>CDs</h1>
      <div id="singles">
        {singles.map(({ node }) => (
          <div key={node.number}>
            <h3>{node.title}</h3>
            <Link to={`/single/${node.number}`}>
              <img
                src={node.artworks[0].medium}
                width="300px"
                alt={node.title}
              />
            </Link>
          </div>
        ))}
      </div>
      <div id="albums">
        {albums.map(({ node }) => (
          <div key={node.number}>
            <h3>{node.title}</h3>
            <Link to={`/album/${node.number}`}>
              <img
                src={node.artworks[0].medium}
                width="300px"
                alt={node.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
