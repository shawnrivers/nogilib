import * as React from "react";
import { motion } from "framer-motion";
import styles from "./cds.module.scss";
import { Artwork } from "client/components/atoms/Artwork";
import { LocalizedLink } from "client/components/atoms/locales/LocalizedLink";
import { CdTabType } from "client/types/tabs";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.03,
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

type CdsProps = {
  page: CdTabType;
  cds: {
    node: {
      title: string;
      number: string;
      artworks: string[];
    };
  }[];
};

export const Cds = ({ cds, page }: CdsProps) => {
  return (
    <motion.div
      key={page}
      exit="hidden"
      variants={listVariants}
      className={styles.grid}
    >
      {cds.map(({ node }) => (
        <motion.div
          variants={itemVariants}
          key={page + node.number}
          className={styles.artwork}
        >
          <LocalizedLink to={`/${page}/${node.number}`}>
            <Artwork imageSrc={node.artworks[0]} title={node.title} />
          </LocalizedLink>
        </motion.div>
      ))}
    </motion.div>
  );
};
