import * as React from "react";
import LazyLoad from "react-lazyload";
import styles from "./membercard.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hover: {
    scale: 1.08,
    backgroundColor: "#e887a3",
    transition: { duration: 0.3 },
  },
};

const textVariants = {
  hover: { color: "#ffffff", transition: { duration: 0.3 } },
};

interface MemberCardProps {
  image: {
    large: string;
    small: string;
  };
  name: string;
}

export const MemberCard = ({ image, name }: MemberCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      variants={containerVariants}
      className={styles.container}
    >
      <LazyLoad offset={100}>
        <img
          src={image.small}
          srcSet={image.large + " 2x"}
          alt={name}
          className={styles.image}
        />
      </LazyLoad>
      <motion.div variants={textVariants} className={styles.name}>
        <span>{name}</span>
      </motion.div>
    </motion.div>
  );
};
