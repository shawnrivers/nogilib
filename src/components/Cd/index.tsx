import * as React from "react";
import { graphql } from "gatsby";

interface CdData {
  data: {
    albumsJson: {
      title: string;
      number: string;
      artworks: {
        medium: string;
      }[];
    };
  };
}

export default (props: CdData) => {
  const cd = props.data.albumsJson;
  console.log(cd);

  return cd ? (
    <div>
      <h1>Cd Page</h1>
      <h2>{cd.title}</h2>
      <img src={cd.artworks[0].medium} width="300px" />
    </div>
  ) : (
    <h1>Cd Page</h1>
  );
};

export const query = graphql`
  query($number: String!) {
    albumsJson(number: { eq: $number }) {
      title
      number
      artworks {
        medium
      }
    }
  }
`;
