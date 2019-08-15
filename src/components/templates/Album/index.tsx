import * as React from "react";
import { graphql } from "gatsby";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/atoms/Layout";

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

interface AlbumData {
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

const Album = (props: AlbumData) => (
  <Layout>
    <nav>
      <LocalizedLink to="/cds/?page=albums">
        <button>Back</button>
      </LocalizedLink>
    </nav>
    <main>
      {props.data ? <Cd data={props.data.albumsJson} /> : <h1>Album Page</h1>}
    </main>
  </Layout>
);

export default Album;
