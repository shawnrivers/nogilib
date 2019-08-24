import * as React from "react";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { Artwork } from "components/atoms/Artwork";
import { PageTab, TabItem } from "components/molecules/PageTab";
import styles from "./cds.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Links } from "utils/constants";
import { CdType } from "types/responseTypes";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.02,
      delayChildren: 0.2,
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const pageTabItems: TabItem[] = [
  {
    link: Links.Singles,
    page: CdType.Singles,
  },
  {
    link: Links.Albums,
    page: CdType.Albums,
  },
];

interface CdsProps {
  page: string;
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
    <div>
      <PageTab
        items={pageTabItems}
        selectedItem={page}
        className={styles.tabs}
      />
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
    </div>
  );
};
