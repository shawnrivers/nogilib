import * as React from "react";
import { graphql } from "gatsby";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { focusPerformersType, SongType } from "types/responseTypes";
import styles from "./album.module.scss";
import { motion } from "framer-motion";

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
          type: focusPerformersType;
        };
      }[];
      release: string;
    };
  };
}

const navVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
  },
};

const Album = ({ data }: AlbumData) => (
  <Layout>
    <motion.nav initial="hidden" animate="visible" variants={navVariants}>
      <LocalizedLink to="/cds/?page=albums">
        <ArrowBackIcon className={styles.back} />
      </LocalizedLink>
    </motion.nav>
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
