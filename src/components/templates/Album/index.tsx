import * as React from "react";
import { graphql } from "gatsby";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import styles from "./album.module.scss";

export const query = graphql`
  query($number: String!) {
    albumsJson(number: { eq: $number }) {
      title
      number
      artworks {
        large
        medium
      }
      songs {
        key
        title
        type
        focusPerformers {
          name
          type
        }
      }
      release
    }
  }
`;

interface AlbumData {
  data: {
    albumsJson: {
      title: string;
      number: string;
      artworks: {
        large: string;
        medium: string;
      }[];
      songs: {
        key: string;
        title: string;
        type: string;
        focusPerformers: {
          name: string[];
          type: string;
        };
      }[];
      release: string;
    };
  };
}

const Album = ({ data }: AlbumData) => (
  <Layout>
    <nav>
      <LocalizedLink to="/cds/?page=albums">
        <ArrowBackIcon className={styles.back} />
      </LocalizedLink>
    </nav>
    <main>
      {data ? (
        <Cd
          type="album"
          title={data.albumsJson.title}
          number={data.albumsJson.number}
          artworks={data.albumsJson.artworks}
          songs={data.albumsJson.songs}
          release={data.albumsJson.release}
        />
      ) : (
        <h1>Album Page</h1>
      )}
    </main>
  </Layout>
);

export default Album;
