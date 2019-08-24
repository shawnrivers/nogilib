import * as React from "react";
import { graphql } from "gatsby";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { FocusPerformersType, SongType } from "types/responseTypes";
import styles from "./album.module.scss";
import { motion } from "framer-motion";
import { Links } from "utils/constants";

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
        type: SongType;
        focusPerformers: {
          name: string[];
          type: FocusPerformersType;
        };
      }[];
      release: string;
    };
  };
}

const Album = ({ data }: AlbumData) => (
  <Layout className={styles.background}>
    <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
      <LocalizedLink to={Links.Albums} label="Back">
        <ArrowBackIcon className={styles.back} />
      </LocalizedLink>
    </motion.div>
    <div>
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
    </div>
  </Layout>
);

export default Album;
