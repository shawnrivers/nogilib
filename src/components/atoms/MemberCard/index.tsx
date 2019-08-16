import * as React from "react";
import LazyLoad from "react-lazyload";
import styles from "./membercard.module.scss";
import { motion } from "framer-motion";

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
      whileHover={{ scale: 1.08, backgroundColor: "#d6d6d6" }}
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
      <div className={styles.name}>
        <span>{name}</span>
      </div>
    </motion.div>
  );
};
