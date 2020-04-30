import { motion } from "framer-motion";
import * as React from "react";
import styles from "./artwork.module.scss";
import { classNames } from "utils/strings";
import { Image } from "client/components/atoms/Image";

const backgroundFade = {
  isHovered: {
    opacity: 0.7,
  },
  isNotHovered: {
    opacity: 0,
  },
};

const titleFade = {
  isHovered: {
    opacity: 1,
  },
  isNotHovered: {
    opacity: 0,
  },
};

type ArtworkProps = {
  imageSrc: string;
  title: string;
  className?: string;
};

export const Artwork: React.FC<ArtworkProps> = ({
  imageSrc,
  title,
  className,
}) => {
  const [isHovered, setHover] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ scale: 1.1 }}
      className={classNames(styles.container, className)}
    >
      <div className={styles.wrapper}>
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          className={styles.image}
        />
        <motion.div
          initial={false}
          animate={isHovered ? "isHovered" : "isNotHovered"}
          variants={backgroundFade}
          className={styles.background}
        />
        <motion.div
          initial={false}
          animate={isHovered ? "isHovered" : "isNotHovered"}
          variants={titleFade}
          className={styles.title}
        >
          <h3>{title}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};
