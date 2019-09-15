import * as React from "react";
import { motion } from "framer-motion";
import styles from "./searchresultcard.module.scss";
import { LazyImage } from "components/atoms/LazyImage";
import { classNames } from "utils/strings";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";

const backgroundHover = {
  hover: {
    backgroundColor: "#757575",
    scale: 1.05,
  },
};

interface SearchResultCardProps {
  to: string;
  imgSrc: string;
  imgSrcSet: string;
  title: string;
  caption: string;
  secondCaption?: string;
  className?: string;
}

export const SearchResultCard = ({
  to,
  imgSrc,
  imgSrcSet,
  title,
  caption,
  secondCaption,
  className,
}: SearchResultCardProps) => {
  const [isHovered, setHover] = React.useState(false);

  return (
    <LocalizedLink to={to}>
      <motion.div
        whileHover="hover"
        variants={backgroundHover}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={classNames(styles.container, className)}
      >
        <div className={styles.imagePlaceholder}>
          <LazyImage
            notLazy
            src={imgSrc}
            srcSet={imgSrcSet}
            alt={title}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <motion.h3
            animate={{ color: isHovered ? "#ffffff" : "#595959" }}
            className={styles.title}
          >
            {title}
          </motion.h3>
          <motion.p
            animate={{ color: isHovered ? "#ffffff" : "#757575" }}
            className={styles.caption}
          >
            <span>{caption}</span>
            {secondCaption ? <span>{secondCaption}</span> : null}
          </motion.p>
        </div>
      </motion.div>
    </LocalizedLink>
  );
};
