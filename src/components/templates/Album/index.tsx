import * as React from "react";
import { graphql, Link } from "gatsby";
import { Cd } from "components/organisms/Cd";

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
  <div>
    <nav>
      <Link to="/cds">
        <button>Back</button>
      </Link>
    </nav>
    <main>
      {props.data ? <Cd data={props.data.albumsJson} /> : <h1>Album Page</h1>}
    </main>
  </div>
);

export default Album;
