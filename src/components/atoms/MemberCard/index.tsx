import * as React from "react";
import LazyLoad from "react-lazyload";
import styles from "./membercard.module.scss";
import { motion } from "framer-motion";
import { injectIntl } from "react-intl";
import { Language } from "utils/constants";

interface MemberCardProps {
  image: {
    large: string;
    small: string;
  };
  name: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
  };
  highlightBgColor?: string;
  highlightTextColor?: string;
  isCenter?: boolean;
  intl: any;
}

export const MemberCard = injectIntl(
  ({
    image,
    name,
    intl: { locale },
    highlightBgColor,
    highlightTextColor,
    isCenter,
  }: MemberCardProps) => {
    const nameText = React.useMemo(
      () =>
        locale === Language.En
          ? name.lastNameEn + " " + name.firstNameEn
          : name.lastName + " " + name.firstName,
      []
    );

    const containerVariants = React.useMemo(
      () =>
        highlightBgColor
          ? {
              hover: {
                scale: 1.08,
                backgroundColor: highlightBgColor,
              },
            }
          : {
              hover: {
                scale: 1.08,
              },
            },
      [highlightBgColor]
    );

    const textVariants = React.useMemo(
      () =>
        highlightTextColor
          ? {
              hover: {
                color: highlightTextColor,
              },
            }
          : undefined,
      [highlightTextColor]
    );

    // TODO: Kojiharu condition.

    return (
      <motion.div
        whileHover="hover"
        variants={containerVariants}
        transition={{ duration: 0.3 }}
        style={isCenter ? { backgroundColor: "#af7dce" } : undefined}
        className={styles.container}
      >
        <LazyLoad offset={100}>
          <img
            src={image.small}
            srcSet={image.large + " 2x"}
            alt={nameText}
            className={styles.image}
          />
        </LazyLoad>
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.3 }}
          style={isCenter ? { color: "#ffffff" } : undefined}
          className={styles.name}
        >
          <span>{nameText}</span>
        </motion.div>
      </motion.div>
    );
  }
);
