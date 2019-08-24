import * as React from "react";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { Artwork } from "components/atoms/Artwork";
import styles from "./cds.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { CdType } from "types/responseTypes";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
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

interface CdsProps {
  page: CdType;
  cds: {
    node: {
      title: string;
      number: string;
      artworks: {
        large: string;
        medium: string;
        small: string;
      }[];
    };
  }[];
}

export const Cds = ({ cds, page }: CdsProps) => {
  return (
    <AnimatePresence>
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
              <Artwork images={node.artworks[0]} title={node.title} />
            </LocalizedLink>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
