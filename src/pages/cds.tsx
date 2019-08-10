import * as React from "react";
import { graphql } from "gatsby";

interface CdsData {
  data: {
    allSinglesJson: {
      nodes: {
        title: string;
        number: string;
        artworks: {
          medium: string;
        }[];
      }[];
    };
  };
}

export default (props: CdsData) => {
  const cds = props.data.allSinglesJson.nodes;
  console.log(cds);

  return (
    <div>
      <h1>CDs</h1>
      <div>
        {cds.map(cd => (
          <div key={cd.number}>
            <h3>{cd.title}</h3>
            <img src={cd.artworks[0].medium} width="300px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query getSingles {
    allSinglesJson {
      nodes {
        title
        number
        artworks {
          medium
        }
      }
    }
  }
`;
