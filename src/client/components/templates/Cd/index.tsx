import * as React from "react";
import { FormattedDate } from "react-intl";
import { motion } from "framer-motion";
import styles from "./cd.module.scss";
import { Track } from "client/components/atoms/Track";
import { Artworks } from "client/components/molecules/Artworks";
import { useScrollRestoration } from "client/utils/hooks";
import { PageContentLayout } from "client/components/atoms/PageContentLayout";
import { ArrowBackIcon } from "client/components/atoms/icons/ArrowBackIcon";
import { CdTabType } from "client/types/tabs";
import { Message } from "client/components/atoms/Message";
import { LocalizedLink } from "client/components/atoms/locales/LocalizedLink";
import { Links } from "client/utils/constants";
import { toCdNumber } from "client/utils/strings";
import { SongType, FocusPerformersType } from "server/utils/constants";

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
  type: CdTabType;
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
      <PageContentLayout>
        <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
          <LocalizedLink
            to={type === CdTabType.Singles ? Links.Singles : Links.Albums}
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
            className={styles.flexBox}
          >
            <motion.div variants={contentVariants} className={styles.artworks}>
              <Artworks artworks={artworks} title={title} />
            </motion.div>
            <motion.div variants={contentVariants} className={styles.content}>
              <section className={styles.section}>
                <h2 className={styles.subheading}>
                  <Message text="track" />
                </h2>
                <ul className={styles.trackList}>
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
                  <Message text="release" />
                </h2>
                <p className={styles.release}>
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
      </PageContentLayout>
    </div>
  );
};
