import { motion } from "framer-motion";
import * as React from "react";
import styles from "./searchresultcard.module.scss";
import { Image } from "client/components/atoms/Image";
import { LocalizedLink } from "client/components/atoms/locales/LocalizedLink";
import { classNames } from "utils/strings";

const backgroundHover = {
  hover: {
    backgroundColor: "#757575",
    scale: 1.05,
  },
};

interface SearchResultCardProps {
  to: string;
  imgSrc: string;
  title: string;
  caption: string;
  secondCaption?: string;
  className?: string;
}

export const SearchResultCard = ({
  to,
  imgSrc,
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
          <Image
            src={imgSrc}
            alt={title}
            objectFit="cover"
            objectPosition="50% 0"
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
