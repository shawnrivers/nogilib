import * as React from "react";
import { toCdNumber } from "utils/strings";
import styles from "./cd.module.scss";
import { Track } from "components/atoms/Track";
import { FocusPerformersType, SongType, CdType } from "types/responseTypes";
import { Artworks } from "components/molecules/Artworks";
import { FormattedMessage, FormattedDate } from "react-intl";
import { motion } from "framer-motion";
import { Language, Links } from "utils/constants";
import { useScrollRestoration } from "utils/hooks";
import { Layout } from "components/atoms/Layout";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";

const containerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const headingVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const contentContainerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

const contentVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

interface CdProps {
  type: CdType;
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
}

export const Cd = ({
  type,
  title,
  number,
  artworks,
  songs,
  release,
}: CdProps) => {
  useScrollRestoration();

  return (
    <div className={styles.background}>
      <Layout>
        <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
          <LocalizedLink
            to={type === CdType.Singles ? Links.Singles : Links.Albums}
            label="Back"
          >
            <ArrowBackIcon className={styles.back} />
          </LocalizedLink>
        </motion.div>
        <motion.div variants={containerVariants} className={styles.container}>
          <motion.div variants={headingVariants} className={styles.heading}>
            <h4 className={styles.number}>
              {toCdNumber(number)} {type.slice(0, -1)}
            </h4>
            <h1 className={styles.title}>{title}</h1>
          </motion.div>
          <motion.div
            variants={contentContainerVariants}
            className={styles.flexbox}
          >
            <motion.div variants={contentVariants} className={styles.artworks}>
              <Artworks artworks={artworks} title={title} />
            </motion.div>
            <motion.div variants={contentVariants} className={styles.content}>
              <section className={styles.section}>
                <h2 className={styles.subheading}>
                  <FormattedMessage {...({ id: "track" } as any)} />
                </h2>
                <ul className={styles.tracklist}>
                  {songs.map((song, index) => (
                    <li key={song.key} className={styles.track}>
                      <Track
                        songKey={song.key}
                        number={index + 1}
                        title={song.title}
                        type={song.type}
                        focusPerformers={song.focusPerformers}
                      />
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles.section}>
                <h2 className={styles.subheading}>
                  <FormattedMessage {...({ id: "release" } as any)} />
                </h2>
                <p className={styles.body}>
                  <FormattedDate
                    value={release}
                    year="numeric"
                    month="short"
                    day="numeric"
                  />
                </p>
              </section>
            </motion.div>
          </motion.div>
        </motion.div>
      </Layout>
    </div>
  );
};
