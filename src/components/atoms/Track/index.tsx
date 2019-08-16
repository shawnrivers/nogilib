import * as React from "react";
import styles from "./track.module.scss";
import { focusPerformersType, SongType } from "types/responseTypes";
import { FormattedMessage } from "react-intl";
import { Language } from "utils/constants";
import { motion } from "framer-motion";
import { LocalizedLink } from "components/atoms/LocalizedLink";

const containerVariants = {
  hover: { backgroundColor: "#595959", transition: { duration: 0.2 } },
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
    type: focusPerformersType;
  };
  locale: Language;
  className?: string;
}

export const Track = (props: TrackProps) => {
  const focusPerformersText = React.useMemo(() => {
    const { focusPerformers } = props;
    let comma: string;
    switch (props.locale) {
      case Language.Zh:
        comma = "、";
        break;
      case Language.Ja:
        comma = "・";
        break;
      default:
        comma = ", ";
        break;
    }

    if (focusPerformers.name.length > 0) {
      if (focusPerformers.type === focusPerformersType.Center) {
        return (
          "C: " + focusPerformers.name.reduce((acc, curr) => acc + comma + curr)
        );
      }
      return focusPerformers.name.reduce((acc, curr) => acc + comma + curr);
    }
    return "";
  }, [props.focusPerformers, props.locale]);

  console.log({ key: props.songKey });

  return (
    <motion.div
      whileHover="hover"
      variants={containerVariants}
      className={`${styles.container} + ${
        props.className ? " " + props.className : ""
      }`}
    >
      <LocalizedLink to={`/songs/${props.songKey}`}>
        <motion.span variants={textVariants} className={styles.number}>
          {props.number}.
        </motion.span>
        <div className={styles.content}>
          <motion.h3 variants={textVariants} className={styles.title}>
            {props.title}
          </motion.h3>
          <motion.div variants={textVariants} className={styles.description}>
            <span>
              #<FormattedMessage {...({ id: props.type } as any)} />
            </span>
            <span>{focusPerformersText}</span>
          </motion.div>
        </div>
      </LocalizedLink>
    </motion.div>
  );
};
