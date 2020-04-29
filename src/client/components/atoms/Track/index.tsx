import { motion } from "framer-motion";
import * as React from "react";
import { injectIntl } from "react-intl";
import styles from "./track.module.scss";
import { LocalizedLink } from "client/components/atoms/locales/LocalizedLink";
import { Message } from "client/components/atoms/Message";
import { classNames, getFocusPerformersText } from "client/utils/strings";
import { FocusPerformersType, SongType } from "server/constants/commons";

const containerVariants = {
  hover: { backgroundColor: "#595959", transition: { duration: 0.3 } },
};

const textVariants = {
  hover: { color: "#ffffff", transition: { duration: 0.2 } },
};

interface TrackProps {
  number: number;
  songKey: string;
  title: string;
  type: SongType;
  focusPerformers: {
    name: string[];
    type: FocusPerformersType;
  };
  intl: any;
  className?: string;
}

export const Track = injectIntl(
  ({
    intl: { locale },
    focusPerformers,
    songKey,
    number,
    title,
    type,
    className,
  }: TrackProps) => {
    const focusPerformersText = React.useMemo(
      () => getFocusPerformersText(focusPerformers, locale),
      [focusPerformers, locale]
    );

    return songKey !== "OVERTURE" ? (
      <motion.div
        whileHover="hover"
        variants={containerVariants}
        className={classNames(styles.container, className)}
      >
        <LocalizedLink to={`/songs/${songKey}`}>
          <motion.span variants={textVariants} className={styles.number}>
            {number}.
          </motion.span>
          <div className={styles.content}>
            <motion.h3 variants={textVariants} className={styles.title}>
              {title}
            </motion.h3>
            <motion.div variants={textVariants} className={styles.description}>
              <span>
                #<Message text={type} />
              </span>
              <span>{focusPerformersText}</span>
            </motion.div>
          </div>
        </LocalizedLink>
      </motion.div>
    ) : (
      <div className={classNames(styles.container, className)}>
        <span className={styles.number}>{number}.</span>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>
            <span>
              #<Message text={type} />
            </span>
            <span>{focusPerformersText}</span>
          </div>
        </div>
      </div>
    );
  }
);
