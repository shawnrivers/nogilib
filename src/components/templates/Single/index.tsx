import * as React from "react";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { graphql } from "gatsby";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { focusPerformersType, SongType } from "types/responseTypes";
import styles from "./single.module.scss";
import { motion } from "framer-motion";

export const query = graphql`
  query($number: String!) {
    singlesJson(number: { eq: $number }) {
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

interface SingleData {
  data: {
    singlesJson: {
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

const Single = ({ data }: SingleData) => (
  <Layout className={styles.background}>
    <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
      <LocalizedLink to="/cds/?page=singles">
        <ArrowBackIcon className={styles.back} />
      </LocalizedLink>
    </motion.div>
    <div>
      {data ? (
        <Cd
          type="single"
          title={data.singlesJson.title}
          number={data.singlesJson.number}
          artworks={data.singlesJson.artworks}
          songs={data.singlesJson.songs}
          release={data.singlesJson.release}
        />
      ) : (
        <h1>Single Page</h1>
      )}
    </div>
  </Layout>
);

export default Single;
