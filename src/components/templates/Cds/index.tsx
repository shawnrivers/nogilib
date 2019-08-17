import * as React from "react";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { parse } from "query-string";
import { Artwork } from "components/atoms/Artwork";
import { PageTab, TabItem } from "components/molecules/PageTab";
import styles from "./cds.module.scss";
import { motion, AnimatePresence } from "framer-motion";

interface CdsProps {
  query: string;
  singles: {
    edges: {
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
  };
  albums: {
    edges: {
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
  };
}

const pageTabItems: TabItem[] = [
  {
    link: "/cds/?page=singles",
    page: "singles",
  },
  {
    link: "/cds/?page=albums",
    page: "albums",
  },
];

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

export const Cds = (props: CdsProps) => {
  const singles = props.singles.edges;
  const albums = props.albums.edges;

  const { page } = React.useMemo(() => parse(props.query), [props.query]);

  const pageCds = React.useMemo(() => (page === "albums" ? albums : singles), [
    page,
    albums,
    singles,
  ]);

  return (
    <div>
      <PageTab
        items={pageTabItems}
        selectedItem={page ? (page as string) : "singles"}
        className={styles.tabs}
      />
      <AnimatePresence>
        <motion.div
          key={page as string}
          exit="hidden"
          variants={listVariants}
          className={styles.grid}
        >
          {pageCds.map(({ node }) => (
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
